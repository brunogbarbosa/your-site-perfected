import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarClock,
  Download,
  FileSpreadsheet,
  FileText,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import logo from "@/assets/casa/logo-BfpIqaN2.png";
import MobileNav from "@/components/MobileNav";

const WHATSAPP =
  "https://wa.me/5561993732273?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Casa%20de%20Seu%20Z%C3%A9%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Quem Somos" },
  { href: "/projetos-sociais", label: "Projetos Sociais" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/transparencia-dos-projetos", label: "Transparência" },
  { href: "/#contato", label: "Contato" },
];

const projects = [
  {
    name: "O Brilho da Esmeralda",
    logo: "/logo-brilho-da-esmeralda.png",
    logoAlt: "Logo do projeto O Brilho da Esmeralda",
    term: "Termo de Fomento nº 995692/2026",
    value: "R$ 100.000,00",
    status: "Em execução",
    partnership: {
      osc: "Centro Cultural e Social Casa de Seu Zé",
      cnpj: "18.181.775/0001-76",
      amendment: "Emenda Parlamentar nº 28260003",
      amendmentAuthor: "Deputada Federal Érika Kokay",
      signatureDate: "17/06/2026",
    },
    accountability: {
      status: "Parceria em execução — prestação de contas ainda não apresentada",
      expectedDate: "Até 15/02/2027 (60 dias após o término previsto da vigência)",
      submittedDate: "Ainda não apresentada",
      analysisDeadline: "150 dias após o recebimento, prorrogável até o limite de 300 dias",
      result: "Pendente — parceria em execução",
    },
    documents: [
      {
        title: "Termo de Fomento nº 995692/2026",
        description: "Documento oficial completo da parceria com o Ministério das Mulheres.",
        href: "/termo-de-fomento-995692-2026.pdf",
        label: "Baixar PDF",
        icon: FileText,
        download: true,
      },
      {
        title: "Plano de aplicação dos recursos",
        description: "Planilha orçamentária completa, com 37 rubricas e total geral do projeto.",
        href: "/brilho-da-esmeralda#planilha-orcamentaria",
        label: "Ver planilha",
        icon: FileSpreadsheet,
        download: false,
      },
      {
        title: "Página do projeto",
        description: "Objetivos, período, órgão parceiro e demais informações da iniciativa.",
        href: "/brilho-da-esmeralda",
        label: "Ver projeto",
        icon: ShieldCheck,
        download: false,
      },
    ],
  },
  {
    name: "Brilho do Sol",
    logo: "/logo-brilho-do-sol.png",
    logoAlt: "Logo do projeto Brilho do Sol",
    term: "Termo de Fomento nº 949053/2023",
    value: "R$ 1.000.000,00",
    status: "Executado",
    partnership: {
      osc: "Federação Habitacional do Sol Nascente",
      cnpj: "03.635.287/0001-14",
      amendment: "Emenda Parlamentar nº 41360008",
      amendmentAuthor: "Senador Izalci Lucas",
      signatureDate: "30/11/2023",
    },
    accountability: {
      status: "Informação de andamento não disponibilizada nos documentos publicados",
      expectedDate: "Até 28/02/2025, com possibilidade de prorrogação por até 30 dias",
      submittedDate: "Não informada nos documentos publicados",
      analysisDeadline: "150 dias após o recebimento, prorrogável até o limite de 300 dias",
      result: "Não informado nos documentos publicados",
    },
    documents: [
      {
        title: "Termo de Fomento nº 949053/2023",
        description: "Documento oficial completo referente à execução do projeto Brilho do Sol.",
        href: "/termo-de-fomento-949053-2023-brilho-do-sol.pdf",
        label: "Baixar PDF",
        icon: FileText,
        download: true,
      },
      {
        title: "Página do projeto",
        description: "Período, áreas de atuação, valor e informações consolidadas da iniciativa.",
        href: "/brilho-do-sol",
        label: "Ver projeto",
        icon: ShieldCheck,
        download: false,
      },
    ],
  },
];

