import Navbar from "@/components/navbar";
import SobreMimPage from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="space-y-16">
      <Navbar />
      <SobreMimPage />
      <div className="bg-primary-500">
        <ServicesSection />
      </div>
      <div className="bg-primary-500">
        <Footer />
      </div>
    </div>
  );
}
