import { Activity, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import kindtechLogo from "../../../assets/kindtech.png";

const navLinks = [
  { id: "sobre", label: "O Evento" },
  { id: "programa", label: "Programa" },
  { id: "inscricoes", label: "Inscrições" },
  { id: "parceiros", label: "Parceiros" },
  { id: "innovation-hub", label: "Innovation Hub" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f1923] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-sm tracking-wide block">
                  Alto Alentejo
                </span>
                <span className="text-xs tracking-widest uppercase text-white/50">
                  Health Innovation Summit
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 max-w-sm mb-6">
              Inovação, Saúde e Território — 20 e 21 de Abril de 2026, Campo
              Maior, Alto Alentejo.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white/60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs text-white/40 tracking-[0.15em] uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-white/40 tracking-[0.15em] uppercase mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@aahis.pt"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@aahis.pt
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>
                  Museu de Ciência do Café
                  <br />
                  Campo Maior, Alto Alentejo
                </span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">
                Organização
              </p>
              <p className="text-xs text-white/60">ULS do Alto Alentejo</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30">
            &copy; 2026 Alto Alentejo Health Innovation Summit. Todos os
            direitos reservados.
          </p>
          <a href="https://www.kindtech.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xs text-white/40">Desenvolvido por</span>
            <img src={kindtechLogo} alt="Kind Tech Lda" className="h-6 opacity-50 hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
}