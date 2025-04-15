import { CollapsibleFooterColumn } from "./CollapsibleFooterColumn";
import { ContactInfo } from "./ContactInfo";
import { Logo } from "./Logo";
export default function Footer() {
  const aboutLinks = ["Resource", "Term & Condition", "FAQ"];
  const companyLinks = [
    "Our Team",
    "Partner With Us",
    "Privacy & Policy",
    "Features",
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
              <CollapsibleFooterColumn title="About" links={aboutLinks} />
              <CollapsibleFooterColumn title="Company" links={companyLinks} />
              <ContactInfo />
            </div>
          </div>
        </div>

        <div className="border-t w-full border-gray-800 mt-8 flex justify-center pt-6 text-center md:text-left">
          <div className="text-gray-400 text-sm">
            Created by{" "}
            <span className="text-white">lawofassumptioncoaching</span> | All
            Rights Reserved!
          </div>
        </div>
      </div>
    </footer>
  );
}
