import assets from "../assets/asset";

export type Partner = {
  name: string;
  description: string;
  website?: string;
  icon?: string;
};

export const LOCAL_PARTNERS: Partner[] = [
  {
    name: "Addis Ababa Fire & Disaster Risk Management Commission",
    description:
      "The Addis Ababa Fire & Disaster Risk Management Commission is responsible for fire prevention, emergency response, disaster preparedness, and risk mitigation within Addis Ababa.",
    website: "https://www.addisfire.gov.et",
    icon: "🛟",
  },
  {
    name: "Ethiopian Disaster Risk Management Commission",
    description:
      "The Ethiopian Disaster Risk Management Commission leads national disaster prevention, preparedness, response, and recovery efforts across Ethiopia.",
    icon: '',
  },
  {
    name: "Ethiopian Shipping & Logistics Services Enterprise",
    description:
      "A national enterprise providing maritime transport, logistics, freight forwarding, and multimodal logistics services to support Ethiopia’s international trade.",
    website: "https://www.eslse.et",
    icon: assets.ethiopianShipping,
  },
  {
    name: "Ethiopian Civil Aviation Authority",
    description:
      "The Ethiopian Civil Aviation Authority regulates and oversees civil aviation safety, security, and compliance in Ethiopia.",
    website: "https://www.linkedin.com/company/ethiopian-civil-aviation-authority/?originalSubdomain=et",
    icon: assets.civilAvaition,
  },
  {
    name: "Ethiopian Petroleum Supply Enterprise",
    description:
      "Responsible for the procurement, storage, distribution, and supply of petroleum products across Ethiopia.",
    website: "https://share.google/U2UXRj2rnkcIHfFah",
    icon: assets.ethiopianPetroleum,
  },
  {
    name: "Chemical Industry Corporation",
    description:
      "A major state-owned corporation overseeing chemical manufacturing plants and industrial chemical production in Ethiopia.",
    website: "https://www.cic.gov.et",
    icon: assets.chemucalIndustry,
  },
  {
    name: "Mugher Cement Factory",
    description:
      "One of the largest cement producers in Ethiopia, supplying high-quality cement for infrastructure and construction projects.",
    website: "http://www.mughercement.com.et",
    icon: assets.mugher,
  },
  {
    name: "Oromia Coffee Farmers Cooperative Union",
    description:
      "A cooperative union representing coffee farmers in Oromia, promoting sustainable coffee production and global export partnerships.",
    website: "https://www.oromiacoffeeunion.com",
    icon: assets.oromiaCoffee,
  },
  {
    name: "Ethiopian Airport Group",
    description:
      "Manages and operates airports across Ethiopia, supporting aviation infrastructure, safety, and passenger services.",
    website: "https://corporate.ethiopianairlines.com/ethiopian-group",
    icon: assets.airlineIcon,
  },
  {
    name: "Ethiopian Trading Business Corporation",
    description:
      "A state-owned enterprise engaged in strategic import, export, and domestic trade of essential commodities.",
    website: "https://etbc.com.et",
    icon: assets.ethiopianTrading,
  },
  {
    name: "Ethiopian Toll Roads Corporation",
    description:
      "Responsible for the development, operation, and management of toll road infrastructure in Ethiopia.",
    website: "https://etre.com.et",
    icon: assets.unit,
  },
  {
    name: "Ethiopian Sugar Industry Group",
    description:
      "A public enterprise overseeing sugar production, agro-industrial development, and sugar manufacturing plants nationwide.",
    website: "https://etsugar.com/esig/",
    icon: assets.suger,
  },
  {
    name: "Ministry of Agriculture – Ethiopia",
    description:
      "The federal ministry responsible for agricultural policy, food security, rural development, and sustainable farming initiatives.",
    website: "http://www.moa.gov.et/",
    icon: assets.ministryAgree,
  },
  {
    name: "Addis Ababa Water & Sewerage Authority",
    description:
      "Provides potable water supply and wastewater management services for Addis Ababa.",
    website: "https://aawsa.gov.et",
    icon: assets.waterSewege,
  },
];