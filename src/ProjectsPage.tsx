import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  FileText,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/casa/logo-BfpIqaN2.png";

const WHATSAPP =
  "https://wa.me/5561993732273?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Casa%20de%20Seu%20Z%C3%A9%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const projects = [
  {
    title: "Brilho da Esmeralda",
    image: "/logo-brilho-da-esmeralda.png",
    imageAlt: "Logo do projeto O Brilho da Esmeralda",
    status: "Em execução",
    objective:
      "Implantação e desenvolvimento do Projeto Brilho da Esmeralda, por meio da realização de cursos de corte e costura.",
    term: "Termo de Fomento nº 995692/2026",
    partner: "Ministério das Mulheres",
    value: "R$ 100.000,00",
    duration: "6 meses",
    href: "/brilho-da-esmeralda",
    action: "Ver mais",
  },
  {
    title: "O Brilho do Sol",
    image: "/logo-brilho-do-sol.png",
    imageAlt: "Logo do projeto Brilho do Sol",
    status: "Executado",
    objective:
      "Promover desenvolvimento socioeconômico, segurança alimentar e capacitação para mulheres e crianças de comunidades do Distrito Federal e Goiás.",
    term: "Termo de Fomento nº 949053/2023",
    partner: "Ministério das Mulheres",
    value: "R$ 1.000.000,00",
    duration: "abril a dezembro de 2024",
    href: "/brilho-do-sol",
    action: "Ver mais",
  },
];

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Quem Somos" },
  { href: "/projetos-sociais", label: "Projetos Sociais" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#transparencia", label: "Transparência" },
  { href: "/#contato", label: "Contato" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="hidden bg-[var(--brand-dark-red)] text-white/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" /> SHSN CH 204 CJ 1 Casa 10 —
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
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white">
              <img src={logo} alt="" className="h-10 w-10 object-contain" />
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
                aria-current={link.href === "/projetos-sociais" ? "page" : undefined}
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
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[var(--brand-dark-red)] py-20 text-white md:py-28">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao início
            </a>
            <div className="mt-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                <Sparkles className="h-4 w-4" /> Impacto social
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                Projetos Sociais
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Conheça as iniciativas da Casa de Seu Zé, seus objetivos, parcerias e documentos de
                transparência.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Nossas iniciativas
                </span>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Projetos em destaque</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-foreground/65 md:text-right">
                Esta página será atualizada conforme novos documentos, resultados e registros forem
                disponibilizados.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[2rem] border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white p-7 md:p-10">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-dark-red)] shadow-md">
                      {project.status}
                    </span>
                  </div>
                  <div className="p-7 md:p-9">
                    <h3 className="text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                      <strong className="text-foreground">Objetivo: </strong>
                      {project.objective}
                    </p>

                    {project.term ? (
                      <div className="mt-6 space-y-3 border-y py-5 text-sm">
                        <div className="flex items-start gap-3">
                          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                          <div>
                            <div className="font-bold uppercase tracking-wide">{project.term}</div>
                            <div className="mt-1 text-foreground/60">{project.partner}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/70">
                          <CalendarDays className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                          <span>
                            {project.value} · Vigência de {project.duration}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-dark-red)] px-6 py-3 text-sm font-bold text-[var(--brand-dark-red)] transition hover:bg-[var(--brand-dark-red)] hover:text-white"
                      >
                        {project.action} <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--brand-dark-red)] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white">
              <img src={logo} alt="" className="h-10 w-10 object-contain" />
            </span>
            <div>
              <div className="font-extrabold">CASA DE SEU ZÉ</div>
              <div className="text-xs text-white/65">Centro Cultural e Social</div>
            </div>
          </div>
          <p className="text-sm text-white/65">
            © {new Date().getFullYear()} Centro Cultural e Social Casa de Seu Zé.
          </p>
        </div>
      </footer>
    </div>
  );
}
