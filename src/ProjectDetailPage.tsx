import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  WalletCards,
} from "lucide-react";
import logo from "@/assets/casa/logo-BfpIqaN2.png";
import MobileNav from "@/components/MobileNav";

type ProjectKey = "esmeralda" | "sol";

const WHATSAPP =
  "https://wa.me/5561993732273?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Casa%20de%20Seu%20Z%C3%A9%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const budgetRows = [
  ["Coordenador Geral - 40 horas semanais", "MÊS", "6", "R$ 5.000,00", "R$ 30.000,00"],
  ["Auxiliar de Logística - 40 horas semanais", "MÊS", "6", "R$ 2.500,00", "R$ 15.000,00"],
  ["Serviço de Gestão do Projeto e Acompanhamento", "MÊS", "6", "R$ 2.500,00", "R$ 15.000,00"],
  ["Locação de 8 máquinas de costura industrial", "MÊS", "4", "R$ 2.342,89", "R$ 9.371,54"],
  ["Professor - 14 horas semanais por 4 meses", "MÊS", "4", "R$ 2.200,00", "R$ 8.800,00"],
  ["Monitor de Corte e Costura", "MÊS", "4", "R$ 1.500,00", "R$ 6.000,00"],
  ["Tecido Jaquard", "M", "100", "R$ 22,90", "R$ 2.290,00"],
  ["Tecido Oxford", "M", "100", "R$ 15,30", "R$ 1.530,00"],
  ["Tecido Cetim", "M", "100", "R$ 12,96", "R$ 1.296,00"],
  ["Tecido Percal", "M", "50", "R$ 30,30", "R$ 1.515,00"],
  ["Tecido Renda/Tule Royal", "M", "50", "R$ 31,30", "R$ 1.565,00"],
  ["Tecido Lese", "M", "50", "R$ 28,27", "R$ 1.413,50"],
  ["Cordão / Alça de algodão", "UN", "4", "R$ 38,60", "R$ 154,40"],
  ["Esquadro MDF / Linha reta", "UN", "15", "R$ 11,77", "R$ 176,55"],
  ["Gripir variado (item 1)", "UN", "5", "R$ 44,26", "R$ 221,30"],
  ["Gripir variado (item 2)", "UN", "5", "R$ 74,26", "R$ 371,30"],
  ["Gripir variado (item 3)", "UN", "5", "R$ 89,93", "R$ 449,65"],
  ["Gripir variado (item 4)", "UN", "10", "R$ 75,60", "R$ 756,00"],
  ["Gripir variado (item 5)", "UN", "5", "R$ 35,60", "R$ 178,00"],
  ["Bordado inglês 2554 / Galão dourado", "UN", "6", "R$ 37,60", "R$ 225,60"],
  ["Bordado inglês poliéster", "UN", "16", "R$ 24,93", "R$ 398,88"],
  ["Bordado inglês (item 10)", "UN", "12", "R$ 16,90", "R$ 202,80"],
  ["Tesoura Tik Tak / Arremate", "UN", "10", "R$ 3,96", "R$ 39,60"],
  ["Tesoura profissional / Titânio", "UN", "5", "R$ 38,99", "R$ 194,95"],
  ["Fita metálica 1 cm com 50 m", "UN", "3", "R$ 39,00", "R$ 117,00"],
  ["Botão camisa grossa - pacote com 144", "PCT", "3", "R$ 8,50", "R$ 25,50"],
  ["Fita cetim nº 05 - 10 m", "UN", "10", "R$ 5,87", "R$ 58,70"],
  ["Fita cetim nº 03 - 10 m", "UN", "10", "R$ 4,47", "R$ 44,70"],
  ["Fio overlock 100 g", "UN", "36", "R$ 7,93", "R$ 285,48"],
  ["Sianinha larga / ouro fina", "M", "7", "R$ 12,27", "R$ 85,89"],
  ["Sianinha 334/03 - média / fina", "M", "10", "R$ 9,97", "R$ 99,70"],
  ["Renda 217 / R03", "UN", "50", "R$ 38,30", "R$ 1.915,00"],
  ["Botão unidade", "UN", "98", "R$ 0,63", "R$ 61,74"],
  ["Abridor de casa P", "UN", "5", "R$ 2,00", "R$ 10,00"],
  ["Fita métrica", "UN", "5", "R$ 3,93", "R$ 19,65"],
  ["Alfinete corrente 29 com 50 g", "UN", "2", "R$ 18,60", "R$ 37,20"],
  ["Viés 35 mm - 20 m algodão", "UN", "9", "R$ 9,93", "R$ 89,37"],
];

