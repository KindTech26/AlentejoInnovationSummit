import {
  Target,
  Users,
  Lightbulb,
  Heart,
  Building,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import museuImage from "../../../assets/museu.png";
import centroInvImage from "../../../assets/centroinv.png";
import ulsAlentejoImage from "../../../assets/ulsalentejocor.png";

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
      <div className="site-container">
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

        {/* Two column: images + concept */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-10">
          {/* Images + venue cards */}
          <div className="space-y-4">
            {/* Image 1 - Centro de Inteligência Competitiva */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src={centroInvImage}
                alt="Centro de Inteligência Competitiva do Alentejo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        Centro de Inteligência Competitiva do Alentejo
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Campo Maior, Alentejo
                      </p>
                      <p className="text-xs text-primary font-medium mt-0.5">
                        Action Labs
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-lg px-3 py-1.5 flex-shrink-0">
                      Dia 20
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards - Conheça o local / Como chegar (Centro Inv) */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://cicalentejo.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3.5 hover:bg-primary/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">Conheça o local</span>
              </a>
              <a
                href="https://www.google.com/maps/search/Centro+de+Intelig%C3%AAncia+Competitiva+do+Alentejo+Campo+Maior"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3.5 hover:bg-primary/10 transition-colors group"
              >
                <Navigation className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">Como chegar</span>
              </a>
            </div>

            {/* Image 2 - Centro de Ciência do Café */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src={museuImage}
                alt="Centro de Ciência do Café"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        Centro de Ciência do Café
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Campo Maior, Alentejo
                      </p>
                      <p className="text-xs text-primary font-medium mt-0.5">
                        Summit/Congresso
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-lg px-3 py-1.5 flex-shrink-0">
                      Dia 21
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards - Conheça o local / Como chegar (Ciência do Café) */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.centrocienciacafe.com/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3.5 hover:bg-primary/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">Conheça o local</span>
              </a>
              <a
                href="https://www.google.com/maps/search/Centro+de+Ci%C3%AAncia+do+Caf%C3%A9+Campo+Maior"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3.5 hover:bg-primary/10 transition-colors group"
              >
                <Navigation className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">Como chegar</span>
              </a>
            </div>
          </div>

          {/* Concept note */}
          <div className="flex flex-col">
            <h3 className="text-2xl text-foreground mb-6">Nota de Conceito</h3>
            <div className="space-y-4 text-muted-foreground text-[15px]">
              <p>
                Inovar em saúde num território do Alentejo não é uma utopia — é a forma mais inteligente de garantir acesso, proximidade e sustentabilidade. A <strong className="text-foreground">ULS Alto Alentejo</strong> pode ser a referência nacional em inovação organizacional, social e tecnológica ao serviço das pessoas.
              </p>
              <p>
                O Alto Alentejo enfrenta desafios estruturais próprios dos territórios de baixa densidade: envelhecimento populacional, dispersão geográfica, limitações no acesso a cuidados diferenciados e pressão crescente sobre os recursos disponíveis. Estes fatores não representam apenas constrangimentos — representam também uma oportunidade estratégica.
              </p>
              <p>
                Num território com escala adequada, forte ligação comunitária e necessidade real de soluções integradas, é possível desenhar, testar e validar modelos inovadores com impacto mensurável. O Alto Alentejo pode afirmar-se como um verdadeiro <strong className="text-foreground">laboratório vivo de inovação em saúde</strong>, onde a transformação organizacional, a inteligência artificial aplicada, a digitalização de processos e novos modelos assistenciais são implementados com foco claro em resultados para as pessoas.
              </p>
              <p>
                O <strong className="text-foreground">Alto Alentejo Health Innovation Summit</strong> nasce, assim, como um ponto de encontro estratégico, destinado a alinhar decisores, profissionais de saúde, academia, empresas tecnológicas, autarquias e comunidade em torno de uma agenda concreta:
              </p>
              <ul className="space-y-2 pl-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Transformar a prestação de cuidados num território do interior
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Garantir acesso com qualidade e proximidade
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Promover sustentabilidade organizacional e ambiental
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Posicionar a ULS Alto Alentejo como referência nacional em inovação aplicada
                </li>
              </ul>
            </div>

            {/* Action Labs box */}
            <div className="bg-card border border-border rounded-xl px-5 py-3 mt-auto">
              <h4 className="text-xs tracking-[0.15em] uppercase text-primary font-semibold mb-2">
                Action Labs (Dia 20) -  4 Eixos Práticos
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Investigação Clínica
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Inteligência Artificial
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Design Thinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Técnicas Avançadas Point-of-Care
                </li>
              </ul>
            </div>

            {/* Organização box */}
            <div className="bg-card border border-border rounded-xl p-5 mt-4">
              <h4 className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-semibold mb-3">
                Organização
              </h4>
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={ulsAlentejoImage}
                  alt="ULS do Alto Alentejo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/10 transition-colors">
                <pillar.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h4 className="text-foreground mb-1 sm:mb-1.5 text-xs sm:text-sm">{pillar.title}</h4>
              <p className="text-muted-foreground text-[10px] sm:text-xs leading-tight sm:leading-normal">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
