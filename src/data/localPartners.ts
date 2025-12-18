// src/data/localPartners.ts

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
    icon: "🚒",
  },
  {
    name: "Ethiopian Disaster Risk Management Commission",
    description:
      "The Ethiopian Disaster Risk Management Commission leads national disaster prevention, preparedness, response, and recovery efforts across Ethiopia.",
    icon: "🛟",
  },
  {
    name: "Ethiopian Shipping & Logistics Services Enterprise",
    description:
      "A national enterprise providing maritime transport, logistics, freight forwarding, and multimodal logistics services to support Ethiopia’s international trade.",
    icon: "🚢",
  },
  {
    name: "Ethiopian Civil Aviation Authority",
    description:
      "The Ethiopian Civil Aviation Authority regulates and oversees civil aviation safety, security, and compliance in Ethiopia.",
    icon: "✈️",
  },
  {
    name: "Ethiopian Petroleum Supply Enterprise",
    description:
      "Responsible for the procurement, storage, distribution, and supply of petroleum products across Ethiopia.",
    icon: "⛽",
  },
  {
    name: "Chemical Industry Corporation – Mugher Cement Factory",
    description:
      "A major industrial manufacturer producing cement and chemical products that support Ethiopia’s construction and infrastructure sectors.",
    icon: "🏭",
  },
  {
    name: "Oromia Coffee Farmers Cooperative Union",
    description:
      "A cooperative union representing coffee farmers in Oromia, promoting sustainable coffee production and global export partnerships.",
    icon: "☕",
  },
  {
    name: "Ethiopian Airports Group",
    description:
      "Manages and operates airports across Ethiopia, supporting aviation infrastructure, safety, and passenger services.",
    icon: "🛬",
  },
  {
    name: "Ethiopian Trading Business Corporation",
    description:
      "A state-owned enterprise engaged in strategic import, export, and domestic trade of essential commodities.",
    icon: "📦",
  },
  {
    name: "Ethiopian Toll Roads Corporation",
    description:
      "Responsible for the development, operation, and management of toll road infrastructure in Ethiopia.",
    icon: "🛣️",
  },
  {
    name: "Ethiopian Sugar Industry Group",
    description:
      "A public enterprise overseeing sugar production, agro-industrial development, and sugar manufacturing plants nationwide.",
    icon: "🍬",
  },
  {
    name: "Ministry of Agriculture – Ethiopia",
    description:
      "The federal ministry responsible for agricultural policy, food security, rural development, and sustainable farming initiatives.",
    icon: "🌾",
  },
  {
    name: "Addis Ababa Water & Sewerage Authority",
    description:
      "Provides potable water supply and wastewater management services for Addis Ababa.",
    icon: "🚰",
  },
];