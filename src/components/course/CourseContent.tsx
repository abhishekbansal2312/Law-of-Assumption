import React from "react";

const FeatureBullet: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start mb-3">
    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
    <span>{text}</span>
  </li>
);

export default function CourseContent() {
  const courseData = {
    mainTitle: "Law of Assumption – Complete Manifestation Course",
    introText:
      "Unlock your ability to manifest your desires with our powerful Law of Assumption Course, inspired by the timeless teachings of Neville Goddard. This course is designed to help you master your thoughts, shift your assumptions, and align with your dream life step by step.",
    journeyText:
      "Whether you're just beginning your manifestation journey or looking to deepen your understanding, this course offers everything you need to create lasting transformation.",

    includedSections: {
      title: "What's Included in the Course?",
      coaching: {
        title: "Online 1:1 Coaching",
        description:
          "Work directly with a certified coach who understands your goals, challenges, and mindset. These personal sessions are tailored to your unique journey and help you:",
        features: [
          "Identify limiting beliefs and replace them with empowering assumptions",
          "Apply Neville Goddard's manifestation techniques in real life",
          "Stay accountable and consistent with your inner work Available in English and Hindi.",
        ],
      },
      videoLessons: {
        title: "Video Lessons",
        description:
          "Learn at your own pace with a collection of pre-recorded video modules covering:",
        features: [
          "The foundation of the Law of Assumption",
          "Neville's most effective practices like SATS, revision, and living in the end",
          "Real-life examples and case studies to help you integrate the teachings These videos are clear, easy to follow, and packed with practical wisdom.",
        ],
      },
      workbook: {
        title: "PDF Workbook",
        description:
          "Your personal manifestation companion. This downloadable workbook includes:",
        features: [
          "Daily journaling prompts to reprogram your mindset",
          "Affirmations aligned with your goals",
          'Visualization exercises to stay in the "wish fulfilled" state',
          "Space to track your progress and reflect on your growth",
        ],
        usageText:
          "Use this workbook to stay focused, organized, and deeply connected to your manifestation goals.",
      },
    },

    whyItWorks: {
      title: "Why This Course Works",
      benefits: [
        "Based entirely on Neville Goddard's original teachings",
        "Combines knowledge with practice for real results",
        "Offers personal coaching and self-paced learning",
        "Helps you break cycles of doubt, fear, and delay",
        "Supports your growth with tools you can use daily",
      ],
    },

    conclusion: {
      title: "Begin Creating the Life You Desire",
      paragraphs: [
        "You don't have to wait for change—it begins the moment you change your assumptions. With this course, you'll gain the mindset, tools, and support to manifest a life filled with abundance, love, purpose, and peace.",
        "Enroll now and start your journey toward conscious creation.",
        "Your dream life is already within you—let's bring it to life.",
      ],
    },
  };

  // Render hero section and content
  return (
    <>
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Course Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {courseData.mainTitle}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {courseData.introText}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {courseData.journeyText}
          </p>
        </div>

        {/* What's Included Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
            {courseData.includedSections.title}
          </h2>

          {/* Coaching */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {courseData.includedSections.coaching.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {courseData.includedSections.coaching.description}
            </p>
            <ul className="ml-2">
              {courseData.includedSections.coaching.features.map(
                (feature, index) => (
                  <FeatureBullet key={`coaching-${index}`} text={feature} />
                )
              )}
            </ul>
          </div>

          {/* Video Lessons */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {courseData.includedSections.videoLessons.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {courseData.includedSections.videoLessons.description}
            </p>
            <ul className="ml-2">
              {courseData.includedSections.videoLessons.features.map(
                (feature, index) => (
                  <FeatureBullet key={`video-${index}`} text={feature} />
                )
              )}
            </ul>
          </div>

          {/* PDF Workbook */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {courseData.includedSections.workbook.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {courseData.includedSections.workbook.description}
            </p>
            <ul className="ml-2">
              {courseData.includedSections.workbook.features.map(
                (feature, index) => (
                  <FeatureBullet key={`workbook-${index}`} text={feature} />
                )
              )}
            </ul>
            <p className="text-gray-700 mt-4">
              {courseData.includedSections.workbook.usageText}
            </p>
          </div>
        </div>

        {/* Why This Course Works */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {courseData.whyItWorks.title}
          </h2>
          <ul className="ml-2">
            {courseData.whyItWorks.benefits.map((benefit, index) => (
              <FeatureBullet key={`benefit-${index}`} text={benefit} />
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {courseData.conclusion.title}
          </h2>
          {courseData.conclusion.paragraphs.map((paragraph, index) => (
            <p
              key={`conclusion-${index}`}
              className="text-gray-700 mb-4 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
