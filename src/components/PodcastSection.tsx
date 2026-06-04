import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

const podcastEpisode = {
  title: "Move first or fall behind: How AI is rewriting the rules of banking",
  date: "May 28, 2026",
  duration: "24:18",
  description:
    "AI is poised to reshape banking not just by cutting costs, but by redistributing profits, redefining customer relationships, and accelerating competition. How should banks respond?",
};

const baseUrl = process.env.NODE_ENV === 'production' ? '/advocates' : '';

const PodcastSection = () => {
  return (
    <section className="bg-gray-dark px-6 md:px-20 py-32 text-white overflow-hidden relative">
      <div className="max-w-300 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <RevealWrapper>
            <div className="max-w-170">
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 leading-tight tracking-tight">
                The H&G Podcast
              </h2>
              <p className="text-[16px] leading-relaxed opacity-60 max-w-145 font-serif font-light">
                A shortcut to clarity in a noisy world, The H&G Podcast dives into the ideas, issues,
                and innovations reshaping business, the economy, and society. Tune in to hear from
                experts and thought leaders about the latest in legal breakthroughs, leadership, and more.
              </p>
              <div className="flex gap-4 mt-10">
                {["🎙", "🎵", "▶"].map((icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-full border-[0.5px] border-white/20 bg-transparent flex items-center justify-center hover:bg-gold hover:border-gold transition-colors text-lg"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <a
              href="#"
              className="px-10 py-5 border-[0.5px] border-white/30 text-white font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-all flex items-center gap-3"
            >
              Listen here →
            </a>
          </RevealWrapper>
        </div>

        {/* Featured episode */}
        <RevealWrapper delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden border-[0.5px] border-white/10">
            <div className="p-12 md:p-16 text-ink">
              <p className="text-[10px] text-ink/40 mb-6 font-bold uppercase tracking-[0.2em] font-sans">{podcastEpisode.date}</p>
              <h3 className="text-3xl font-serif font-normal leading-tight mb-8 text-ink hover:text-gold transition-colors cursor-pointer">
                {podcastEpisode.title} →
              </h3>
              <p className="text-[15px] text-ink-light leading-relaxed font-serif font-light">{podcastEpisode.description}</p>
            </div>
            <div className="relative aspect-square md:aspect-auto bg-gray-bg flex items-center justify-center min-h-90 overflow-hidden group">
              {/* Play button */}
              <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-ink text-[24px] shadow-2xl hover:scale-110 transition-transform relative z-10">
                <span className="text-gold ml-1">▶</span>
              </button>

              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 opacity-40 pointer-events-none group-hover:scale-105 transition-transform duration-[4s]">
                 <Image 
                  src={`${baseUrl}/images/placeholder.jpg`}
                  alt="Podcast featured episode visualization"
                  fill
                  className="object-cover" 
                 />
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[11px] text-ink/30 font-bold uppercase tracking-widest font-sans">
                <span>0:00</span>
                <span>{podcastEpisode.duration}</span>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default PodcastSection;
