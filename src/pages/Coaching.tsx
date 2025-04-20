import HeroSection from "../components/common/HeroSection";
import coaching from "../assets/coaching.png";
import CoachingContent from "../components/coaching/CoachingContent";

export default function Coaching() {
  return (
    <div>
      <HeroSection
        image={coaching}
        title={"Coaching"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <CoachingContent />
    </div>
  );
}
