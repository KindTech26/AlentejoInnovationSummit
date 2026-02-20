import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import tituloEventoBranco from "../../../assets/tituloeventobranco.png";
import tituloEventoPreto from "../../../assets/tituloeventopreto.png";

const navLinks = [
  { id: "sobre", label: "O Evento" },
  { id: "programa", label: "Programa" },
  { id: "inscricoes", label: "Inscrições" },
  { id: "parceiros", label: "Parceiros" },
  { id: "innovation-hub", label: "Innovation Hub" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.id);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 130) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img
              src={isScrolled ? tituloEventoPreto : tituloEventoBranco}
              alt="Alto Alentejo Health Innovation Summit"
              className={`h-9 sm:h-10 w-auto transition-all duration-300 ${
                isScrolled
                  ? "opacity-60 sepia-[0.1] saturate-[3] hue-rotate-[185deg]"
                  : "opacity-70"
              }`}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? isScrolled
                      ? "text-primary bg-primary/5"
                      : "text-white bg-white/15"
                    : isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("inscricoes")}
              className={`hidden md:inline-flex px-5 py-2 rounded-lg text-sm transition-all cursor-pointer ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/15 hover:bg-white/15"
              }`}
            >
              Inscreva-se
            </button>

            <button
              className={`md:hidden p-2 rounded-lg cursor-pointer ${
                isScrolled ? "text-foreground" : "text-white"
              } ${isScrolled ? "hidden" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav bar - appears below main nav when scrolled */}
      {isScrolled && (
        <div className="md:hidden bg-white/60 backdrop-blur-lg border-t border-black/5">
          <div className="flex items-center justify-center px-4 py-2">
            {[
              { id: "programa", label: "Programa" },
              { id: "inscricoes", label: "Inscrições" },
              { id: "parceiros", label: "Parceiros" },
            ].map((link, i) => (
              <div key={link.id} className="flex items-center">
                {i > 0 && <span className="text-muted-foreground/40 text-xs mx-3">|</span>}
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-[12px] transition-all cursor-pointer ${
                    activeSection === link.id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && !isScrolled && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-black/5 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm cursor-pointer transition-colors ${
                  activeSection === link.id
                    ? "bg-primary/5 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => scrollTo("inscricoes")}
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm cursor-pointer hover:opacity-90 transition-all"
              >
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
