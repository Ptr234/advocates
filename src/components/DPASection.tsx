"use client";

import { useState } from "react";

const DPASection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#f5f5f5] px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-6 border-t-[0.5px] border-ink/20 text-left font-serif font-medium text-[15px] text-ink hover:text-brand transition-colors"
        >
          <span>Compliance and Regulatory Statement Relating to our Regional Operations</span>
          <span className={`text-[20px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            ∨
          </span>
        </button>
        {isOpen && (
          <div className="pb-8 text-[14px] leading-relaxed text-ink/70 font-serif max-w-[900px]">
            H&G Advocates is committed to the highest standards of professional conduct and regulatory compliance. 
            We maintain rigorous internal controls to ensure our advisory services align with international best 
            practices and local jurisdictional requirements across East Africa. For detailed information regarding our 
            compliance framework, please contact our legal department.
          </div>
        )}
      </div>
    </section>
  );
};

export default DPASection;
