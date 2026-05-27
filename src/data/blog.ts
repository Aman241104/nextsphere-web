export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'navigating-us-tax-reforms-2026',
    title: 'Navigating US Tax Reforms in 2026: What SMEs Need to Know',
    excerpt: 'Stay ahead of the curve with our deep dive into the latest US tax changes and how they impact international businesses.',
    content: 'Full article content would go here. We will cover the major changes in corporate tax rates, new compliance requirements for international entities, and strategic planning opportunities for the upcoming fiscal year.',
    date: 'May 15, 2026',
    category: 'Taxation',
    author: 'Pooja Solanki',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'scaling-with-virtual-cfo',
    title: 'How Virtual CFO Services Can Accelerate Your Startup’s Growth',
    excerpt: 'Discover why more startups are opting for fractional financial leadership to manage their scale-up phase.',
    content: 'Full article content would go here. This post discusses the benefits of strategic financial forecasting, KPI management, and investor reporting provided by a Virtual CFO.',
    date: 'April 28, 2026',
    category: 'Advisory',
    author: 'Strategic Team',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'gst-compliance-checklist-india',
    title: 'The Ultimate GST Compliance Checklist for Indian eCommerce',
    excerpt: 'A step-by-step guide to ensuring your online business remains compliant with the latest GST regulations in India.',
    content: 'Full article content would go here. This checklist includes registration requirements, invoicing standards, and filing deadlines specifically for the eCommerce sector.',
    date: 'April 10, 2026',
    category: 'Compliance',
    author: 'GST Specialist',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
  },
];
