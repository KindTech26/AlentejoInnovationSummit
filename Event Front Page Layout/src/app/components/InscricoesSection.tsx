import { useState } from "react";
import {
  UserPlus,
  CheckCircle2,
  Clock,
  Users,
  ArrowRight,
  AlertCircle,
  CalendarCheck,
  MapPin,
} from "lucide-react";

const registrationTypes = [
  {
    id: "geral",
    title: "Inscrição Geral",
    price: "Gratuito",
    description: "Acesso ao Summit completo — 21 Abril",
    features: [
      "Todas as sessões plenárias e painéis",
      "Conferências e casos de estudo",
      "Welcome coffee e almoço incluído",
      "Visita ao Centro Ciência do Café",
      "Cocktail de encerramento",
      "Certificado de participação",
    ],
    highlight: true,
  },
  {
    id: "labs",
    title: "Action Labs + Summit",
    price: "Gratuito",
    description: "Acesso aos Action Labs (20 Abril) e ao Summit (21 Abril)",
    features: [
      "Tudo da inscrição geral",
      "Sessões práticas de co-criação (Dia 1)",
      "Workshops colaborativos",
      "Networking alargado de 2 dias",
    ],
    highlight: false,
  },
  {
    id: "estudante",
    title: "Estudante",
    price: "Gratuito",
    description: "Para estudantes do ensino superior com cartão válido",
    features: [
      "Acesso a todas as sessões",
      "Welcome coffee e almoço",
      "Certificado de participação",
      "Networking com profissionais",
    ],
    highlight: false,
  },
];

export function InscricoesSection() {
  const [selectedType, setSelectedType] = useState("geral");

  const handleInscricao = () => {
    alert(
      "O formulário de inscrição estará disponível em breve. Obrigado pelo seu interesse no Alto Alentejo Health Innovation Summit!"
    );
  };

  return (
    <section id="inscricoes" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Inscrições
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Inscreva-se no Summit
          </h2>
          <p className="text-muted-foreground">
            Garanta o seu lugar no Alto Alentejo Health Innovation Summit 2026.
            A participação é gratuita mas as inscrições são limitadas.
          </p>
        </div>

        {/* Registration Types */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {registrationTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                selectedType === type.id
                  ? "border-primary bg-primary/[0.02] shadow-lg shadow-primary/5"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {type.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-[11px] tracking-wider uppercase">
                  Recomendado
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="text-lg text-foreground mb-1">{type.title}</h3>
                <div className="text-2xl text-primary mb-2">{type.price}</div>
                <p className="text-xs text-muted-foreground">
                  {type.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {type.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleInscricao();
                }}
                className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl transition-all cursor-pointer text-sm ${
                  selectedType === type.id
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                <UserPlus className="w-4 h-4" />
                Inscrever-me
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-4">
            <CalendarCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-sm text-foreground block">
                20-21 Abril 2026
              </span>
              <span className="text-xs text-muted-foreground">
                Action Labs + Summit
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-4">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-sm text-foreground block">
                Campo Maior
              </span>
              <span className="text-xs text-muted-foreground">
                Museu de Ciência do Café
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-4">
            <Users className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-sm text-foreground block">
                Vagas Limitadas
              </span>
              <span className="text-xs text-muted-foreground">
                Garanta o seu lugar
              </span>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="flex items-start gap-3 bg-accent/40 border border-primary/10 rounded-xl p-5 max-w-2xl mx-auto">
          <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-foreground">Informação Importante</p>
            <p className="text-xs text-muted-foreground mt-1.5">
              O formulário de inscrição detalhado será disponibilizado em breve.
              As inscrições estão sujeitas a confirmação pela organização. Após o
              preenchimento receberá um email de confirmação com todos os
              detalhes logísticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
