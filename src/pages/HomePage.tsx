import HeroSection from "../components/homepage/HeroSection";
import AboutUsSection from "../components/homepage/AboutUs";
import WhatWeOfferSection from "../components/homepage/OfferSection";
import ManifestationCategories from "../components/homepage/ManifestationCategories";
import WhyTrustUsSection from "../components/homepage/WhyTrustUsSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <WhatWeOfferSection />
      <ManifestationCategories />
      <WhyTrustUsSection />
      <TestimonialsSection />
    </div>
  );
}
