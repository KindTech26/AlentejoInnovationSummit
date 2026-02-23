import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import kindtechLogo from "../../../assets/kindtech.png";
import tituloEventoBranco from "../../../assets/tituloeventobranco.png";
import ulsImageSrc from "../../../assets/ULS.png";

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
      <div className="site-container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <img
                src={tituloEventoBranco}
                alt="Alto Alentejo Health Innovation Summit"
                className="h-10 w-auto opacity-50"
              />
            </div>
            <p className="text-sm text-white/50 max-w-sm mb-6">
              Inovação, Saúde e Território | 20 e 21 de Abril de 2026, Campo
              Maior, Alto Alentejo.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/ulsaale/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="https://www.instagram.com/uls_altoalentejo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white/60" />
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
                href="mailto:eventos@ulsaale.min-saude.p"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                eventos@ulsaale.min-saude.p
<<<<<<< HEAD
              </a>
              <a
                href="mailto:admin@ulsaale.min-saude.pt"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                admin@ulsaale.min-saude.pt
=======
>>>>>>> humberto2
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Campo Maior</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-white/5 border border-white/10 rounded-lg">
              <a
                href="https://www.ulsaale.min-saude.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src={ulsImageSrc}
                  alt="ULS Alto Alentejo"
                  className="h-16 w-auto"
                />
              </a>
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
