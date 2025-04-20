import React from "react";

const FeatureBullet: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start mb-3">
    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
    <span>{text}</span>
  </li>
);

export default function CoachingContent() {
  const coachingData = {
    mainTitle:
      "Law of Assumption Coaching – Rewire Your Beliefs, Transform Your Life",
    introText:
      "Are you ready to create lasting change in your reality? With the right mindset and guidance, you can consciously shape the life you've always imagined. Our 1:1 coaching sessions, inspired by Neville Goddard's teachings, are designed to help you unlock your inner power, shift your assumptions, and manifest results in any area of life—be it love, health, career, or abundance.",
    coreText:
      "The core of our coaching is based on the Law of Assumption—the powerful principle that your beliefs shape your world. What you assume to be true eventually becomes your lived experience. When you change your assumptions, your outer world starts to reflect those changes.",

    lawOfAssumption: {
      title: "What Is the Law of Assumption?",
      description:
        'The Law of Assumption, as taught by Neville Goddard, is the understanding that our external reality is a direct reflection of our inner beliefs and assumptions. It teaches us that imagination is the creative force behind all manifestations, and by stepping into the state of "already having," we begin to live the reality we desire.',
      nevilleQuote:
        "Neville emphasized that your assumption, held persistently, becomes fact. In other words, when you live from the end result and feel it to be real, your circumstances naturally align with that feeling.",
    },

    coaching: {
      title: "What You'll Learn in Our 1:1 Coaching",
      intro:
        "Every session is tailored to your unique goals. With personal guidance, you'll learn to:",
      benefits: [
        "Recognize and shift the subconscious beliefs that are holding you back",
        'Apply Neville\'s proven techniques like SATS (State Akin to Sleep), mental revision, and "living in the end"',
        "Strengthen self-confidence and your belief in your manifesting abilities",
        "Maintain a high-vibration mindset that keeps you aligned with your goals",
        "Stay consistent and focused, even when old patterns try to return",
      ],
      conclusionText:
        "Whether you're new to manifestation or looking to go deeper, our coaching gives you a grounded and practical way to master this process.",
    },

    whyChoose: {
      title: "Why Choose This Coaching Program?",
      reasons: [
        "Customized Sessions – Every call is focused entirely on you and your personal manifestation journey",
        "Language Flexibility – Coaching is available in both English and Hindi for comfort and clarity",
        "Based on Authentic Teachings – We stick closely to Neville Goddard's original philosophy with clear, practical applications",
        "Tools You Can Use Daily – You'll receive simple yet powerful exercises, affirmations, and journaling prompts for everyday progress",
        "Real Support, Real Change – You're not just learning—you're transforming the way you think, feel, and live",
      ],
    },

    transformations: {
      title: "Real Transformations From This Work",
      results: [
        "Manifesting loving relationships and improved connections",
        "Attracting career growth and financial opportunities",
        "Experiencing emotional peace and mental clarity",
        "Creating success stories from what once seemed out of reach",
      ],
      conclusionText:
        "These results don't come from wishful thinking—they come from shifting your state of consciousness and assuming the life you want is already yours.",
    },

    conclusion: {
      title: "Step Into the Life You Deserve",
      paragraphs: [
        "Your dream life is not far away—it's waiting for you to claim it through belief, imagination, and action. Our 1:1 Law of Assumption Coaching gives you the support, tools, and guidance to rewrite your inner script and manifest real change.",
        "You are the creator of your reality. Start your transformation today.",
        "Book your session now and begin aligning your assumptions with the life you were born to live.",
      ],
    },
  };

  // Render hero section and content
  return (
    <>
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Coaching Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {coachingData.mainTitle}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {coachingData.introText}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {coachingData.coreText}
          </p>
        </div>

        {/* Law of Assumption Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {coachingData.lawOfAssumption.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {coachingData.lawOfAssumption.description}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {coachingData.lawOfAssumption.nevilleQuote}
          </p>
        </div>

        {/* Coaching Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {coachingData.coaching.title}
          </h2>
          <p className="text-gray-700 mb-4">{coachingData.coaching.intro}</p>
          <ul className="ml-2">
            {coachingData.coaching.benefits.map((benefit, index) => (
              <FeatureBullet key={`benefit-${index}`} text={benefit} />
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            {coachingData.coaching.conclusionText}
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {coachingData.whyChoose.title}
          </h2>
          <ul className="ml-2">
            {coachingData.whyChoose.reasons.map((reason, index) => (
              <FeatureBullet key={`reason-${index}`} text={reason} />
            ))}
          </ul>
        </div>

        {/* Transformations Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {coachingData.transformations.title}
          </h2>
          <ul className="ml-2">
            {coachingData.transformations.results.map((result, index) => (
              <FeatureBullet key={`result-${index}`} text={result} />
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            {coachingData.transformations.conclusionText}
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {coachingData.conclusion.title}
          </h2>
          {coachingData.conclusion.paragraphs.map((paragraph, index) => (
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
