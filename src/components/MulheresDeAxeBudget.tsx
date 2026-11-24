import { Download, WalletCards } from "lucide-react";
import {
  mulheresDeAxe,
  mulheresDeAxeBudgetRows,
  mulheresDeAxeBudgetSubtotal,
} from "@/data/mulheresDeAxe";

export default function MulheresDeAxeBudget() {
  return (
    <section id="planilha-orcamentaria" className="scroll-mt-28 bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <WalletCards className="h-4 w-4" /> Plano de aplicação
            </span>
            <h2 className="mt-3 text-3xl font-extrabold">Remuneração prevista da equipe</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              Funções, períodos e valores previstos no quadro de equipe do projeto. Estes valores
              representam a previsão de despesas, e não pagamentos realizados.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl bg-[var(--brand-dark-red)] px-6 py-4 text-white">
            <div className="text-xs uppercase tracking-wider text-white/65">Subtotal da equipe</div>
            <div className="mt-1 text-2xl font-extrabold">{mulheresDeAxeBudgetSubtotal}</div>
            <a href={mulheresDeAxe.budgetSource} download className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold transition hover:brightness-110">
              <Download className="h-3.5 w-3.5" /> Baixar quadro original
            </a>
          </div>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border bg-white shadow-sm" tabIndex={0} role="region" aria-label="Tabela de remuneração prevista da equipe">
          <table className="w-full min-w-[820px] text-left text-sm">
            <caption className="sr-only">Remuneração prevista da equipe do projeto Mulheres de Axé</caption>
            <thead className="bg-[var(--brand-dark-red)] text-white">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Descrição</th>
                <th scope="col" className="px-4 py-4 font-semibold">Unidade</th>
                <th scope="col" className="px-4 py-4 text-right font-semibold">Quantidade</th>
                <th scope="col" className="px-4 py-4 text-right font-semibold">Valor unitário</th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">Valor total</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mulheresDeAxeBudgetRows.map((row) => (
                <tr key={row[0]} className="transition hover:bg-secondary/60">
                  <th scope="row" className="px-5 py-3.5 font-medium">{row[0]}</th>
                  <td className="px-4 py-3.5 text-foreground/60">{row[1]}</td>
                  <td className="px-4 py-3.5 text-right text-foreground/70">{row[2]}</td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-right text-foreground/70">{row[3]}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-right font-semibold">{row[4]}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t-2 border-[var(--brand-dark-red)] bg-white">
              <tr>
                <th scope="row" colSpan={4} className="px-5 py-5 text-right font-bold uppercase tracking-wider">Subtotal da equipe</th>
                <td className="whitespace-nowrap px-5 py-5 text-right text-lg font-extrabold text-[var(--brand-dark-red)]">{mulheresDeAxeBudgetSubtotal}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/65">
          O quadro acima contempla somente as despesas de equipe disponibilizadas. O valor global
          da parceria é de {mulheresDeAxe.value}. Os valores unitários e totais foram mantidos
          conforme o quadro original, inclusive seus arredondamentos.
        </p>
      </div>
    </section>
  );
}
