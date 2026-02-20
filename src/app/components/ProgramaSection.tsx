import { useState } from "react";
import {
  Download,
  Share2,
  Clock,
  Mic,
  Coffee,
  Users,
  MessageSquare,
  Beaker,
  ChevronRight,
  Wine,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const conferenceImage =
  "https://images.unsplash.com/photo-1769798643582-32ef781c45d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlcnMlMjBzdGFnZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzE1OTk2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

type SessionType = "keynote" | "panel" | "break" | "case" | "workshop" | "institutional" | "closing";

interface Session {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  type: SessionType;
  duration?: string;
}

const day1Sessions: Session[] = [
  {
    time: "09:00",
    title: "Action Lab 1 - Investigação Clínica",
    description:
      "Workshop prático com foco em investigação clínica aplicada ao contexto hospitalar e territorial.",
    type: "workshop",
    duration: "90 min",
  },
  {
    time: "11:00",
    title: "Action Lab 2 - Inteligência Artificial na prática",
    description:
      "Capacitação para uso de ferramentas de IA com abordagem pragmática para profissionais de saúde.",
    type: "workshop",
    duration: "90 min",
  },
  {
    time: "14:00",
    title: "Action Lab 3 - Design Thinking em Saúde",
    description:
      "Dinâmicas colaborativas para desenho de soluções e melhoria contínua de processos clínicos.",
    type: "workshop",
    duration: "90 min",
  },
  {
    time: "16:00",
    title: "Action Lab 4 - Técnicas diferenciadas de apoio clínico",
    description:
      "Sessão prática: luz azul, laser e eco em contexto de apoio clínico.",
    type: "workshop",
    duration: "90 min",
  },
];

const day2Sessions: Session[] = [
  {
    time: "08:30",
    title: "Welcome Coffee",
    description: "Receção e networking breakfast",
    type: "break",
  },
  {
    time: "09:30",
    title: "Saúde Inteligente — Desafios e Oportunidades",
    speaker: "Henrique Martins, ISCTE",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "10:00",
    title: "Living Lab ULS Alto Alentejo",
    speaker: "Miguel Lopes, ULS Alto Alentejo",
    description: "Inclui sessão de perguntas e respostas",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "10:30",
    title: "Sessão de Abertura",
    description:
      "ULS Alto Alentejo (Presidente) | CM Campo Maior (Presidente) | Politécnico de Portalegre (Presidente) | CCDR (Presidente)",
    type: "institutional",
    duration: "20 min",
  },
  {
    time: "11:00",
    title: "Telessaúde — Caso de Estudo",
    description: "Aplicação prática de soluções de telessaúde (convite em curso)",
    type: "case",
    duration: "20 min",
  },
  {
    time: "11:20",
    title: "Sistema de Apoio Inteligente a Tomada de Decisão",
    description: "Caso de estudo: Urgência",
    type: "case",
    duration: "20 min",
  },
  {
    time: "11:40",
    title: "Telemonitorização — Caso de Estudo",
    description: "Monitorização remota de doentes (convite em curso)",
    type: "case",
    duration: "20 min",
  },
  {
    time: "12:00",
    title: "Como Inovar com Impacto na Saúde das Pessoas?",
    speaker: "Tiago Taveira Gomes + Ricardo Correia",
    description: "Utilização de dados e inovação",
    type: "keynote",
    duration: "60 min",
  },
  {
    time: "13:00",
    title: "Almoço",
    description:
      "Self-service + visita ao Centro Ciência do Café",
    type: "break",
  },
  {
    time: "14:00",
    title: "Liderança e Comunicação Organizacional",
    speaker: "Cláudia Telles de Freitas (ou convidado a confirmar)",
    description: "Sessão durante o almoço",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "14:30",
    title: "Inovação Tecnológica — Cirurgia Robótica",
    speaker: "Jorge Carvalho + Equipa de Barcelona",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "15:00",
    title: "Estratégias de Inovação Digital em Saúde em Territórios de Baixa Densidade",
    description:
      "Caso de estudo (HOPECARE e/ou Centro de Inovação e IA em Saúde do Alentejo - convite em curso)",
    type: "case",
    duration: "30 min",
  },
  {
    time: "15:30",
    title: "Inovação em Saúde Mental",
    speaker: "Estela Bastos (Psycare e CIIASM)",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "16:00",
    title:
      "A Inovação como Trigger da Investigação Clínica",
    speaker:
      "Secretária de Estado Helena Canhão + Champalimaud/AIBILI + ULS São José",
    description: "Painel de debate — Moderação: Érica Cardoso",
    type: "panel",
    duration: "60 min",
  },
  {
    time: "17:00",
    title: "O Papel de Cada Um no Ecossistema de Inovação",
    speaker:
      "Manuel Dias (ARTE), José Paulo (HOPECARE), Luís Loures (IPP), Miguel Lopes (ULS AA), Sofia Couto da Rocha (Lusíadas Saúde), SPMS e convidados",
    description: "Painel final - moderação a confirmar",
    type: "panel",
    duration: "60 min",
  },
  {
    time: "18:00",
    title:
      "A Inovação na Saúde como Agente de Mudança das Organizações e Políticas de Saúde",
    speaker: "Ministra da Saúde",
    type: "keynote",
    duration: "20 min",
  },
  {
    time: "18:30",
    title: "Cocktail de Encerramento",
    description: "Networking e celebração",
    type: "closing",
  },
];

function getTypeStyles(type: SessionType) {
  switch (type) {
    case "keynote":
      return {
        bg: "bg-primary/5",
        border: "border-primary/15",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        Icon: Mic,
        label: "Conferência",
      };
    case "panel":
      return {
        bg: "bg-purple-50",
        border: "border-purple-200/50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        Icon: MessageSquare,
        label: "Painel",
      };
    case "case":
      return {
        bg: "bg-amber-50/50",
        border: "border-amber-200/40",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        Icon: Beaker,
        label: "Caso de Estudo",
      };
    case "workshop":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200/50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        Icon: Users,
        label: "Workshop",
      };
    case "institutional":
      return {
        bg: "bg-slate-50",
        border: "border-slate-200/50",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
        Icon: Users,
        label: "Institucional",
      };
    case "break":
      return {
        bg: "bg-muted/50",
        border: "border-transparent",
        iconBg: "bg-muted",
        iconColor: "text-muted-foreground",
        Icon: Coffee,
        label: "Pausa",
      };
    case "closing":
      return {
        bg: "bg-primary/5",
        border: "border-primary/10",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        Icon: Wine,
        label: "Encerramento",
      };
  }
}

