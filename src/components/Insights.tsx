"use client";

import Image from "next/image";
import { insightCards } from "@/lib/data/insights";
import RevealWrapper from "./RevealWrapper";

const Insights = () => {
  return (
    <section id="insights" className="bg-white px-6 md:px-20 py-32 border-t-[0.5px] border-rule">
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper>
          <div className="mb-20">
            <span className="eyebrow mb-6 block text-gold">Latest Thinking</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-ink leading-tight tracking-tight">
              Our Latest <br /> Insights.
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-rule border-[0.5px] border-rule overflow-hidden">
          {/* Large card - spans 2 rows */}
          <div className="lg:row-span-2">
            <RevealWrapper delay={0.2} width="100%">
              <div className="relative overflow-hidden group cursor-pointer aspect-[3/4] md:aspect-auto h-full bg-white min-h-[400px]">
                <Image
                  src={insightCards[0].image}
                  alt={insightCards[0].title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-gold font-sans">
                    {insightCards[0].type}
                  </p>
                  <h3 className="font-serif text-[24px] font-normal leading-tight group-hover:text-gold transition-colors">
                    {insightCards[0].title} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </h3>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Top right cards */}
          {insightCards.slice(1, 3).map((card, i) => (
            <div key={i} className="bg-white">
              <RevealWrapper delay={0.3 + i * 0.1} width="100%">
                <div className="relative overflow-hidden group cursor-pointer aspect-[16/9]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-gold font-sans">
                      {card.type}
                    </p>
                    <h3 className="font-serif text-[18px] font-normal leading-tight group-hover:text-gold transition-colors">
                      {card.title} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </h3>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          ))}

          {/* Bottom middle card */}
          <div className="bg-white">
            <RevealWrapper delay={0.5} width="100%">
              <div className="relative overflow-hidden group cursor-pointer aspect-[16/9]">
                <Image
                  src={insightCards[3].image}
                  alt={insightCards[3].title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-gold font-sans">
                    {insightCards[3].type}
                  </p>
                  <h3 className="font-serif text-[18px] font-normal leading-tight group-hover:text-gold transition-colors">
                    {insightCards[3].title} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </h3>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Subscribe box */}
          <div className="bg-gray-bg h-full">
            <RevealWrapper delay={0.6} width="100%">
              <div className="p-8 flex flex-col justify-center h-full">
                <p className="text-ink text-[15px] font-serif mb-8 leading-relaxed font-light">
                  Subscribe to the latest H&G Insights on the topics you care about.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 bg-white text-ink text-[13px] border-[0.5px] border-rule outline-none rounded-none font-sans"
                  />
                  <button className="bg-ink text-white px-5 py-3 transition-colors hover:bg-gold hover:text-white">
                    →
                  </button>
                </div>
                <p className="text-ink/30 text-[10px] uppercase tracking-[0.2em] my-6 text-center font-bold font-sans">Or continue with</p>
                <div className="flex gap-2">
                  {["Apple", "Google", "LinkedIn"].map((provider) => (
                    <button
                      key={provider}
                      className="flex-1 bg-white border-[0.5px] border-rule text-ink py-2.5 text-[10px] font-bold uppercase tracking-widest font-sans hover:bg-gray-bg transition-colors rounded-none"
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
