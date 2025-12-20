// src/data/mockData.ts
export const CORE_CONTENT = {
  heroTagline: "Your Gateway to Ethiopia’s Market",
  introDescription: "SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s growing market. With over 20 years of expertise in trade representation, the company provides advisory services, market insights, sourcing, import and export facilitation, and supply chain management. The team ensures regulatory compliance, smooth operations, and strong partnerships to help global businesses succeed.",
  closingSlogan: "Expert Support. Seamless Operations. Global Connections.",
  aboutUsContent: "SABOLLA is a professional foreign trade agency with two decades of experience connecting global businesses to Ethiopian markets. It provides end-to-end trade solutions to simplify operations, reduce risk, and drive sustainable growth. Services include advisory, sourcing, supply chain management, and import/export facilitation, built on professionalism, integrity, and strong regulatory knowledge.",
};

// 2. Achievements (Stats)
export const ACHIEVEMENTS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '100+', label: 'International Suppliers' },
  { value: '150+', label: 'Successful Shipments' },
  { value: '50+', label: 'Product Categories' },
];

// 3. Products (Categories)
export const PRODUCT_CATEGORIES = [
  { name: "Aviation", slug: "aviation", desc: "Critical communication, navigation, and information-management systems." },
  { name: "Military", slug: "military", desc: "Advanced defense technologies meeting exacting military standards." },
  { name: "Fire & Disaster Risk", slug: "fire-disaster", desc: "Extensive range of firefighting and emergency-response equipment." },
  { name: "Safety & Security", slug: "safety-security", desc: "Specialized protective gear for high-risk and industrial environments." },
  { name: "Agricultural Products", slug: "agriculture", desc: "Storage, post-harvest protection, and essential implements." },
  { name: "Water & Sewerage", slug: "water-sewerage", desc: "Infrastructure equipment for urban service delivery and sanitation." },
  { name: "Power & Energy", slug: "power-energy", desc: "Electrical infrastructure components for scalable energy systems." },
  { name: "Transportation & Storage", slug: "transportation", desc: "Heavy machinery, specialized tires, and storage solutions." }

];

// 4. Services
export const SERVICES_LIST = [
  { name: "Advisory & Consultancy", slug: "advisory", shortDesc: "Guidance for international business partners." },
  { name: "Local Market Assessments", slug: "market-assessments", shortDesc: "Detailed market intelligence reports." },
  { name: "Import & Export Facilitation", slug: "import-export", shortDesc: "Handling logistics and customs compliance." },
  { name: "Sourcing & Supply Chain", slug: "sourcing", shortDesc: "End-to-end supply chain management." },
];

// 5. Partners (Logos)
export const PARTNER_LOGOS = [
  { name: "ASI (Europe) Ltd.", src: "/logos/asi.svg" }, // Assuming assets folder for logos
  { name: "Rosenbauer", src: "/logos/rosenbauer.svg" },
  // ... all 11 partners plus 'Ethiopian firms'
];

// 6. Contact Info
export const CONTACT_INFO = {
  address: "123 Sabolla Corporate Tower, Addis Ababa, Ethiopia",
  email: "info@sabolla-trading.com",
  phone: "+251 11 878 0000",
};