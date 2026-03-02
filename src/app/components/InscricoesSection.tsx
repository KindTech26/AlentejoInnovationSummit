import {
  Check,
  CalendarCheck,
  MapPin,
  Users,
  AlertTriangle,
} from "lucide-react";

const commonIncludes = [
  "Acesso às sessões plenárias e painéis",
  "Conferências e casos de estudo",
  "Welcome coffee e almoço",
  "Certificado de participação",
  "Networking com profissionais e organizações",
  "Cocktail de encerramento",
  "Preço Action Labs: 20 euros | Preço Summit: 20 euros",
];

function RegistrationSection() {
  const formEmbedUrl = (import.meta.env.VITE_REGISTRATION_FORM_EMBED_URL as
    | string
    | undefined) ??
    "https://forms.office.com/Pages/ResponsePage.aspx?id=CEbIIh3wxUaAJGPMli5fUdPTaREkIeFMvMrrMJnedaxUN1NIWFRMNUwxS0ozT1dBNkhFOTA2RkVJNC4u&embed=true";

  return (
    <section
      id="inscricoes"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/60 to-violet-50/30"
    >
      <div className="site-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            INSCRIÇÕES
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Inscreve-te no Summit
          </h2>
          <p className="text-foreground text-sm sm:text-base">
            Participe nos Action Labs e no Summit.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Evento exclusivo. Lugares limitados - reserve o seu lugar quanto
            antes.
          </p>
          <div className="mt-4 inline-flex items-start gap-2 rounded-xl border border-amber-300/60 bg-amber-50 px-3.5 py-2 text-left">
            <AlertTriangle className="h-4 w-4 text-amber-700 mt-0.5 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-amber-900">
              Em caso de limitação de lugares, será considerada a ordem de
              efetivação das inscrições.
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-primary/15 bg-gradient-to-b from-white to-slate-50/70 p-4 sm:p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="grid gap-4 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-5">
            <aside className="rounded-2xl bg-[#10212d] p-5 text-white">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/60 mb-2">
                O que inclui
              </p>
              <h3 className="text-xl mb-4">Detalhes da participação</h3>

              <ul className="space-y-2.5 mb-5">
                {commonIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#6be1cb] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/88">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3.5">
                <p className="text-sm text-white/95">
                  Disponivel ás 9:00h do dia 3 de março.
                </p>
              </div>
            </aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-3">
              <div className="flex items-center justify-between px-1.5 pb-2">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Pedido de inscrição
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Alto Alentejo Health Innovation Summit
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                {formEmbedUrl ? (
                  <iframe
                    title="Formulário de inscrição"
                    src={formEmbedUrl}
                    className="h-[860px] w-full bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-[860px] bg-slate-50 flex items-center justify-center px-6 text-center">
                    <div className="max-w-md">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-primary mb-3">
                        Formulário
                      </p>
                      <h4 className="text-xl text-foreground mb-2">
                        Configuração em falta
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Defina <code>VITE_REGISTRATION_FORM_EMBED_URL</code> para
                        apresentar o formulário nesta secção.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mt-8 mb-8">
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

      </div>
    </section>
  );
}

export function InscricoesSection() {
  return <RegistrationSection />;
}
