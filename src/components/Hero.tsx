import Image from "next/image";
import RevealWrapper from "./RevealWrapper";
import ImageReveal from "./ImageReveal";

const baseUrl = process.env.NODE_ENV === 'production' ? '/advocates' : '';

const Hero = () => {
  return (
    <section className="min-h-screen pt-40 pb-24 overflow-hidden relative flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={`${baseUrl}/images/uyt.jpg`}
          alt="H&G Advocates Landing Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-[2px]" />
      </div>

      <div className="content-max px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Headline & Secondary Cards */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <RevealWrapper>
              <div className="max-w-[620px] mb-20">
                <h1 className="text-6xl md:text-[92px] font-serif font-medium mb-12 leading-[1.0] tracking-tight text-white">
                  What's your next <br /> 
                  <span className="text-gold italic">brilliant move?</span>
                </h1>
                <div className="flex items-center gap-12">
                  <p className="text-[16px] text-white/60 max-w-[340px] font-sans font-light leading-relaxed">
                    Game-changing work. People and AI powering growth. At H&G, we help you think bigger, build stronger, and expand opportunity for all.
                  </p>
                  <button className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                    <svg className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </button>
                </div>
              </div>
            </RevealWrapper>
            
            {/* Nested Grid for bottom-left cards */}
            <div className="grid grid-cols-7 gap-8 mt-auto">
              <div className="col-span-4">
                <ImageReveal delay={0.4} direction="right">
                  <div className="relative aspect-[3.5/4.5] overflow-hidden group cursor-pointer border-[0.5px] border-white/10">
                    <Image
                      src={`${baseUrl}/images/advo.jpg`}
                      alt="Industrial detail"
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-10">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-3 block font-sans">REPORT</span>
                      <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors leading-tight">
                        Ramping up manufacturing in Africa? ›
                      </h3>
                    </div>
                  </div>
                </ImageReveal>
              </div>

              <div className="col-span-3 self-end">
                <ImageReveal delay={0.6} direction="top">
                  <div className="relative aspect-square overflow-hidden group cursor-pointer border-[0.5px] border-white/10">
                    <Image
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
                      alt="Strategy meeting"
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-3 block font-sans">ARTICLE</span>
                      <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors leading-tight">
                        Five steps to turning geopolitical volatility into advantage ›
                      </h3>
                    </div>
                  </div>
                </ImageReveal>
              </div>
            </div>
          </div>

          {/* Right Column: Large Featured Report */}
          <div className="lg:col-span-5 h-full">
            <ImageReveal delay={0.2} direction="bottom">
              <div className="relative w-full min-h-[850px] flex flex-col group overflow-hidden shadow-2xl border-[0.5px] border-white/10">
                {/* Background Image */}
                <Image 
                  src={`${baseUrl}/images/ai.jpg`}
                  alt="Legal professional working with AI-enhanced tools"
                  fill
                  className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
                />
                
                {/* Overlay for text legibility */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="p-12 z-10 relative">
                  <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-white/70 mb-6 block font-sans">REPORT</span>
                  <h2 className="text-5xl md:text-[56px] font-serif font-medium text-white leading-[1.05] mb-10 tracking-tight">
                    Legal Tech & AI: Transforming Corporate Advisory in Uganda
                  </h2>
                  <p className="text-white/80 text-[16px] max-w-[380px] leading-relaxed font-sans mb-12 font-light">
                    Our latest strategic analysis on macroeconomic trends, policy shifts, and growth opportunities in the Ugandan market.
                  </p>
                </div>
                
                <div className="mt-auto relative z-10 p-12">
                  <button className="bg-white text-ink px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink hover:text-white transition-all duration-300 rounded-none font-sans shadow-lg flex items-center gap-3">
                    Read the report <span>→</span>
                  </button>
                </div>
              </div>
            </ImageReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