const projectData = {
  esmeralda: {
    name: "O Brilho da Esmeralda",
    logo: "/logo-brilho-da-esmeralda.png",
    logoAlt: "Logo do projeto O Brilho da Esmeralda",
    period: "2026",
    status: "Em execução",
    summary:
      "O projeto promove formação profissional por meio de cursos de corte e costura, ampliando oportunidades de autonomia econômica e geração de renda para mulheres da comunidade.",
    description:
      "A iniciativa prevê estrutura de coordenação, gestão e acompanhamento, equipe de formação, locação de oito máquinas industriais e aquisição dos tecidos, aviamentos e instrumentos necessários para as atividades práticas.",
    term: "Termo de Fomento nº 995692/2026",
    value: "R$ 100.000,00",
    partner: "Ministério das Mulheres - Secretaria Nacional de Autonomia Econômica",
    document: "/termo-de-fomento-995692-2026.pdf",
    documentLabel: "Baixar Termo de Fomento",
    budget: true,
  },
  sol: {
    name: "Brilho do Sol",
    logo: "/logo-brilho-do-sol.png",
    logoAlt: "Logo do projeto Brilho do Sol",
    period: "Abril a dezembro de 2024",
    status: "Executado",
    summary:
      "O projeto promoveu desenvolvimento socioeconômico e segurança alimentar para mulheres e crianças de comunidades do Distrito Federal e de Goiás.",
    description:
      "As ações reuniram produção sustentável de hortaliças, educação ambiental e empreendedorismo nas áreas de beleza, criação e customização de roupas, informática e artesanato. Durante as formações, os filhos das participantes tiveram acesso a atividades esportivas, incluindo jiu-jítsu e futebol.",
    term: "Termo de Fomento nº 949053/2023",
    value: "R$ 1.000.000,00",
    partner: "Ministério das Mulheres",
    document: "/termo-de-fomento-949053-2023-brilho-do-sol.pdf",
    documentLabel: "Baixar Termo de Fomento",
    budget: false,
  },
} satisfies Record<ProjectKey, object>;

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Quem Somos" },
  { href: "/projetos-sociais", label: "Projetos Sociais" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#transparencia", label: "Transparência" },
  { href: "/#contato", label: "Contato" },
];

