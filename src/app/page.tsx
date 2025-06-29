import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyUseSection from "./components/WhyUseSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AreaCoverageSection from "./components/AreaCoverageSection";
import ForRestaurantsSection from "./components/ForRestaurantsSection";
import DownloadCTASection from "./components/DownloadCTASection";
import FAQSection from "./components/FAQSection";
import { ScrollProgress } from "~/components/magicui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Header />
      <HeroSection />
      <AboutSection />
      <WhyUseSection />
      <HowItWorksSection />
      <AreaCoverageSection />
      <ForRestaurantsSection />
      <DownloadCTASection />
      <FAQSection />
    </>
  );
}
