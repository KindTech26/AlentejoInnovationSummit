import { useState } from "react";
import {
  ArrowRight,
  Check,
  UserPlus,
  CalendarCheck,
  MapPin,
  Users,
  AlertCircle,
} from "lucide-react";

type Profile = {
  id: "geral" | "labs" | "estudante";
  label: string;
  idealFor: string;
  extras: string[];
  microcopy?: string;
};

const commonIncludes = [
  "Acesso às sessões plenárias e painéis",
  "Conferências e casos de estudo",
  "Welcome coffee e almoço",
  "Certificado de participação",
  "Networking com profissionais e organizações",
  "Cocktail de encerramento",
];

const profiles: Profile[] = [
  {
    id: "geral",
    label: "Geral",
    idealFor: "Profissionais e participantes que querem acompanhar o Summit no Dia 2.",
    extras: ["Acesso ao Summit (Dia 2 — 21 Abril)"],
  },
  {
    id: "labs",
    label: "Action Labs + Summit",
    idealFor: "Quem quer uma experiência completa com componente prática e colaboração.",
    extras: [
      "Acesso ao Dia 1 (Action Labs)",
      "Workshops e sessões de co-criação",
      "Networking alargado durante 2 dias",
    ],
    microcopy: "Mais completo",
  },
  {
    id: "estudante",
    label: "Estudante",
    idealFor: "Estudantes do ensino superior com interesse em inovação e saúde.",
    extras: ["Acesso de estudante com cartão válido"],
    microcopy: "Sujeito a verificação",
  },
];

function RegistrationSection() {
  const [selectedProfile, setSelectedProfile] = useState<Profile["id"]>("geral");
  const currentProfile = profiles.find((profile) => profile.id === selectedProfile) ?? profiles[0];

  const handleInscricao = () => {
    alert(
      "O formulário de inscrição estará disponível em breve. Obrigado pelo seu interesse no Alto Alentejo Health Innovation Summit!"
    );
  };

  return (
    <section
      id="inscricoes"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/60 to-violet-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-primary text-xs tracking-[0.2em] uppercase mb-4">
            INSCRIÇÕES
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-5">
            Inscreve-te no Summit
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Participação gratuita. Lugares limitados - reserva já.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-primary/15 bg-white/90 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="text-lg text-foreground">O que inclui</h3>
            <span className="text-xs text-primary tracking-wide uppercase">
              Gratuito para todos os perfis
            </span>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-5">
            A inscrição é gratuita para todos os perfis.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/95 p-6 sm:p-7">
          <fieldset>
            <legend className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-4">
              Escolhe o teu perfil
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {profiles.map((profile) => {
                const isActive = selectedProfile === profile.id;
                return (
                  <label
                    key={profile.id}
                    className={`block cursor-pointer rounded-xl border p-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/30 ${
                      isActive
                        ? "border-primary bg-primary/[0.05] shadow-md shadow-primary/10"
                        : "border-border bg-background/80 hover:border-primary/35 hover:bg-primary/[0.02]"
                    }`}
                    role="radio"
                    aria-checked={isActive}
                  >
                    <input
                      type="radio"
                      name="registration-profile"
                      value={profile.id}
                      checked={isActive}
                      onChange={() => setSelectedProfile(profile.id)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-foreground">{profile.label}</span>
                      <span
                        className={`w-4 h-4 rounded-full border transition-all ${
                          isActive
                            ? "border-primary bg-primary ring-2 ring-primary/20"
                            : "border-muted-foreground/40"
                        }`}
                      />
                    </div>
                    {profile.microcopy && (
                      <p className="mt-2 text-[11px] text-primary">{profile.microcopy}</p>
                    )}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 rounded-xl bg-secondary/45 border border-border p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-2">
              Ideal para
            </p>
            <p className="text-sm text-foreground">{currentProfile.idealFor}</p>

            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground mt-5 mb-2">
              Inclui extra
            </p>
            <ul className="space-y-2">
              {currentProfile.extras.map((extra) => (
                <li key={extra} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{extra}</span>
                </li>
              ))}
            </ul>
            {currentProfile.id === "estudante" && (
              <p className="text-xs text-muted-foreground mt-3">
                Válido mediante apresentação de cartão de estudante. Sujeito a verificação.
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              onClick={handleInscricao}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 cursor-pointer text-sm"
            >
              <UserPlus className="w-4 h-4" />
              Inscrever-me
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">Demora menos de 1 minuto</span>
              <a href="#programa" className="text-primary hover:underline">
                Ver agenda
              </a>
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

export function InscricoesSection() {
  return <RegistrationSection />;
}
