import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

const About = () => {
  return (
    <section id="about" className="bg-white px-6 md:px-20 py-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <RevealWrapper>
          <div>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink/40 mb-6 font-serif">
              CAREERS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-brand mb-6 leading-tight tracking-tight">
              Looking for your next move?
            </h2>
            <p className="text-[16px] text-ink/70 leading-relaxed font-serif mb-10 max-w-[500px]">
              We look for people who are energized by the same things as our clients: bold thinking, real impact, and the courage to move first.
            </p>
            <button className="bg-brand text-white px-8 py-4 text-[14px] font-semibold font-serif tracking-wide rounded-none hover:bg-brand/90 transition-colors">
              Explore Careers
            </button>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div className="relative group cursor-pointer">
            {/* Decorative accent */}
            <div className="absolute top-[-16px] right-[-16px] w-[120px] h-[120px] bg-brand z-0" />
            <div className="relative z-10 overflow-hidden aspect-[3/2]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                alt="Careers at H&G"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-ink text-[20px] shadow-lg">
                  ▶
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default About;
