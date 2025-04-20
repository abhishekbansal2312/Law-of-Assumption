import HeroSection from "../components/common/HeroSection";
import CourseContent from "../components/course/CourseContent";
import courseHero from "../assets/course.png";

export default function Course() {
  return (
    <div>
      <HeroSection
        image={courseHero}
        title={"Course"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <CourseContent />
    </div>
  );
}
