import RevealWrapper from "./RevealWrapper";

const AppDownloadSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-32 border-t-[0.5px] border-rule">
      <div className="max-w-[1000px] mx-auto text-center">
        <RevealWrapper>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-ink mb-20 leading-tight tracking-tight">
            The world moves fast. <br /> Don't just keep pace. <span className="text-gold italic">Stay ahead.</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <RevealWrapper delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <div className="w-48 h-44 bg-gray-bg border-[0.5px] border-rule flex flex-col items-center justify-center p-4">
                <div className="w-full h-full border-[1px] border-black/5 flex items-center justify-center relative overflow-hidden group">
                  <span className="text-[10px] text-ink/20 font-bold uppercase tracking-widest font-sans z-10">QR CODE</span>
                  <div className="absolute inset-0 bg-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-ink/40 uppercase font-sans text-center sm:text-left leading-relaxed">
                SCAN TO DOWNLOAD <br className="hidden sm:block" /> THE H&G APP
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-normal text-ink mb-10 leading-tight">
                Download the H&G Insights app
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <button className="bg-ink text-white px-10 py-4 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest font-sans rounded-none hover:bg-gold transition-all duration-300 shadow-xl">
                  <span className="text-xl">🍎</span> App Store
                </button>
                <button className="bg-ink text-white px-10 py-4 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest font-sans rounded-none hover:bg-gold transition-all duration-300 shadow-xl">
                  <span className="text-xl text-gold">▶</span> Google Play
                </button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
