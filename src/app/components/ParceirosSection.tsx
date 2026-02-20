type PartnerLogo = {
  alt: string;
  name: string;
  src: string;
};

const partnersFromAssets = Object.entries(
  import.meta.glob("../../../assets/parceiros/*.{png,jpg,jpeg,svg,webp,avif}", {
    eager: true,
    import: "default",
  }),
) as [string, string][];

function formatPartnerName(filePath: string) {
  const rawName = filePath.split("/").pop()?.replace(/\.[^/.]+$/, "") ?? "parceiro";
  return rawName
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const partnerLogos: PartnerLogo[] = partnersFromAssets
  .map(([path, src]) => {
    const name = formatPartnerName(path);
    return {
      name,
      src,
      alt: `Logótipo do parceiro ${name}`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, "pt"));

const initialPartners = [
  "Câmara Municipal de Campo Maior",
  "Centro de Inteligência Competitiva do Alentejo",
  "Instituto Politécnico de Portalegre",
];

export function ParceirosSection() {
  return (
    <section
      id="parceiros"
      className="py-20 md:py-24 bg-gradient-to-b from-slate-100/80 via-slate-50 to-violet-100/30"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-primary text-xs tracking-[0.24em] uppercase mb-4">
            Technologies &amp; Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Ecossistema de Parceiros
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Instituições, centros de investigação e organizações que impulsionam inovação em saúde no Alto Alentejo.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/15 bg-white/85 p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">
            Parceiros já confirmados nesta fase
          </p>
          <div className="flex flex-wrap gap-2">
            {initialPartners.map((partner) => (
              <span
                key={partner}
                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground"
              >
                {partner}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Logótipos em atualização contínua.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:gap-6">
          {partnerLogos.map((partner) => (
            <article
              key={partner.src}
              className="group transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="rounded-2xl bg-white p-0.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-300 ease-in-out group-hover:shadow-[0_16px_35px_rgba(15,23,42,0.16)]">
                <div className="[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] bg-white px-5 py-8 sm:px-6 sm:py-10 min-h-[140px] flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    loading="lazy"
                    className="h-16 w-full object-contain sm:h-20"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
