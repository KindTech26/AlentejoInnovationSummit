import { Rocket, Cpu, Stethoscope, Wifi, ArrowRight, Brain, FlaskConical } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const hubImage =
  "https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaGVhbHRoJTIwc3RldGhvc2NvcGUlMjB0ZWNobm9sb2d5JTIwY2xlYW58ZW58MXx8fHwxNzcxNjAwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const hubFeatures = [
  {
    icon: Stethoscope,
    title: "Telessaúde",
    description:
      "Plataformas de telemedicina e telemonitorização para cuidados de proximidade.",
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description:
      "Soluções inovadoras para saúde mental, incluindo plataformas digitais e IA.",
  },
  {
    icon: Cpu,
    title: "Apoio à Decisão",
    description:
      "Sistemas inteligentes de apoio a tomada de decisão clínica.",
  },
  {
    icon: FlaskConical,
    title: "Investigação Clínica",
    description:
      "Como a inovação pode ser o gatilho da investigação clínica em Portugal.",
  },
  {
    icon: Wifi,
    title: "Territórios Digitais",
    description:
      "Estratégias de inovação digital para territórios de baixa densidade.",
  },
  {
    icon: Rocket,
    title: "Cirurgia Robótica",
    description:
      "Avanços tecnológicos em cirurgia robótica e suas aplicações.",
  },
];

export function InnovationHubSection() {
  return (
    <section id="innovation-hub" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Innovation Hub
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Innovation Hub
          </h2>
          <p className="text-muted-foreground">
            Um espaço dedicado à demonstração e partilha de soluções inovadoras
            para o futuro da saúde. Startups, investigadores e empresas
            apresentam as suas tecnologias.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-16">
          {/* Features grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-4">
              {hubFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/15 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={hubImage}
                  alt="Innovation Hub"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-accent/40 border border-primary/10 rounded-xl p-5">
                <p className="text-sm text-foreground mb-2">
                  Quer participar no Innovation Hub?
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Se tem um projeto, startup ou solução inovadora na área da
                  saúde, submeta a sua candidatura para expositor ou apresentador
                  no Innovation Hub do AAHIS.
                </p>
                <a
                  href="mailto:info@aahis.pt?subject=Innovation Hub — Candidatura"
                  className="inline-flex items-center gap-2 text-primary text-sm hover:underline cursor-pointer"
                >
                  Submeter candidatura
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Coming soon */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-5 py-2 text-xs text-secondary-foreground">
                  <Rocket className="w-3.5 h-3.5" />
                  Mais informações em breve
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
