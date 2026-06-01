import Image from "next/image";
import { practices } from "@/lib/data/practices";
import RevealWrapper from "./RevealWrapper";

const PracticeAreas = () => {
  return (
    <section id="services" className="bg-gray-bg px-6 md:px-20 py-32">
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper>
          <div className="text-center mb-20">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-muted mb-6 font-sans">
              HOW WE HELP CLIENTS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-ink max-w-[800px] mx-auto leading-[1.15] tracking-tight">
              Let's turn your biggest opportunities into your next <span className="text-gold italic">big moves.</span>
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-rule border-[0.5px] border-rule overflow-hidden">
          {practices.map((card, i) => (
            <div
              key={card.title}
              className="group overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 bg-white relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover grayscale transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-10">
                <h3 className="font-serif text-[20px] font-medium mb-4 flex items-center gap-3 text-ink group-hover:text-gold transition-colors">
                  {card.title}
                  <span className="text-gold text-[22px] transition-transform duration-300 group-hover:translate-x-1">›</span>
                </h3>
                <p className="text-[15px] leading-relaxed font-serif text-ink-light font-light">
                  {card.description}
                </p>
              </div>
              {/* Bottom border reveal */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
