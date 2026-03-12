import Header from "./Header";
import HeroSection from "./HeroSection";
import BrandDoctrineSection from "./BrandDoctrineSection";
import SectorGridSection from "./SectorGridSection";
import PerformanceMetricsSection from "./PerformanceMetricsSection";
import InventorySection from "./InventorySection";
import TransmissionSection from "./TransmissionSection";
import ImmersiveSection from "./ImmersiveSection";
import GlobalNetworkSection from "./GlobalNetworkSection";
import ProTeamSection from "./ProTeamSection";
import FieldDeploymentSection from "./FieldDeploymentSection";
import Footer from "./Footer";

export default function BikeGearPage() {
  return (
    <div className="min-h-screen bg-[#ebedea] text-[#2d322f] antialiased selection:bg-[#3F556B] selection:text-white overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      <Header />

      <main>
        <HeroSection />
        <BrandDoctrineSection />
        <SectorGridSection />
        <PerformanceMetricsSection />
        <InventorySection />
        <TransmissionSection />
        <ImmersiveSection />
        <GlobalNetworkSection />
        <ProTeamSection />
        <FieldDeploymentSection />
      </main>

      <Footer />
    </div>
  );
}