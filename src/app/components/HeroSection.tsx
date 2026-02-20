import { useState } from "react";
import {
  Share2,
  Facebook,
  Linkedin,
  Mail,
  Copy,
  Check,
  Calendar,
  MapPin,
  ChevronDown,
  X,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import heroImageSrc from "../../../assets/heroimage.png";
const heroImage = heroImageSrc;

export function HeroSection() {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const eventUrl = typeof window !== "undefined" ? window.location.href : "";
  const eventTitle = "Alto Alentejo Health Innovation Summit 2026";
  const eventDescription =
    "20-21 Abril 2026 | Campo Maior, Alto Alentejo | Inovação, Saúde e Território";

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
      "_blank"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(eventUrl)}&text=${encodeURIComponent(eventTitle + " | " + eventDescription)}`,
      "_blank"
    );
  };

  const shareByEmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(eventTitle)}&body=${encodeURIComponent(
        `${eventDescription}\n\nMais informacoes: ${eventUrl}`
      )}`
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(eventUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContent = () => {
    const el = document.getElementById("sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Alto Alentejo Health Innovation"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e26]/85 via-[#0e3d33]/75 to-[#1a2332]/80" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-2.5 mb-10 border border-white/15">
          <Calendar className="w-4 h-4 text-[#4fd1b8]" />
          <span className="text-white/90 text-sm tracking-wide">
            20 - 21 Abril 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <MapPin className="w-4 h-4 text-[#4fd1b8]" />
          <span className="text-white/90 text-sm tracking-wide">
            Campo Maior
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5.25rem] font-bold text-white mb-6"
          style={{ lineHeight: 0.9, letterSpacing: "-0.04em" }}
        >
          <span className="font-normal">Alto Alentejo</span>
          <br />
          <span
            className="health-innovation-glow"
            style={{
              background: "linear-gradient(90deg, #4fd1b8, #3bbfa8, #4fd1b8, #b8f0e6, #4fd1b8, #3bbfa8, #4fd1b8)",
              backgroundSize: "400% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientMove 8s ease-in-out infinite",
              filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 40px rgba(79, 209, 184, 0.2))",
            }}
          >
            Health Innovation
          </span>
          <br />
          <span className="font-normal italic">Summit</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-3">
          Inovação, Saúde e Território
        </p>
        <p className="text-sm text-white/50 max-w-xl mx-auto mb-10">
          Campo Maior &middot; Alto Alentejo, Portugal
          <br />
          Museu de Ciência do Café* | alternativa confirmada: Centro Cultural de
          Campo Maior
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <button
            onClick={() => {
              const el = document.getElementById("inscricoes");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-[#0e7c6b] text-white rounded-full hover:bg-[#0a6358] transition-all cursor-pointer text-sm tracking-wide shadow-lg shadow-[#0e7c6b]/25"
          >
            Inscreva-se
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("programa");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/15 rounded-full hover:bg-white/15 transition-all cursor-pointer text-sm tracking-wide"
          >
            Ver Programa
          </button>

          {/* Share */}
          <div className="relative">
            <button
              onClick={() => setShareOpen(!shareOpen)}
              className="px-6 py-3.5 bg-white/5 backdrop-blur-md text-white/80 border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 text-sm"
            >
              <Share2 className="w-4 h-4" />
              Partilhar
            </button>

            {shareOpen && (
              <div className="absolute top-full mt-3 right-0 sm:left-1/2 sm:-translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 min-w-[240px] z-50">
                <div className="flex items-center justify-between px-3 py-2 mb-1">
                  <span className="text-xs text-muted-foreground tracking-wide uppercase">
                    Partilhar via
                  </span>
                  <button
                    onClick={() => setShareOpen(false)}
                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={shareToFacebook}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  Facebook
                </button>
                <button
                  onClick={shareToLinkedIn}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  LinkedIn
                </button>
                <button
                  onClick={shareToTwitter}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </button>
                <button
                  onClick={shareByEmail}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email
                </button>
                <div className="border-t border-border my-1" />
                <button
                  onClick={copyLink}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer text-sm"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                  {copied ? "Link copiado!" : "Copiar link"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Key highlights */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-white/40">
          <span>Action Labs &middot; 20 Abril</span>
          <span className="hidden sm:inline">|</span>
          <span>Summit (terça-feira) &middot; 21 Abril</span>
          <span className="hidden sm:inline">|</span>
          <span>Programa draft &middot; convites em curso</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors cursor-pointer animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
