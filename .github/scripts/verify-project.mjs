import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const base = process.env.VERIFY_URL || "http://127.0.0.1:4173";
const server = process.env.VERIFY_URL ? null : spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4173"], { stdio: "inherit" });
let browser;
const errors = [];
const results = [];
await mkdir("artifacts", { recursive: true });
try {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(base)).ok) break; } catch {}
    if (i === 59) throw new Error("Preview did not start");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  browser = await chromium.launch({ headless: true });
  for (const [device, viewport] of [["desktop", { width: 1440, height: 1000 }], ["mobile", { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport });
    page.on("pageerror", (error) => errors.push(`${device}: ${error.message}`));
    for (const path of ["/projetos-sociais", "/mulheres-de-axe", "/transparencia-dos-projetos"]) {
      await page.goto(base + path, { waitUntil: "networkidle" });
      await page.locator("main img").evaluateAll((images) => Promise.all(images.map((image) => image.decode())));
      assert.equal(await page.locator("h1").count(), 1);
      assert(await page.getByText("Mulheres de Axé: Saberes, Beleza e Autonomia", { exact: true }).count() > 0);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${device} overflow: ${path}`);
      if (path === "/projetos-sociais") {
        const card = page.locator("article").filter({ has: page.getByRole("heading", { name: "Mulheres de Axé: Saberes, Beleza e Autonomia", exact: true }) });
        assert.equal(await page.locator("article").count(), 3);
        assert.equal(await card.getByRole("link", { name: "Ver mais" }).getAttribute("href"), "/mulheres-de-axe");
        assert((await card.textContent()).includes("R$ 200.000,00"));
      }
      if (path === "/mulheres-de-axe") {
        assert.equal(await page.locator("table tbody tr").count(), 15);
        assert.equal((await page.locator("table tfoot td").textContent()).trim(), "R$ 125.000,62");
        assert.equal(await page.locator("#evento-lancamento").count(), 0);
        assert.equal(await page.locator('a[href*="edital-"]').count(), 0);
        assert((await page.locator("main").textContent()).includes("21260.003177/2026-14"));
        assert.equal(await page.getByRole("link", { name: "Baixar Termo de Fomento" }).getAttribute("href"), "/termo-de-fomento-mulheres-de-axe-sei-65936818.pdf");
        await page.screenshot({ path: `artifacts/${device}-project.png`, fullPage: true });
        await page.locator("#planilha-orcamentaria").scrollIntoViewIfNeeded();
        await page.screenshot({ path: `artifacts/${device}-budget.png`, fullPage: false });
      }
      if (path === "/transparencia-dos-projetos") {
        const card = page.locator("#mulheres-de-axe");
        assert((await card.textContent()).includes("41360007"));
        assert((await card.textContent()).includes("18/11/2026"));
        assert.equal(await card.locator('a[href="/mulheres-de-axe#planilha-orcamentaria"]').count(), 1);
        await card.screenshot({ path: `artifacts/${device}-transparency.png` });
      }
      results.push({ device, path, result: "passed" });
    }
    for (const [path, title] of [["/brilho-da-esmeralda", "O Brilho da Esmeralda"], ["/brilho-do-sol", "Brilho do Sol"]]) {
      await page.goto(base + path, { waitUntil: "networkidle" });
      assert.equal(await page.getByRole("heading", { level: 1, name: title, exact: true }).count(), 1);
      assert.equal(await page.getByRole("heading", { name: "Remuneração prevista da equipe", exact: true }).count(), 0);
      if (path.includes("esmeralda")) assert.equal(await page.locator("table tbody tr").count(), 37);
    }
    await page.goto(base + "/projetos-sociais/mulheres-de-axe", { waitUntil: "networkidle" });
    assert.equal(await page.getByRole("heading", { level: 1, name: "Mulheres de Axé: Saberes, Beleza e Autonomia", exact: true }).count(), 1);
    await page.close();
  }
  const pdf = await fetch(base + "/termo-de-fomento-mulheres-de-axe-sei-65936818.pdf");
  assert(pdf.ok);
  assert(pdf.headers.get("content-type").includes("application/pdf"));
  assert.equal(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).toString(), "%PDF-");
  for (const path of ["/logo-mulheres-de-axe.png", "/quadro-remuneracao-mulheres-de-axe.jpg"]) assert((await fetch(base + path)).ok);
  assert.deepEqual(errors, []);
  await writeFile("artifacts/verification.json", JSON.stringify({ base, results, errors }, null, 2));
  console.log("Desktop, mobile, existing projects, route alias, PDF and assets passed.");
} finally {
  await browser?.close();
  server?.kill();
}
