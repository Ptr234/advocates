import { contact } from "@/lib/data/contact";
import RevealWrapper from "./RevealWrapper";
import ContactForm from "./ContactForm";

const CTABand = () => {
  return (
    <section id="contact" className="section-padding bg-gold relative overflow-hidden">
      {/* Editorial detail */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[0.5px] border-ink/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="content-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <RevealWrapper>
            <div className="max-w-[500px]">
              <h2 className="text-4xl md:text-7xl font-serif font-medium text-ink mb-10 leading-[1.05] tracking-tight">
                Ready to discuss <br /> your next case?
              </h2>
              <p className="text-ink-light text-xl font-sans font-light mb-16 leading-relaxed">
                Our specialists are ready to provide the strategic guidance your business needs. Reach out to us today.
              </p>
              
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.14em] font-medium text-ink/40 mb-3 block">Electronic Mail</span>
                  <a href={`mailto:${contact.email}`} className="text-2xl font-serif font-medium text-ink hover:text-white transition-colors duration-300">
                    {contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.14em] font-medium text-ink/40 mb-3 block">Direct Line</span>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-2xl font-serif font-medium text-ink hover:text-white transition-colors duration-300">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <div className="bg-ink p-12 md:p-16 shadow-none border-[0.5px] border-white/5">
              <ContactForm />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
