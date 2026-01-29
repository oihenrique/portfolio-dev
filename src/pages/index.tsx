import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <div className="space-y-16">
      <Navbar />
      <HeroSection />
      <div className="bg-primary-500">
        <ServicesSection />
      </div>
      <ProjectsSection />
      <div className="bg-primary-500">
        <Footer />
      </div>
    </div>
  );
}
