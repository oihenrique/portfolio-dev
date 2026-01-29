import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects-section";
import Head from "next/head";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrique Dev | O Farol para seu Negócio</title>
        <meta
          name="description"
          content="Desenvolvimento de software e automações inteligentes para iluminar o caminho da sua empresa."
        />
      </Head>
      <div className="space-y-16">
        <Navbar />
        <HeroSection />
        <div className="bg-primary-500">
          <ServicesSection />
        </div>
        <ProjectsSection />
        <ContactSection />
        <div className="bg-primary-500">
          <Footer />
        </div>
      </div>
    </>
  );
}