export default function ProjectDetailPage({ project }: { project: ProjectKey }) {
  const data = projectData[project];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="hidden bg-[var(--brand-dark-red)] text-white/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" /> SHSN CH 204 CJ 1 Casa 10 -
              Ceilândia, DF
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[var(--accent)]" /> (61) 99373-2273
            </span>
          </div>
          <span className="flex items-center gap-2">
            <Instagram className="h-3.5 w-3.5" /> @casadeseuze
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--brand-dark-red)] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-white">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                Centro Cultural e Social
              </span>
              <span className="block text-base font-extrabold tracking-wide">CASA DE SEU ZÉ</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.href === "/projetos-sociais"
                    ? "border-b-2 border-[var(--accent)] pb-1 text-white"
                    : "text-white/80 transition hover:text-white"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <MobileNav links={navLinks} />
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 sm:px-5"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-secondary py-10 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <a
              href="/projetos-sociais"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-dark-red)] transition hover:opacity-70"
            >
              <ArrowLeft className="h-4 w-4" /> Todos os projetos
            </a>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    {data.status}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground/60">
                    <CalendarDays className="h-4 w-4" /> {data.period}
                  </span>
                </div>
                <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                  {data.name}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
                  {data.summary}
                </p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border bg-white p-8 shadow-xl md:p-12">
                <img
                  src={data.logo}
                  alt={data.logoAlt}
                  className="mx-auto max-h-[440px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.35fr,0.65fr]">
            <article>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                Sobre o projeto
              </span>
              <h2 className="mt-3 text-3xl font-extrabold">
                Transformação por meio de oportunidades
              </h2>
              <p className="mt-6 text-base leading-8 text-foreground/75">{data.description}</p>

              {project === "sol" ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Produção sustentável de alimentos",
                    "Educação ambiental",
                    "Beleza e empreendedorismo",
                    "Criação e customização de roupas",
                    "Informática e artesanato",
                    "Jiu-jítsu e futebol para crianças",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-secondary p-4 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>

            <aside className="h-fit rounded-[2rem] bg-[var(--brand-dark-red)] p-7 text-white shadow-xl md:p-9">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <FileText className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Transparência</span>
              </div>
              <h2 className="mt-5 text-xl font-extrabold uppercase leading-snug">{data.term}</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/50">Valor</dt>
                  <dd className="mt-1 text-lg font-bold">{data.value}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/50">Órgão parceiro</dt>
                  <dd className="mt-1 leading-relaxed text-white/85">{data.partner}</dd>
                </div>
              </dl>
              <a
                href={data.document}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold transition hover:brightness-110"
              >
                <Download className="h-4 w-4" /> {data.documentLabel}
              </a>
            </aside>
          </div>
        </section>

        {data.budget ? (
          <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    <WalletCards className="h-4 w-4" /> Plano de aplicação
                  </span>
                  <h2 className="mt-3 text-3xl font-extrabold">Planilha orçamentária</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
                    Detalhamento dos recursos previstos para equipe, estrutura, materiais e insumos
                    de corte e costura.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--brand-dark-red)] px-6 py-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-white/55">Total geral</div>
                  <div className="mt-1 text-2xl font-extrabold">R$ 100.000,00</div>
                </div>
              </div>

              <div className="mt-10 overflow-x-auto rounded-2xl border bg-white shadow-sm">
                <table className="min-w-[820px] w-full text-left text-sm">
                  <thead className="bg-[var(--brand-dark-red)] text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Descrição</th>
                      <th className="px-4 py-4 font-semibold">Un.</th>
                      <th className="px-4 py-4 text-right font-semibold">Qtde.</th>
                      <th className="px-4 py-4 text-right font-semibold">Valor unitário</th>
                      <th className="px-5 py-4 text-right font-semibold">Valor total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetRows.map((row, index) => (
                      <tr key={`${row[0]}-${index}`} className="border-t even:bg-secondary/50">
                        <td className="px-5 py-3.5 font-medium">{row[0]}</td>
                        <td className="px-4 py-3.5 text-foreground/60">{row[1]}</td>
                        <td className="px-4 py-3.5 text-right text-foreground/70">{row[2]}</td>
                        <td className="px-4 py-3.5 text-right text-foreground/70">{row[3]}</td>
                        <td className="px-5 py-3.5 text-right font-semibold">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="border-t-2 border-[var(--brand-dark-red)] bg-white">
                    <tr>
                      <td
                        colSpan={4}
                        className="px-5 py-5 text-right font-bold uppercase tracking-wider"
                      >
                        Total geral
                      </td>
                      <td className="px-5 py-5 text-right text-lg font-extrabold text-[var(--brand-dark-red)]">
                        R$ 100.000,00
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="bg-[var(--brand-dark-red)] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-white">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </span>
            <div>
              <div className="font-extrabold">CASA DE SEU ZÉ</div>
              <div className="text-xs text-white/65">Centro Cultural e Social</div>
            </div>
          </div>
          <p className="text-sm text-white/65">© {new Date().getFullYear()} Casa de Seu Zé.</p>
        </div>
      </footer>
    </div>
  );
}