export default function TransparencyProjectsPage() {
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
                  link.href === "/transparencia-dos-projetos"
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
        <section className="bg-[#173f72] py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <a
              href="/projetos-sociais"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Projetos Sociais
            </a>
            <div className="mt-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
                <ShieldCheck className="h-4 w-4" /> Acesso público
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                Transparência dos Projetos
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Documentos, valores e informações dos projetos sociais desenvolvidos pela Casa de
                Seu Zé.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl space-y-12 px-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-[2rem] border bg-card shadow-sm"
              >
                <div className="grid lg:grid-cols-[0.72fr,1.28fr]">
                  <div className="flex flex-col justify-between bg-secondary p-7 md:p-10">
                    <div>
                      <span className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                        {project.status}
                      </span>
                      <div className="mt-7 rounded-2xl bg-white p-2 shadow-sm md:p-3">
                        <img
                          src={project.logo}
                          alt={project.logoAlt}
                          className="mx-auto max-h-80 w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-7">
                      <h2 className="text-2xl font-extrabold uppercase md:text-3xl">
                        {project.name}
                      </h2>
                      <p className="mt-3 text-sm font-semibold text-[var(--brand-dark-red)]">
                        {project.term}
                      </p>
                      <p className="mt-1 text-sm text-foreground/60">Valor: {project.value}</p>
                    </div>
                  </div>

                  <div className="space-y-9 p-7 md:p-10">
                    <section>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                        <Building2 className="h-4 w-4" /> Dados da parceria
                      </span>
                      <dl className="mt-5 grid gap-4 rounded-2xl border bg-secondary/45 p-5 sm:grid-cols-2">
                        {[
                          ["Nome da OSC", project.partnership.osc],
                          ["CNPJ", project.partnership.cnpj],
                          ["Número da emenda", project.partnership.amendment],
                          ["Autoria da emenda", project.partnership.amendmentAuthor],
                          ["Data de assinatura", project.partnership.signatureDate],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className={label === "Nome da OSC" ? "sm:col-span-2" : ""}
                          >
                            <dt className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                              {label}
                            </dt>
                            <dd className="mt-1 text-sm font-semibold leading-relaxed">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>

                    <section>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                        <CalendarClock className="h-4 w-4" /> Situação da prestação de contas
                      </span>
                      <dl className="mt-5 divide-y rounded-2xl border bg-card px-5">
                        {[
                          ["Situação atual", project.accountability.status],
                          ["Data prevista para apresentação", project.accountability.expectedDate],
                          ["Data em que foi apresentada", project.accountability.submittedDate],
                          ["Prazo para análise", project.accountability.analysisDeadline],
                          ["Resultado conclusivo", project.accountability.result],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="py-4 sm:grid sm:grid-cols-[0.8fr,1.2fr] sm:gap-5"
                          >
                            <dt className="text-xs font-bold uppercase tracking-wide text-foreground/50">
                              {label}
                            </dt>
                            <dd className="mt-1 text-sm font-medium leading-relaxed sm:mt-0">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </section>

                    <section>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                        Documentos disponíveis
                      </span>
                      <div className="mt-6 space-y-4">
                        {project.documents.map((document) => {
                          const Icon = document.icon;
                          return (
                            <a
                              key={document.title}
                              href={document.href}
                              target={document.download ? "_blank" : undefined}
                              rel={document.download ? "noreferrer" : undefined}
                              className="group flex flex-col gap-4 rounded-2xl border p-5 transition hover:border-[var(--accent)] hover:bg-secondary/60 sm:flex-row sm:items-center"
                            >
                              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                                <Icon className="h-6 w-6" />
                              </span>
                              <span className="flex-1">
                                <span className="block font-bold">{document.title}</span>
                                <span className="mt-1 block text-sm leading-relaxed text-foreground/60">
                                  {document.description}
                                </span>
                              </span>
                              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-dark-red)]">
                                {document.download ? <Download className="h-4 w-4" /> : null}
                                {document.label}{" "}
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
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
