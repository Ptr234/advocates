import Link from "next/link";
import { footerLinks } from "@/lib/data/contact";

const Footer = () => {
  return (
    <footer className="bg-white px-10 md:px-20 py-24 border-t-[0.5px] border-rule">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 font-serif text-[28px] font-medium text-ink leading-none mb-20 group">
          <div className="w-12 h-12 bg-gold flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">H</div>
          <div className="flex flex-col leading-none">
            <span>H&G</span>
            <span className="text-[20px] text-ink-muted">Advocates</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 mb-20">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-8 font-sans">
                {col.heading}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] text-ink-muted hover:text-gold transition-colors font-serif font-light"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t-[0.5px] border-rule flex flex-col md:flex-row justify-between items-center gap-10 text-[11px] text-ink/40 font-sans font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} H&G Advocates. All rights reserved.</p>
          <div className="flex gap-10">
            {["Privacy Policy", "Cookie Policy", "Terms of Use", "Site Map"].map((item) => (
              <Link key={item} href="#" className="hover:text-gold transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
