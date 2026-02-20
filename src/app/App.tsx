import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProgramaSection } from "./components/ProgramaSection";
import { InscricoesSection } from "./components/InscricoesSection";
import { ParceirosSection } from "./components/ParceirosSection";
import { InnovationHubSection } from "./components/InnovationHubSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramaSection />
        <InscricoesSection />
        <ParceirosSection />
        <InnovationHubSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}