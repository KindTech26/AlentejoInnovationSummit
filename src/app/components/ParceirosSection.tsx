import { Handshake, Building2, GraduationCap, HeartPulse, Landmark } from "lucide-react";

const partnerCategories = [
  {
    title: "Parceiros Institucionais",
    icon: Building2,
    partners: [
      { name: "ULS do Alto Alentejo", initials: "ULS AA" },
      { name: "Câmara Municipal de Campo Maior", initials: "CM CM" },
      { name: "CCDR Alentejo", initials: "CCDR" },
      { name: "SPMS — Serviços Partilhados do Ministério da Saúde", initials: "SPMS" },
    ],
  },
  {
    title: "Parceiros Académicos e Investigação",
    icon: GraduationCap,
    partners: [
      { name: "Instituto Politécnico de Portalegre", initials: "IPP" },
      { name: "ISCTE — Instituto Universitário de Lisboa", initials: "ISCTE" },
      { name: "CIIASM — Centro de Inovação e IA em Saúde Mental", initials: "CIIASM" },
    ],
  },
  {
    title: "Parceiros de Saúde e Inovação",
    icon: HeartPulse,
    partners: [
      { name: "HOPECARE", initials: "HC" },
      { name: "Psycare", initials: "PSY" },
      { name: "Lusíadas Saúde", initials: "LS" },
      { name: "ARTE — Advanced Research & Technology Enablers", initials: "ARTE" },
    ],
  },
  {
    title: "Parceiros Estratégicos",
    icon: Landmark,
    partners: [
      { name: "Champalimaud Foundation", initials: "CF" },
      { name: "AIBILI", initials: "AIBILI" },
      { name: "ULS São José", initials: "ULS SJ" },
    ],
  },
];

export function ParceirosSection() {
  return (
    <section id="parceiros" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Parceiros
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Os Nossos Parceiros
          </h2>
          <p className="text-muted-foreground">
            O Summit conta com o apoio de instituições de referência nas áreas da
            saúde, investigação, tecnologia e desenvolvimento regional.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {partnerCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-lg text-foreground">{category.title}</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {category.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/15 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/5 transition-colors">
                      <span className="text-primary text-[11px] tracking-wider text-center leading-tight">
                        {partner.initials}
                      </span>
                    </div>
                    <p className="text-foreground text-sm leading-snug">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a partner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-card border border-border rounded-2xl p-8 max-w-md">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Handshake className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl text-foreground mb-2">
              Torne-se Parceiro
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Associe a sua organização ao Alto Alentejo Health Innovation
              Summit. Várias modalidades de parceria disponíveis.
            </p>
            <a
              href="mailto:info@aahis.pt"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all cursor-pointer text-sm inline-block"
            >
              Contactar Organização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
