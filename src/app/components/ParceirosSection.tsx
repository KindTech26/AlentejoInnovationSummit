type PartnerLogo = {
  alt: string;
  name: string;
  src: string;
  url?: string;
};

const partnerUrls: Record<string, string> = {
  "1668509294155 rgb iscte pt vertical positive proxy": "https://www.iscte-iul.pt/",
  "aibili logo": "https://www.aibili.pt/",
  "arte gov pt logo": "https://www.arte.gov.pt/",
  "Champalimaud Foundation 1": "https://fchampalimaud.org/",
  "ciiasm logo": "https://www.ciiasm.pt/",
  "images 1": "https://www.ccdr-a.gov.pt/" ,
  "images 2": "https://www.spms.min-saude.pt/",
  "images 3": "https://www.ulssjose.min-saude.pt/" ,
  "images": "https://www.cm-campo-maior.pt/" ,
  "kindtech": "https://kindtech.pt/",
  "logo lusiadas": "https://www.lusiadas.pt/",
  "logo Hope Care": "https://hope-care.pt/",
  "pportalegreversao principal 01": "https://www.ipportalegre.pt/",
  "psy": "https://psydevplaceholder.pages.dev",
  "ulsnaale logo": "https://www.ulsaale.min-saude.pt/",
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
      url: partnerUrls[name],
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, "pt"));

export function ParceirosSection() {
  return (
    <section
      id="parceiros"
      className="py-20 md:py-24 bg-gradient-to-b from-slate-100/80 via-slate-50 to-violet-100/30"
    >
      <div className="site-container">
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

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:gap-6">
          {partnerLogos.map((partner) => {
            const Wrapper = partner.url ? "a" : "div";
            const linkProps = partner.url
              ? { href: partner.url, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={partner.src}
                {...linkProps}
                className="group transition-all duration-300 ease-in-out hover:scale-105 block"
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
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
