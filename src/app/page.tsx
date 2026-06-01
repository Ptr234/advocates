import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import PodcastSection from "@/components/PodcastSection";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import SocietalImpactSection from "@/components/SocietalImpactSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import DPASection from "@/components/DPASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Navbar />
      <Hero />
      <Insights />
      <PodcastSection />
      <PracticeAreas />
      <About />
      <SocietalImpactSection />
      <AppDownloadSection />
      <DPASection />
      <Footer />
    </main>
  );
}
