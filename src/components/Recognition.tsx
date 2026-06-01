import RevealWrapper from "./RevealWrapper";

const Recognition = () => {
  const awards = [
    { name: "Chambers Global", rank: "Band 1 Firm", year: "2026" },
    { name: "IFLR1000", rank: "Tier 1: Corporate/M&A", year: "2025" },
    { name: "Legal 500", rank: "Leading Firm", year: "2026" },
    { name: "WTR 1000", rank: "Gold Tier", year: "2025" },
  ];

  return (
    <section id="recognition" className="section-padding bg-ink text-cream">
      <div className="content-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <RevealWrapper>
            <div className="max-w-[600px]">
              <span className="eyebrow mb-6 block">Global Standards</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight tracking-tight">
                Recognized by the world's leading legal directories.
              </h2>
            </div>
          </RevealWrapper>
          
          <RevealWrapper delay={0.2}>
            <div className="pb-2">
              <button className="text-gold border-b-[0.5px] border-gold pb-1 font-medium hover:text-white hover:border-white transition-all text-[10px] uppercase tracking-[0.14em]">
                Full List of Accolades
              </button>
            </div>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border-[0.5px] border-cream/10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-ink p-12 flex flex-col items-center text-center transition-colors duration-200 hover:bg-cream/5"
            >
              <div className="w-12 h-12 border-[0.5px] border-gold/30 flex items-center justify-center mb-10 group-hover:border-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L10 17L15 15V5L10 3L5 5V15Z" stroke="#B8955A" strokeWidth="0.5" />
                  <path d="M10 3V17" stroke="#B8955A" strokeWidth="0.5" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-3">{award.name}</h4>
              <p className="text-cream/40 text-[12px] font-light mb-2">{award.rank}</p>
              <span className="text-gold/60 text-[10px] uppercase tracking-[0.14em] font-medium">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
