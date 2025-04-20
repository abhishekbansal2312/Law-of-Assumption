import AboutLawOfAssumption from "../components/aboutus/AboutLawOfAssumption";
import HeroSection from "../components/common/HeroSection";
import aboutus from "../assets/aboutus1.png";

export default function AboutUs() {
  return (
    <div>
      <HeroSection
        image={aboutus}
        title={" About Us"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <AboutLawOfAssumption />
    </div>
  );
}
