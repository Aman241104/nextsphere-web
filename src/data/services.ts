export interface ServiceDetail {
  slug: string;
  title: string;
  category: 'US' | 'India';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export const servicesData: ServiceDetail[] = [
  // US SERVICES
  {
    slug: 'us-accounting',
    title: 'Outsourced Accounting Services',
    category: 'US',
    shortDesc: 'Scalable bookkeeping and accounting for US-based CPA firms and businesses.',
    fullDesc: 'We provide end-to-end accounting support, allowing US firms to focus on growth while we handle the heavy lifting of daily financial management.',
    features: ['General Ledger Maintenance', 'Bank & Credit Card Reconciliations', 'Accounts Payable/Receivable', 'Month-end Closing'],
    icon: 'Calculator',
  },
  {
    slug: 'us-taxation',
    title: 'US Taxation & Compliance',
    category: 'US',
    shortDesc: 'Professional US tax preparation and IRS compliance support.',
    fullDesc: 'Expert navigation of the US tax landscape for individuals and businesses, ensuring full compliance with federal and state regulations.',
    features: ['Individual Tax Returns (1040)', 'Business Tax Returns (1120, 1065)', 'State & Local Tax (SALT)', 'IRS Audit Support'],
    icon: 'ShieldCheck',
  },
  {
    slug: 'us-bookkeeping',
    title: 'US Bookkeeping Services',
    category: 'US',
    shortDesc: 'Precise financial record-keeping for growing companies.',
    fullDesc: 'Maintain accurate financial records with our professional bookkeeping services, using top-tier software like QuickBooks and Xero.',
    features: ['Daily Transaction Recording', 'Account Reconciliation', 'Financial Statement Prep', 'Expense Tracking'],
    icon: 'Briefcase',
  },
  {
    slug: 'us-cfo',
    title: 'Virtual CFO Advisory',
    category: 'US',
    shortDesc: 'Strategic financial leadership for scaling startups.',
    fullDesc: 'Get high-level financial guidance without the cost of a full-time executive. We help with forecasting, budgeting, and growth strategy.',
    features: ['Financial Forecasting', 'Budget Variance Analysis', 'KPI Dashboards', 'Investor Reporting'],
    icon: 'BarChart3',
  },

  // INDIAN SERVICES
  {
    slug: 'in-income-tax',
    title: 'Indian Income Tax',
    category: 'India',
    shortDesc: 'Expert consultancy and tax planning for Indian entities.',
    fullDesc: 'Comprehensive support for domestic tax compliance, including return filing, notices, and strategic planning.',
    features: ['Tax Planning & Consultancy', 'Transfer Pricing', 'Tax Audits', 'Return Filing', 'Notices and Appeals', 'TDS/TCS Compliances'],
    icon: 'TrendingUp',
  },
  {
    slug: 'in-gst',
    title: 'GST Consultancy & Compliance',
    category: 'India',
    shortDesc: 'Comprehensive GST registration, filing, and advisory.',
    fullDesc: 'Navigating the complexities of the Indian Goods and Services Tax system with precision and strategic planning.',
    features: ['GST Registration', 'Monthly/Quarterly Returns', 'Input Tax Credit', 'GST Audit Support', 'ITC Forms', 'E-Commerce Compliances'],
    icon: 'Landmark',
  },
  {
    slug: 'in-assurance',
    title: 'Assurance & Audit',
    category: 'India',
    shortDesc: 'Internal, stock, and asset verification audits.',
    fullDesc: 'Independent verification services to ensure the accuracy and reliability of your business operations and financial records.',
    features: ['Internal Audit', 'Fixed Asset Verification', 'Stock Audit', 'IFSC Audit'],
    icon: 'ShieldCheck',
  },
  {
    slug: 'in-finance',
    title: 'Project Finance & Support',
    category: 'India',
    shortDesc: 'Raising capital and financial project reporting.',
    fullDesc: 'Strategic support for securing project financing and managing relationships with private bankers.',
    features: ['Project Finance Reports', 'Private Banker Support', 'Investment Advisory', 'Fundraising Strategy'],
    icon: 'Landmark',
  },
  {
    slug: 'in-startup',
    title: 'Startup India Registration',
    category: 'India',
    shortDesc: 'End-to-end support for new ventures in the Indian ecosystem.',
    fullDesc: 'From registration to fundraising advisory, we help Indian startups build a solid financial and legal foundation.',
    features: ['DPIIT Registration', 'Fund Raising Activities', 'Tax Exemptions Support', 'Self-Certification Compliance'],
    icon: 'Rocket',
  },
  {
    slug: 'in-trademark',
    title: 'Trademark & IP',
    category: 'India',
    shortDesc: 'Protecting your brand identity in the market.',
    fullDesc: 'Legal support for trademark registration and appeals to safeguard your business assets.',
    features: ['Trademark Registration', 'Appeals', 'Brand Protection Advisory'],
    icon: 'ShieldCheck',
  },
  {
    slug: 'in-wealth',
    title: 'Wealth Management',
    category: 'India',
    shortDesc: 'Protecting and growing your private and corporate assets.',
    fullDesc: 'Tailored wealth management strategies to ensure long-term financial security and growth for owners.',
    features: ['Managing Private Wealth', 'Financial Product Distribution', 'Advisory Services'],
    icon: 'TrendingUp',
  },
  {
    slug: 'in-bookkeeping',
    title: 'Domestic Bookkeeping',
    category: 'India',
    shortDesc: 'End-to-end accounting operations for Indian firms.',
    fullDesc: 'We manage day-to-day financial records using modern standards and software.',
    features: ['R2R, P2P & O2C', 'Bank Reconciliation (BRS)', 'Financial Preparation', 'Audit Support'],
    icon: 'Briefcase',
  },
  {
    slug: 'in-formation',
    title: 'Entity Formation',
    category: 'India',
    shortDesc: 'LLP and Private Limited company registration.',
    fullDesc: 'Streamlined process for registering new business entities in India, from LLP to Public Limited Companies.',
    features: ['LLP Registration', 'Private Limited Company', 'Public Limited Company'],
    icon: 'Briefcase',
  },
  {
    slug: 'in-mca',
    title: 'MCA Compliances',
    category: 'India',
    shortDesc: 'Annual return filing and statutory compliance.',
    fullDesc: 'Ensuring your company stays compliant with the Ministry of Corporate Affairs regulations and filing requirements.',
    features: ['MCA Return Filing', 'MCA Compliances', 'Statutory Records Maintenance'],
    icon: 'Landmark',
  },
  {
    slug: 'in-fema',
    title: 'FEMA Compliance',
    category: 'India',
    shortDesc: 'ODI and foreign exchange advisory.',
    fullDesc: 'Expert guidance on Foreign Exchange Management Act (FEMA) regulations and ODI compliance.',
    features: ['ODI Regulations', 'FEMA Advisory', 'FDI Reporting'],
    icon: 'Globe',
  },
];
