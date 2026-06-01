import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

const socialCards = [
  {
    title: "H&G Foundation",
    description: "Skill building programs—at no cost—so nonprofits and individuals can achieve even more.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Legal Forward",
    description: "An online learning journey designed to equip individuals at different stages of their careers with practical skills to succeed.",
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Sustainable Growth",
    description: "We support organizations in innovating sustainably, achieving lasting performance gains, and building workforces for the future.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    href: "#",
  },
];

const SocietalImpactSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-32 border-t-[0.5px] border-rule">
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper>
          <div className="text-center mb-20">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-muted mb-6 font-sans">
              SOCIETAL IMPACT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-ink max-w-[700px] mx-auto leading-[1.15] tracking-tight">
              Sharing our best to help <span className="text-gold italic">more people succeed.</span>
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {socialCards.map((card, i) => (
            <RevealWrapper key={i} delay={i * 0.1}>
              <div
                className={`group cursor-pointer transition-all duration-500 border-[0.5px] border-rule bg-white hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                </div>
                <div className="p-10 bg-white">
                  <h3
                    className="font-serif text-[20px] font-medium mb-4 flex items-center gap-3 text-ink group-hover:text-gold transition-colors"
                  >
                    {card.title}
                    <span className="text-[24px] text-gold transition-transform duration-300 group-hover:translate-x-1">›</span>
                  </h3>
                  <p className="text-[15px] leading-relaxed font-serif text-ink-light font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocietalImpactSection;
