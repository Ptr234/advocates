export interface Practice {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const practices: Practice[] = [
  {
    title: "Industry Expertise",
    description: "Deep sector-specific knowledge built over a century of high-stakes corporate counseling and strategic advisory.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    href: "#services",
  },
  {
    title: "Capabilities",
    description: "Multi-disciplinary legal solutions designed to transform organizational performance and mitigate complex global risks.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    href: "#services",
  },
  {
    title: "Digital & AI Law",
    description: "Forward-thinking advisory on emerging technologies, data privacy, and the legal frameworks of the future.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    href: "#services",
  },
];
