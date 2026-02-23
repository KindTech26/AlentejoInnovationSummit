import { Cpu, Stethoscope, Wifi, Brain, FlaskConical, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import hubImage from "../../../dist/assets/hub-Dm3wqk0N.png";

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
      <div className="site-container">
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
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {hubFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-5 hover:border-primary/15 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h4 className="text-foreground mb-0.5 sm:mb-1 text-xs sm:text-base">{feature.title}</h4>
                  <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight sm:leading-normal">
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
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-foreground mb-1">
                  Quer participar no innovation hub?
                </p>
<<<<<<< HEAD
                <a
                  href="mailto:mauricio.alves@ulsaale.min-saude.pt"
                  className="text-sm text-primary hover:underline"
                >
                  mauricio.alves@ulsaale.min-saude.pt
                </a>
=======
                <details className="text-sm">
                  <summary className="cursor-pointer text-primary hover:underline">
                    Ver email
                  </summary>
                  <a
                    href="mailto:mauricio.alves@ulsaale.min-saude.pt"
                    className="mt-2 block text-primary hover:underline"
                  >
                    mauricio.alves@ulsaale.min-saude.pt
                  </a>
                </details>
>>>>>>> humberto2
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
