import HeroSection from "../components/common/HeroSection";
import AboutUsSection from "../components/homepage/AboutUs";
import WhatWeOfferSection from "../components/homepage/OfferSection";
import ManifestationCategories from "../components/homepage/ManifestationCategories";
import WhyTrustUsSection from "../components/homepage/WhyTrustUsSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import banner from "../assets/banner1.png";

export default function HomePage() {
  return (
    <div>
      <HeroSection
        image={banner}
        title={"Manifest Your Dream Life with the Law of Assumption"}
        description={"Create Your Reality with the Law of Assumption"}
      />
      <AboutUsSection />
      <WhatWeOfferSection />
      <ManifestationCategories />
      <WhyTrustUsSection />
      <TestimonialsSection />
    </div>
  );
}
