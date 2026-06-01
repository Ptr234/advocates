export interface InsightCard {
  type: "REPORT" | "ARTICLE" | "INTERACTIVE" | "BLOG POST";
  title: string;
  image: string;
  href: string;
}

export const insightCards: InsightCard[] = [
  {
    type: "REPORT",
    title: "Uganda's Economic Outlook 2026: Navigating Global Volatility",
    image: "https://images.unsplash.com/photo-1541913007797-42f280b0e484?auto=format&fit=crop&q=80",
    href: "#",
  },
  {
    type: "ARTICLE",
    title: "The Future of Dispute Resolution in East African Courts",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    href: "#",
  },
  {
    type: "INTERACTIVE",
    title: "Legal Tech & AI: Transforming Corporate Advisory in Uganda",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    href: "#",
  },
  {
    type: "BLOG POST",
    title: "H&G Foundation: Empowering the Next Generation of Legal Minds",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
    href: "#",
  },
];
