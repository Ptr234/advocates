"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "People", href: "#people" },
  { label: "Services", href: "#services" },
  { label: "Articles & Insights", href: "#insights" },
];

const baseUrl = process.env.NODE_ENV === 'production' ? '/advocates' : '';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white border-b-[0.5px] border-rule" : "bg-transparent"
      }`}>
        {/* Utility Top Bar */}
        {!isMobileMenuOpen && (
          <div className="flex justify-end px-6 md:px-12 py-2 border-b-[0.5px] border-black/5">
            <div className="flex gap-6 text-[10px] font-sans font-bold text-ink-muted tracking-[0.2em] uppercase">
              <Link href="#" className="hover:text-gold transition-colors">Client Portal</Link>
              <span className="opacity-20">|</span>
              <Link href="#contact" className="hover:text-gold transition-colors">Contact Us</Link>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          {/* Logo */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 font-serif text-[22px] font-medium text-ink tracking-tight group">
            <div className="relative w-10 h-10 transition-transform group-hover:rotate-12">
              <Image 
                src={`${baseUrl}/images/logo.svg`}
                alt="H&G Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="group-hover:text-gold transition-colors">H&G Advocates</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-ink-muted mt-1 font-bold">Est. 1903</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-12 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted hover:text-ink transition-colors duration-200"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex gap-4 items-center">
            <button className="text-ink-muted hover:text-gold transition-colors p-2 hidden md:block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            
            <button 
              className="lg:hidden text-ink p-2 relative z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-cream z-[90] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <div className="flex flex-col p-8 pt-32 h-full overflow-y-auto">
          <div className="flex flex-col gap-8">
            {navItems.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${i * 75}ms` }}
                className={`text-4xl font-serif font-medium text-ink hover:text-gold transition-all duration-500 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 pb-12">
            <div className="h-[0.5px] bg-rule w-full mb-8" />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[12px] font-bold uppercase tracking-[0.2em] text-ink">Contact Us</Link>
                <Link href="#" className="text-[12px] font-bold uppercase tracking-[0.2em] text-ink">Client Portal</Link>
              </div>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Instagram"].map((label, i) => (
                  <button key={i} className="px-5 py-3 border-[0.5px] border-rule text-[11px] uppercase tracking-widest font-bold text-ink hover:border-ink hover:bg-ink hover:text-white transition-all">
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