function SessionCard({ session }: { session: Session }) {
  const styles = getTypeStyles(session.type);

  return (
    <div
      className={`flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border transition-all hover:shadow-sm ${styles.bg} ${styles.border}`}
    >
      {/* Time */}
      <div className="flex-shrink-0 w-14 sm:w-16 pt-0.5">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{session.time}</span>
        </div>
        {session.duration && (
          <span className="text-[10px] text-muted-foreground/60 ml-4">
            {session.duration}
          </span>
        )}
      </div>

      {/* Icon */}
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${styles.iconBg}`}
      >
        <styles.Icon className={`w-4 h-4 ${styles.iconColor}`} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-foreground text-sm">{session.title}</h4>
          <span
            className={`hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ${styles.iconBg} ${styles.iconColor}`}
          >
            {styles.label}
          </span>
        </div>
        {session.speaker && (
          <p className="text-primary text-xs mt-1">{session.speaker}</p>
        )}
        {session.description && (
          <p className="text-muted-foreground text-xs mt-1">
            {session.description}
          </p>
        )}
      </div>
    </div>
  );
}

export function ProgramaSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(2);

  const handleDownload = () => {
    alert("O programa em PDF estará disponível para download em breve.");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Programa — Alto Alentejo Health Innovation Summit",
        text: "Consulte o programa do AAHIS 2026",
        url: window.location.href + "#programa",
      });
    } else {
      navigator.clipboard.writeText(window.location.href + "#programa");
      alert("Link do programa copiado para a área de transferência!");
    }
  };

  const sessions = activeDay === 1 ? day1Sessions : day2Sessions;

  return (
    <section id="programa" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Programa
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Programa do Evento
          </h2>
          <p className="text-muted-foreground">
            Dois dias de conferências, painéis, casos de estudo e networking.
            Dos Action Labs ao Summit, com oradores de referência nacional e
            internacional.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Draft em atualização contínua. Sessões e convidados sujeitos a confirmação.
          </p>
        </div>

        {/* Day tabs + Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Day selector */}
          <div className="inline-flex bg-card border border-border rounded-xl p-1">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                activeDay === 1
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="hidden sm:inline">Segunda, </span>20 Abril —
              Action Labs
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                activeDay === 2
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="hidden sm:inline">Terça, </span>21 Abril —
              Summit
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Descarregar</span> PDF
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-foreground rounded-xl hover:bg-accent transition-all cursor-pointer text-sm"
            >
              <Share2 className="w-4 h-4" />
              Partilhar
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Day info card */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[3/2] overflow-hidden">
                  <ImageWithFallback
                    src={conferenceImage}
                    alt="Summit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-foreground text-sm mb-1">
                    {activeDay === 1
                      ? "Action Labs"
                      : "Summit — Programa Completo"}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {activeDay === 1
                      ? "20 Abril 2026 — Centro de Inteligência Competitiva, Campo Maior"
                      : "21 Abril 2026 — Campo Maior (Museu de Ciência do Café* / Centro Cultural confirmado)"}
                  </p>
                </div>
              </div>

              {/* Legend */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Legenda
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Conferência", color: "bg-primary/10 text-primary" },
                    { label: "Painel de Debate", color: "bg-purple-100 text-purple-600" },
                    { label: "Caso de Estudo", color: "bg-amber-100 text-amber-600" },
                    { label: "Pausa / Refeição", color: "bg-muted text-muted-foreground" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded ${item.color}`} />
                      <span className="text-xs text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  const el = document.getElementById("inscricoes");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent transition-all cursor-pointer text-sm"
              >
                Inscreva-se
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sessions */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {activeDay === 1 ? (
              <div>
                <div className="bg-card border border-border rounded-2xl p-6 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-lg">Action Labs - 20 Abril</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Workshops práticos com dinâmicas de grupo para capacitação em inovação, investigação
                        e melhoria contínua.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Local confirmado: Centro de Inteligência Competitiva, Campo Maior.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {sessions.map((session, index) => (
                    <SessionCard key={index} session={session} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {sessions.map((session, index) => (
                  <SessionCard key={index} session={session} />
                ))}
              </div>
            )}

            <p className="text-center text-xs text-muted-foreground mt-6">
              * Programa provisório, sujeito a alterações e confirmações finais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
