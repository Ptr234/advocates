export interface InsightCard {
  type: "REPORT" | "ARTICLE" | "INTERACTIVE" | "BLOG POST";
  title: string;
  image: string;
  href: string;
}

const baseUrl = process.env.NODE_ENV === 'production' ? '/advocates' : '';

export const insightCards: InsightCard[] = [
  {
    type: "REPORT",
    title: "Legal Tech & AI: Transforming Corporate Advisory in Uganda",
    image: `${baseUrl}/images/ai.jpg`,
    href: "#",
  },
  {
    type: "ARTICLE",
    title: "The Future of Dispute Resolution in East African Courts",
    image: `${baseUrl}/images/law.jpg`,
    href: "#",
  },
  {
    type: "INTERACTIVE",
    title: "The Evolution of Corporate Governance in the Digital Age",
    image: `${baseUrl}/images/uyt.jpg`,
    href: "#",
  },
  {
    type: "BLOG POST",
    title: "H&G Foundation: Empowering the Next Generation of Legal Minds",
    image: `${baseUrl}/images/advo.jpg`,
    href: "#",
  },
];
