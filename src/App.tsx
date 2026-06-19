import {
  MapPin,
  Phone,
  Instagram,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Heart,
  Users,
  FileText,
  Building2,
  Handshake,
  ClipboardList,
  Download,
} from "lucide-react";
import fachada from "@/assets/casa/fachada-BWDSsk2z.png";
import g1 from "@/assets/casa/g1-CAW1w70p.png";
import g2 from "@/assets/casa/g2-COA-Oybg.png";
import g3 from "@/assets/casa/g3-DaIPNvfT.png";
import g4 from "@/assets/casa/g4-Dd1Jwsn2.png";
import g5 from "@/assets/casa/g5-yXjhplyL.png";
import g6 from "@/assets/casa/g6-DVesCSHU.png";
import logo from "@/assets/casa/logo-BfpIqaN2.png";
import ministerioMulheres from "@/assets/ministerio-mulheres.png.asset.json";

const WHATSAPP =
  "https://wa.me/5561993732273?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Casa%20de%20Seu%20Z%C3%A9%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Quem Somos" },
  { href: "#cursos", label: "Cursos" },
  { href: "#acoes", label: "Ações Sociais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#transparencia", label: "Transparência" },
  { href: "#contato", label: "Contato" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Top bar */}
      <div className="hidden bg-[var(--brand-dark-red)] text-white/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" /> SHSN CH 204 CJ 1 Casa 10 — Ceilândia,  DF
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[var(--accent)]" /> (61) 99373-2273
            </span>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/80 transition hover:text-white"
          >
            <Instagram className="h-3.5 w-3.5" /> @casadeseuze
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--brand-dark-red)] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <a href="#inicio" className="flex items-center gap-3">
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
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white/85 transition hover:text-white">
                {l.label}
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

      {/* Banner Parceria Federal */}
      <div
        className="border-b border-[#e0d9d0]"
        style={{ backgroundColor: "#F9F6F0" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-3 md:flex-row md:gap-5">
          {/* Logo / Fallback */}
          <div className="flex shrink-0 items-center justify-center">
            <img
              src="https://www.gov.br/mulheres/pt-br/++theme++padrao_govbr/img/logo-mulheres.svg"
              alt="Ministério das Mulheres"
              height={40}
              className="hidden h-10 md:block"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const fallback = e.currentTarget.parentElement?.querySelector(".fallback-text");
                if (fallback) fallback.classList.remove("hidden");
              }}
            />
            <span className="fallback-text hidden text-sm font-bold" style={{ color: "#1a1a1a" }}>
              Ministério das Mulheres
            </span>
          </div>

          {/* Divisor */}
          <div className="hidden h-8 w-px bg-[#e0d9d0] md:block" />

          {/* Texto */}
          <p className="text-center text-sm leading-snug md:text-left" style={{ color: "#1a1a1a" }}>
            <strong>Projeto Brilho da Esmeralda</strong> — realizado com recursos do Ministério das
            Mulheres por meio do Termo de Fomento nº 995692/2026, decorrente de Emenda
            Parlamentar nº 28260003.
          </p>

          {/* Badge */}
          <span className="shrink-0 rounded-md bg-[var(--accent)] px-2.5 py-1 text-xs font-semibold text-white">
            Parceria Federal · 2026
          </span>
        </div>
      </div>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fachada}
            alt="Fachada da Casa de Seu Zé em Ceilândia"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-6 py-28 text-center text-white">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
            OSC comunitária — Ceilândia, DF
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Transformando vidas
            <br />
            através da <span className="text-[var(--accent)]">educação</span>
            <br />e cultura
          </h1>
          <p className="mt-8 max-w-xl text-base text-white/85 md:text-lg">
            Há mais de uma década oferecendo cursos profissionalizantes gratuitos, ações culturais e
            apoio social para famílias de Ceilândia–DF.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#cursos"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Conheça nossos cursos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" /> Fale no WhatsApp
            </a>
          </div>
          <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 border-t border-white/15 pt-8 md:grid-cols-4">
            {[
              { v: "+10", l: "anos de atuação" },
              { v: "+500", l: "famílias atendidas" },
              { v: "6", l: "cursos gratuitos" },
              { v: "100%", l: "comunitária" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-extrabold text-[var(--accent)] md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="relative bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--accent)]/20" />
            <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full bg-primary md:block" />
            <img
              src={g5}
              alt="Equipe e comunidade da Casa de Seu Zé"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -right-4 bottom-8 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl ring-1 ring-black/5 md:flex">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-bold text-foreground">Feito com amor</div>
                <div className="text-xs text-foreground/60">por e para a comunidade</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Quem Somos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Sobre o Centro Cultural <br />
              <span className="text-primary">Casa de Seu Zé</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
              <p>
                O <strong>Centro Cultural e Social Casa de Seu Zé</strong> é uma organização da
                sociedade civil localizada em Ceilândia, no Distrito Federal (SHSN CH 204 CJ 1 CASA 10 CEP
                72.236-800). Nascida da força da comunidade, acolhe, forma e fortalece culturalmente
                as famílias da região.
              </p>
              <p>
                Promovemos cursos gratuitos de corte e costura, estética, beleza, artesanato,
                empreendedorismo e informática, além de ações sociais que geram renda e protagonismo
                — especialmente para mulheres em situação de vulnerabilidade social.
              </p>
              <p>
                Mais do que um espaço de aulas, somos uma casa aberta para a comunidade: um ponto de
                encontro, cultura, fé e oportunidade.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)]/15">
                <Users className="h-5 w-5 text-[var(--accent)]" />
              </span>
              <span className="text-sm font-medium text-foreground/75">
                Uma casa construída por muitas mãos.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="relative bg-[var(--accent)] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              O que oferecemos
            </span>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Nossos Serviços</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Promovemos formação, cultura e desenvolvimento comunitário em Ceilândia através de
              cursos gratuitos e ações sociais.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                img: g4,
                title: "Corte e Costura",
                desc: "Cursos práticos que capacitam a comunidade para o mercado de trabalho e a geração de renda.",
              },
              {
                img: g6,
                title: "Beleza e Estética",
                desc: "Oficinas de cabelo, unhas e estética que formam profissionais e fortalecem a autoestima.",
              },
              {
                img: g3,
                title: "Cultura e Ações Sociais",
                desc: "Eventos, certificações e iniciativas que valorizam o protagonismo das famílias e a cultura local.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group rounded-2xl bg-white/5 p-3 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 pb-4 pt-5">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--accent)] shadow-lg transition hover:brightness-95"
            >
              <MessageCircle className="h-4 w-4" /> Quero me inscrever
            </a>
          </div>
        </div>
      </section>

      {/* Ações Sociais */}
      <section
        id="acoes"
        className="relative overflow-hidden bg-[var(--brand-dark-red)] py-20 text-white"
      >
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[auto,1fr]">
          <div className="mx-auto md:mx-0">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[var(--accent)]/30 blur-2xl" />
              <img
                src={logo}
                alt="Logo Casa de Seu Zé — uma casa acolhida por mãos"
                className="relative h-44 w-44 object-contain drop-shadow-2xl md:h-56 md:w-56"
              />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Ações Sociais
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Mãos que acolhem, sonhos que se constroem.
            </h2>
            <p className="mt-5 max-w-xl text-white/85">
              Distribuição de alimentos, apoio a famílias em vulnerabilidade, campanhas solidárias e
              celebrações comunitárias. Aqui, ninguém caminha sozinho.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold shadow-md transition hover:brightness-110"
              >
                <Heart className="h-4 w-4" /> Quero ajudar
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                Saber mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Momentos
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-foreground md:text-5xl">
              Galeria <span className="text-primary">Casa de Seu Zé</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              Oficinas, formaturas, eventos e o dia a dia da nossa comunidade.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[g1, g2, g3, g4, g5, g6].map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={img}
                  alt={`Atividade na Casa de Seu Zé ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section id="transparencia" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Confiança
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Transparência</h2>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/75">
              A confiança da comunidade se constrói com clareza. Aqui você encontra nossas
              informações institucionais e dados da parceria vigente com o Governo Federal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Bloco 1 — Identificação */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <Building2 className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Identificação da Entidade
                </h3>
              </div>
              <dl className="mt-5 space-y-3 text-sm text-foreground/80">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Razão Social
                  </dt>
                  <dd>Centro Cultural e Social Casa de Seu Zé</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    CNPJ
                  </dt>
                  <dd>18.181.775/0001-76</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Endereço
                  </dt>
                  <dd>SHSN CH 204, Conj I, Lote 10 — CEP: 72236-680 — Ceilândia, DF</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Instagram
                  </dt>
                  <dd>@casadeseuze</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Telefone
                  </dt>
                  <dd>(61) 99373-2273</dd>
                </div>
              </dl>
            </div>

            {/* Bloco 2 — Dirigentes */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <Users className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Composição da Diretoria
                </h3>
              </div>
              <div className="mt-5 overflow-hidden rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--accent)]/10 text-left text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    <tr>
                      <th className="px-4 py-3">Nome</th>
                      <th className="px-4 py-3">Cargo</th>
                      <th className="px-4 py-3">Remuneração</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-t">
                      <td className="px-4 py-3">Lindaci Alexandre Pereira</td>
                      <td className="px-4 py-3">Presidente</td>
                      <td className="px-4 py-3">Não remunerada</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs italic text-foreground/60">
                Os dirigentes não recebem remuneração da entidade por suas funções diretivas, em
                conformidade com o estatuto social.
              </p>
            </div>

            {/* Bloco 3 — Estatuto Social */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <FileText className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Estatuto Social</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">
                Documento constitutivo da entidade, conforme registro em cartório.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                <Download className="h-4 w-4" /> Baixar Estatuto Social
              </a>
            </div>
          </div>

          {/* Bloco 4 — Parceria Federal (destaque) */}
          <div className="mt-6 rounded-2xl border-2 border-[var(--accent)] bg-[var(--accent)]/5 p-6 md:p-8">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="shrink-0">
                <img
                  src="https://www.gov.br/mulheres/pt-br/++theme++padrao_govbr/img/logo-mulheres.svg"
                  alt="Ministério das Mulheres"
                  className="h-16 w-auto object-contain md:h-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <p className="text-sm font-bold text-[var(--brand-dark-red)]">
                  Ministério das Mulheres
                </p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <Handshake className="h-5 w-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Parceria Federal — Projeto Brilho da Esmeralda
                  </h3>
                </div>
                <dl className="mt-4 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Instrumento
                    </dt>
                    <dd>Termo de Fomento nº 995692/2026</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Concedente
                    </dt>
                    <dd>Ministério das Mulheres — Secretaria Nacional de Autonomia Econômica</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Objeto
                    </dt>
                    <dd>
                      Implantação e Desenvolvimento do Projeto Brilho da Esmeralda — cursos gratuitos
                      de corte e costura para mulheres da comunidade
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Valor total
                    </dt>
                    <dd>R$ 100.000,00</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Vigência
                    </dt>
                    <dd>6 meses — assinado em 17/06/2026</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Processo SEI
                    </dt>
                    <dd>21260.000911/2026-93</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Emenda Parlamentar nº
                    </dt>
                    <dd>28260003</dd>
                  </div>
                </dl>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                >
                  <FileText className="h-4 w-4" /> Ver Termo de Fomento completo
                </a>
              </div>
            </div>
          </div>

          {/* Bloco 5 — Relatórios */}
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border bg-card p-6 text-center shadow-sm">
            <div className="flex items-center justify-center gap-2 text-[var(--accent)]">
              <ClipboardList className="h-5 w-5" />
              <h3 className="text-sm font-bold uppercase tracking-wider">Relatórios de Execução</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Os relatórios parciais e final de execução do objeto e financeiro serão publicados aqui
              conforme apresentados ao Ministério das Mulheres na plataforma Transferegov.br.
            </p>
            <p className="mt-3 text-xs italic text-foreground/60">
              Próxima entrega prevista: ao fim da vigência do Termo de Fomento (dezembro/2026).
            </p>
          </div>
        </div>
      </section>

      {/* Contato / Footer */}
      <footer id="contato" className="bg-[var(--brand-dark-red)] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white">
                <img src={logo} alt="" className="h-10 w-10 object-contain" />
              </span>
              <div className="leading-tight">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Centro Cultural e Social
                </div>
                <div className="text-base font-extrabold">CASA DE SEU ZÉ</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/80">
              Uma OSC comunitária dedicada à educação, cultura e ações sociais em Ceilândia–DF.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--accent)]" /> SHSN CH 204 CJ 1 Casa 10 — Ceilândia,
                DF · CEP 72.236-800
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--accent)]" /> (61) 99373-2273
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[var(--accent)]" /> @casadeseuze
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/85">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/15 px-6 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Centro Cultural e Social Casa de Seu Zé. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--accent)] text-white shadow-2xl ring-4 ring-white/40 transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[var(--accent)]/40" />
      </a>
    </div>
  );
}
