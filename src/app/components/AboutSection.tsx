import {
  Target,
  Users,
  Lightbulb,
  Heart,
  MapPin,
  Calendar,
  Building,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import museuImage from "../../../assets/museu.png";
const alentejoImage = museuImage;

const pillars = [
  {
    icon: Target,
    title: "Visão",
    desc: "Posicionar o Alto Alentejo como referência em inovação na saúde, unindo tecnologia, território e comunidade.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    desc: "De telessaúde a cirurgia robótica, explorar soluções concretas que transformam o acesso e a qualidade dos cuidados.",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Decisores, clínicos, investigadores, startups e indústria juntos num espaço de partilha e cocriação.",
  },
  {
    icon: Heart,
    title: "Impacto",
    desc: "Gerar mudança real na saúde do interior, com foco em territórios de baixa densidade e populações vulneráveis.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            O Evento
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Alto Alentejo Health Innovation Summit
          </h2>
          <p className="text-muted-foreground">
            Um encontro dedicado à inovação em saúde, pensado a partir do
            território e para o território. Dois dias de conferências, painéis,
            action labs e networking no coração do Alto Alentejo.
          </p>
        </div>

        {/* Two column: image + concept */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-10">
          {/* Image + venue card */}
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
              <ImageWithFallback
                src={alentejoImage}
                alt="Alto Alentejo, Campo Maior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground">
                        Museu de Ciência do Café
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Campo Maior, Alto Alentejo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3.5">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-muted-foreground block uppercase tracking-wider">
                    Data
                  </span>
                  <span className="text-sm text-foreground">
                    20-21 Abril 2026
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3.5">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-muted-foreground block uppercase tracking-wider">
                    Local
                  </span>
                  <span className="text-sm text-foreground">Campo Maior</span>
                </div>
              </div>
            </div>

          </div>

          {/* Concept note */}
          <div>
            <h3 className="text-2xl text-foreground mb-6">Nota de Conceito</h3>
            <div className="space-y-4 text-muted-foreground text-[15px]">
              <p>
                O <strong className="text-foreground">Alto Alentejo Health Innovation Summit</strong> surge da necessidade de repensar a prestação de cuidados de saúde em territórios de baixa densidade, integrando inovação, tecnologia e novas abordagens para responder aos desafios demográficos e de acesso.
              </p>
              <p>
                A iniciativa constitui um espaço de articulação entre decisores, profissionais e especialistas da área da saúde, promovendo a discussão de soluções concretas e ajustadas à realidade do interior de Portugal.
              </p>
              <p>
                No primeiro dia, os{" "}
                <strong className="text-foreground">Action Labs</strong>{" "}
                proporcionam sessões práticas de capacitação e cocriação. No segundo dia, o{" "}
                <strong className="text-foreground">Summit</strong> reúne oradores de referência nacional para conferências, painéis e apresentação de casos de estudo: da telessaúde à cirurgia robótica, da inovação digital à investigação clínica.
              </p>
              <p>
                Com a presença confirmada da{" "}
                <strong className="text-foreground">Ministra da Saúde</strong>, do{" "}
                <strong className="text-foreground">Prof. Henrique Martins (ISCTE)</strong>{" "}
                e de outros representantes do ecossistema de inovação em saúde, o Summit afirma-se como um momento estratégico para o futuro da saúde no Alentejo e em Portugal.
              </p>
            </div>

          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-foreground mb-1.5 text-sm">{pillar.title}</h4>
              <p className="text-muted-foreground text-xs">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
