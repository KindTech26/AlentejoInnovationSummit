import { useState } from "react";
import { jsPDF } from "jspdf";
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
  Facebook,
  Linkedin,
  Mail,
  Link2,
  X,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import programaImage from "../../../assets/programa.png";
const conferenceImage = programaImage;

type SessionType = "keynote" | "panel" | "break" | "case" | "workshop" | "institutional" | "closing";

interface Session {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  bullets?: (string | { title: string; speaker: string })[];
  type: SessionType;
  duration?: string;
  featured?: boolean;
  seats?: string;
  formadores?: string;
  moderacao?: string;
}

const day1Sessions: Session[] = [
  {
    time: "09:00",
    title: "Investigação Clínica - Por onde começar?",
    description:
      "Workshop prático com foco em investigação clínica aplicada ao contexto hospitalar e territorial.",
    type: "workshop",
    duration: "7h",
    seats: "30 lugares",
    formadores: "a designar, CARE IPP e Teresa Luciano - ULS São José",
  },
  {
    time: "09:00",
    title: "Inteligência Artificial para Profissionais de Saúde",
    description:
      "Capacitação para uso de ferramentas de IA com abordagem pragmática para profissionais de saúde.",
    type: "workshop",
    duration: "7h",
    seats: "40 lugares",
    formadores: "Maurício Alves - ULS Alto Alentejo, Hélder Palheira - HC Healthcare e Rafael Pinto - Visual Thinking",
  },
  {
    time: "09:00",
    title: "Design Thinking para Profissionais de Saúde",
    description:
      "Dinâmicas colaborativas para desenho de soluções e melhoria contínua de processos clínicos.",
    type: "workshop",
    duration: "7h",
    seats: "30 lugares",
    formadores: "a confirmar",
  },
  {
    time: "09:00",
    title: "Técnicas Avançadas Point-of-Care",
    description:
      "Sessões práticas: Fitobiomodulação por Luz Azul, Oxigenoterapia tópica contínua, laser e ecografia",
    type: "workshop",
    duration: "7h",
    seats: "20 lugares",
    formadores: "Cláudia Ribeiro - Daylife e Beatriz Mourato - ULS Alto Alentejo",
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
    time: "09:00",
    title: "Inteligência Artificial - Desafios e Oportunidades para uma Saúde Inteligente",
    speaker: "Maurício Alves - ULS Alto Alentejo",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "09:30",
    title: "Living Lab e a Estratégia de Inovação na ULS Alto Alentejo",
    speaker: "Miguel Lopes - ULS Alto Alentejo",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "10:00",
    title: "Sessão de Abertura",
    type: "institutional",
    duration: "30 min",
    featured: true,
  },
  {
    time: "10:30",
    title: "Networking Coffee Break",
    type: "break",
    duration: "30 min",
  },
  {
    time: "11:00",
    title: "Intervenções Inovadoras de Saúde Digital",
    moderacao: "a designar",
    bullets: [
      { title: "Telessaúde - Caso de Estudo", speaker: "Neuza Reis e Ana Isabel, ULS São José" },
      { title: "Telemonitorização - Caso de Estudo", speaker: "Sílvio Almeida, ULS Entre Douro e Vouga" },
      { title: "Sistema de Apoio Inteligente à Tomada de Decisão", speaker: "Projeto HUMAI" },
    ],
    type: "case",
    duration: "60 min",
  },
  {
    time: "12:00",
    title: "Como Inovar com Impacto na Saúde Pública?",
    speaker: "Cátia Sousa Pinto - SPMS, Joana Seringa - ENSP e Rui Cunha - ASKLEPIC",
    description: "Utilização de dados, inovação e a saúde das pessoas.",
    moderacao: "André Gomes - ULS Alto Alentejo",
    type: "panel",
    duration: "60 min",
  },
  {
    time: "13:00",
    title: "Almoço",
    description: "Self-service + visita ao Centro Ciência do Café",
    type: "break",
  },
  {
    time: "14:30",
    title: "Inovação Tecnológica - Cirurgia Digital e Robótica",
    speaker: "Jorge Carvalho - ULS Santo António",
    moderacao: "Guilherme Fialho - ULS Alto Alentejo",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "15:00",
    title: "Estratégias de Financiamento da Inovação em Territórios de Baixa Densidade",
    speaker: "Carla Pereira - SINASE, João Transmontano - FINAO BIOTECH*",
    moderacao: "Ana Amélia Silva, ULS Alto Alentejo",
    type: "panel",
    duration: "30 min",
  },
  {
    time: "15:30",
    title: "Inovação em Saúde Mental",
    speaker: "Estela Bastos - Psycare | CIIASM",
    moderacao: "a designar - ULS Alto Alentejo",
    type: "keynote",
    duration: "30 min",
  },
  {
    time: "16:00",
    title: "A Inovação como Trigger para a Investigação Clínica",
    speaker: "Helena Canhão - Secretária de Estado da Ciência e Inovação*, Firmino Machado - UA, Teresa Luciano - ULS São José",
    moderacao: "Erica Cardoso - ULS Alto Alentejo",
    type: "panel",
    duration: "60 min",
  },
  {
    time: "17:00",
    title: "O Papel de Cada Agente no Ecossistema de Inovação em Saúde",
    moderacao: "André Neto de Oliveira - CNN Portugal*",
    bullets: [
      "Manuel Dias - CTO/ARTE*",
      "José Paulo - CEO HOPECARE",
      "Luís Loures - Politécnico de Portalegre*",
      "Miguel Lopes - ULS Alto Alentejo",
    ],
    type: "panel",
    duration: "60 min",
    featured: true,
  },
  {
    time: "18:00",
    title: "A Inovação na Saúde como Agente de Mudança das Organizações e Políticas de Saúde",
    speaker: "Ana Paula Martins - Ministra da Saúde*",
    type: "institutional",
    duration: "20 min",
  },
  {
    time: "18:30",
    title: "Cocktail de Encerramento",
    description: "Café de despedida",
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
      className={`flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border transition-all hover:shadow-sm ${styles.bg} ${styles.border} ${session.featured ? "py-6 sm:py-7" : ""}`}
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
          <h4 className={`text-foreground ${session.featured ? "text-base font-semibold" : "text-sm"}`}>{session.title}</h4>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span
              className={`hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full ${styles.iconBg} ${styles.iconColor}`}
            >
              {styles.label}
            </span>
            {session.seats && (
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                {session.seats}
              </span>
            )}
          </div>
        </div>
        {session.description && (
          <p className="text-muted-foreground text-xs mt-1 whitespace-pre-line">
            {session.description}
          </p>
        )}
        {session.speaker && (
          <p className="text-muted-foreground text-xs mt-1">{session.speaker}</p>
        )}
        {session.formadores && (
          <p className="text-xs mt-1.5">
            <span className="text-foreground/70 font-medium">Formadores:</span>{" "}
            <span className="text-muted-foreground">{session.formadores}</span>
          </p>
        )}
        {session.bullets && (
          <ul className="mt-2 space-y-1.5">
            {session.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${styles.iconBg}`} />
                {typeof bullet === "string" ? (
                  <span className="text-muted-foreground">{bullet}</span>
                ) : (
                  <span>
                    <span className="text-foreground/80 font-medium">{bullet.title}</span>
                    <br />
                    <span className="text-muted-foreground">{bullet.speaker}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        {session.moderacao && (
          <p className="text-xs text-muted-foreground/70 mt-2 italic">
            Moderação: {session.moderacao}
          </p>
        )}
      </div>
    </div>
  );
}

export function ProgramaSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(2);
  const showPdfDownload = false;

  const handleDownload = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 0;

    // --- Header background ---
    doc.setFillColor(14, 124, 107); // primary #0e7c6b
    doc.rect(0, 0, pageWidth, 52, "F");

    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Alto Alentejo", pageWidth / 2, 18, { align: "center" });
    doc.text("Health Innovation Summit", pageWidth / 2, 28, { align: "center" });

    // Subtitle
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("20-21 Abril 2026  |  Museu de Ciencia do Cafe, Campo Maior", pageWidth / 2, 38, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(200, 240, 230);
    doc.text("Programa Completo", pageWidth / 2, 46, { align: "center" });

    y = 62;

    // --- Helper functions ---
    const getTypeLabel = (type: SessionType) => {
      switch (type) {
        case "keynote": return "Conferencia";
        case "panel": return "Painel";
        case "case": return "Caso de Estudo";
        case "workshop": return "Workshop";
        case "institutional": return "Institucional";
        case "break": return "Pausa";
        case "closing": return "Encerramento";
      }
    };

    const getTypeColor = (type: SessionType, isDay1: boolean): [number, number, number] => {
      if (isDay1) {
        // Blue palette for Day 1
        switch (type) {
          case "workshop": return [37, 99, 235];
          case "break": return [156, 163, 175];
          default: return [37, 99, 235];
        }
      }
      switch (type) {
        case "keynote": return [14, 124, 107];
        case "panel": return [124, 58, 237];
        case "case": return [217, 119, 6];
        case "institutional": return [100, 116, 139];
        case "break": return [156, 163, 175];
        case "closing": return [14, 124, 107];
        default: return [100, 116, 139];
      }
    };

    const renderSessions = (sessions: Session[], isDay1: boolean) => {
      for (const session of sessions) {
        const estimatedHeight = 14 + (session.speaker ? 5 : 0) + (session.description ? 5 : 0) + (session.bullets ? session.bullets.length * 5 : 0);
        if (y + estimatedHeight > pageHeight - 20) {
          doc.addPage();
          y = 20;
        }

        const typeColor = getTypeColor(session.type, isDay1);

        // Time pill
        doc.setFillColor(245, 247, 249);
        doc.roundedRect(margin, y, 16, 7, 1, 1, "F");
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text(session.time, margin + 8, y + 5, { align: "center" });

        // Type badge
        doc.setFillColor(typeColor[0], typeColor[1], typeColor[2]);
        doc.roundedRect(margin + 18, y, 2, 7, 0.5, 0.5, "F");

        // Title
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(26, 35, 50);
        const titleLines = doc.splitTextToSize(session.title, contentWidth - 28);
        doc.text(titleLines, margin + 24, y + 5);

        // Type label on the right
        doc.setFontSize(7);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(typeColor[0], typeColor[1], typeColor[2]);
        doc.text(getTypeLabel(session.type), pageWidth - margin, y + 5, { align: "right" });

        y += 6 + (titleLines.length - 1) * 4;

        // Speaker
        if (session.speaker) {
          y += 4;
          doc.setFontSize(8.5);
          doc.setFont("helvetica", "italic");
          doc.setTextColor(isDay1 ? 37 : 14, isDay1 ? 99 : 124, isDay1 ? 235 : 107);
          const speakerLines = doc.splitTextToSize(session.speaker, contentWidth - 28);
          doc.text(speakerLines, margin + 24, y);
          y += (speakerLines.length - 1) * 3.5;
        }

        // Description
        if (session.description) {
          y += 4;
          doc.setFontSize(8);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(100, 110, 120);
          const descLines = doc.splitTextToSize(session.description, contentWidth - 28);
          doc.text(descLines, margin + 24, y);
          y += (descLines.length - 1) * 3.5;
        }

        // Bullets
        if (session.bullets) {
          for (const bullet of session.bullets) {
            y += 4;
            if (y > pageHeight - 20) {
              doc.addPage();
              y = 20;
            }
            doc.setFontSize(7.5);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(100, 110, 120);
            doc.setFillColor(typeColor[0], typeColor[1], typeColor[2]);
            doc.circle(margin + 26, y - 1, 0.8, "F");
            const bulletText = typeof bullet === "string" ? bullet : `${bullet.title} — ${bullet.speaker}`;
            doc.text(bulletText, margin + 29, y);
          }
        }

        // Moderação
        if (session.moderacao) {
          y += 4;
          doc.setFontSize(7.5);
          doc.setFont("helvetica", "italic");
          doc.setTextColor(130, 140, 150);
          doc.text(`Moderação: ${session.moderacao}`, margin + 24, y);
        }

        // Separator line
        y += 7;
        doc.setDrawColor(230, 230, 230);
        doc.setLineWidth(0.2);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
      }
    };

    // ===== DAY 1 - Action Labs (Blue) =====
    doc.setFillColor(37, 99, 235); // blue
    doc.roundedRect(margin, y, contentWidth, 10, 2, 2, "F");
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("Dia 1  -  Segunda, 20 Abril  |  Action Labs", pageWidth / 2, y + 7, { align: "center" });
    y += 18;

    renderSessions(day1Sessions, true);

    // ===== DAY 2 - Summit (Green) =====
    // New page for Day 2
    doc.addPage();
    y = 20;

    doc.setFillColor(14, 124, 107); // green
    doc.roundedRect(margin, y, contentWidth, 10, 2, 2, "F");
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("Dia 2  -  Segunda, 21 Abril  |  Summit", pageWidth / 2, y + 7, { align: "center" });
    y += 18;

    renderSessions(day2Sessions, false);

    // Footer note
    if (y + 15 > pageHeight) {
      doc.addPage();
      y = 20;
    }
    y += 5;
    doc.setFontSize(7.5);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(150, 150, 150);
    doc.text("* Programa provisorio, sujeito a alteracoes e confirmacoes finais.", pageWidth / 2, y, { align: "center" });

    // Bottom bar on all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFillColor(14, 124, 107);
      doc.rect(0, pageHeight - 10, pageWidth, 10, "F");
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(255, 255, 255);
      doc.text("Alto Alentejo Health Innovation Summit 2026  |  Campo Maior, Portugal", pageWidth / 2, pageHeight - 4, { align: "center" });
    }

    doc.save("Programa_AAHIS_2026.pdf");
  };

  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const programUrl = "https://ulsaltoalentejoeventos.pt";
  const shareTitle = "Programa - Alto Alentejo Health Innovation Summit 2026";
  const shareText = "Consulta o programa do Alto Alentejo Health Innovation Summit 2026 — 20 e 21 de Abril, Campo Maior.";

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(programUrl)}&quote=${encodeURIComponent(shareText)}`, "_blank");
  };
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(programUrl)}`, "_blank");
  };
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(programUrl)}&text=${encodeURIComponent(shareText)}`, "_blank");
  };
  const shareByEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${programUrl}`)}`, "_blank");
  };
  const copyLink = () => {
    navigator.clipboard.writeText(programUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sessions = activeDay === 1 ? day1Sessions : day2Sessions;

  return (
    <section id="programa" className="py-20 md:py-28 bg-muted/30">
      <div className="site-container">
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
              <span className="hidden sm:inline">Segunda, </span>20 Abril  -
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
              <span className="hidden sm:inline">Terça, </span>21 Abril  -
              Summit
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            {showPdfDownload && (
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descarregar</span> PDF
              </button>
            )}
            <div className="relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-foreground rounded-xl hover:bg-accent transition-all cursor-pointer text-sm"
              >
                <Share2 className="w-4 h-4" />
                Partilhar
              </button>

              {shareOpen && (
                <div className="absolute top-full mt-3 right-0 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 min-w-[240px] z-50">
                  <div className="flex items-center justify-between px-3 py-2 mb-1">
                    <span className="text-xs text-muted-foreground tracking-wide uppercase">
                      Partilhar via
                    </span>
                    <button
                      onClick={() => setShareOpen(false)}
                      className="text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    onClick={shareToFacebook}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    Facebook
                  </button>
                  <button
                    onClick={shareToLinkedIn}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    LinkedIn
                  </button>
                  <button
                    onClick={shareToTwitter}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X (Twitter)
                  </button>
                  <button
                    onClick={shareByEmail}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    Email
                  </button>
                  <div className="border-t border-border mt-1 pt-1">
                    <button
                      onClick={copyLink}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                    >
                      <Link2 className="w-4 h-4 text-muted-foreground" />
                      {copied ? "Link copiado!" : "Copiar link"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Day info card */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="hidden sm:block aspect-[3/2] overflow-hidden">
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
                      : "Summit  - Programa Completo"}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {activeDay === 1
                      ? "20 Abril 2026  - Sessões práticas"
                      : "21 Abril 2026  - Centro de Ciência do Café, Campo Maior"}
                  </p>
                </div>
              </div>

              {/* Legend */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Legenda
                </p>
                <div className="space-y-2">
                  {(activeDay === 1
                    ? [
                        { label: "Workshop", color: "bg-blue-100 text-blue-600" },
                      ]
                    : [
                        { label: "Conferência", color: "bg-primary/10 text-primary" },
                        { label: "Painel de Debate", color: "bg-purple-100 text-purple-600" },
                        { label: "Caso de Estudo", color: "bg-amber-100 text-amber-600" },
                        { label: "Pausa / Refeição", color: "bg-muted text-muted-foreground" },
                      ]
                  ).map((item) => (
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
          <div className="lg:col-span-3 order-2">
            {activeDay === 1 ? (
              <div>
                <div className="bg-card border border-border rounded-2xl p-6 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-lg">Action Labs - Segunda, 20 Abril</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        4 Workshops de dia inteiro (7h cada) com dinâmicas de grupo para capacitação em inovação, investigação
                        e melhoria contínua.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Centro de Inteligência Competitiva do Alentejo, Campo Maior.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {sessions.map((session, index) => (
                    <SessionCard key={index} session={session} />
                  ))}
                </div>

                {/* Schedule info */}
                <div className="bg-card border border-border rounded-2xl p-5 mt-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Horário:</span> 9h às 13h e 14h às 18h</p>
                    <p><span className="text-foreground font-medium">Networking Coffee-breaks:</span> 10h30–11h e 16h–16h30</p>
                    <p><span className="text-foreground font-medium">Almoço Volante:</span> 13h–14h (no edifício)</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="space-y-2">
                  {sessions.map((session, index) => (
                    <SessionCard key={index} session={session} />
                  ))}
                </div>
                <div className="bg-card border border-border rounded-2xl p-5 mt-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Nota:</span> Café, água e snacks estarão disponíveis todo o dia em sala paralela, de forma a não parar os trabalhos.
                  </p>
                </div>
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
