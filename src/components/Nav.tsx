"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "People", href: "#people" },
  { label: "Services", href: "#services" },
  { label: "Articles & Insights", href: "#insights" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md border-b-[0.5px] border-rule" : "bg-transparent"
    }`}>
      {/* Utility Top Bar */}
      <div className="flex justify-end px-6 md:px-12 py-2 border-b-[0.5px] border-black/5">
        <div className="flex gap-6 text-[10px] font-sans font-bold text-ink-muted tracking-[0.2em] uppercase">
          <Link href="#" className="hover:text-gold transition-colors">Client Portal</Link>
          <span className="opacity-20">|</span>
          <Link href="#contact" className="hover:text-gold transition-colors">Contact Us</Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 md:px-12 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 font-serif text-[22px] font-medium text-ink tracking-tight group">
          <div className="relative w-10 h-10 transition-transform group-hover:rotate-12">
            <Image 
              src="/images/logo.svg" 
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

        {/* Nav Links */}
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

        {/* Search & Actions */}
        <div className="flex gap-8 items-center">
          <button className="text-ink-muted hover:text-gold transition-colors p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          
          <button className="lg:hidden text-ink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
