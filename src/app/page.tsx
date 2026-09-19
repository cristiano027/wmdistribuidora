import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VarietyManifesto from "@/components/VarietyManifesto";
import CategoryShowcase from "@/components/CategoryShowcase";
import WorldOfVariety from "@/components/WorldOfVariety";
import Wholesale from "@/components/Wholesale";
import ExperienceFlow from "@/components/ExperienceFlow";
import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Locations from "@/components/Locations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-wm-navy selection:bg-wm-coral selection:text-white flex flex-col">
      {/* 01. Sticky / Transparent Header */}
      <Header />

      {/* 02. Editorial Hero */}
      <Hero />

      {/* 03. Variety Manifesto & Brands Strip */}
      <VarietyManifesto />

      {/* 04. What do you look for / Categories */}
      <CategoryShowcase />

      {/* 05. A World of Variety & Cutout Products */}
      <WorldOfVariety />

      {/* 06. Wholesale & Commercial Advantages */}
      <Wholesale />

      {/* 07. Visual Experience / Segments We Serve */}
      <ExperienceFlow />

      {/* 08. Product Showcase (Non-ecommerce / Visual display) */}
      <ProductShowcase />

      {/* 09. About WM */}
      <About />

      {/* 10. Verified Differentials */}
      <Differentials />

      {/* 11. Physical Store Locations in Cariacica / ES */}
      <Locations />

      {/* 12. Impactful Final CTA */}
      <FinalCTA />

      {/* 13. Institutional Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
