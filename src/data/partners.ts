import merajIcon from "../assets/meraj.png";
import asiIcon from '../assets/asi.png';
import rosenbauerIcon from "../assets/rosenbauer.png";
import indraIcon from "../assets/indra.png";
import motorIcon from "../assets/motor.png";
import unitIcon from "../assets/unit.png";
import jingshenIcon from "../assets/jingshen.png";
import resqtec from "../assets/resqtec.png"


export type Partner = {
  name: string;
  description: string;
  website?: string;
  icon?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "ASI (Europe) Ltd.",
    description:
      "ASI (Europe) Ltd. is a trusted global supplier of high-quality electronic components for commercial and military applications. With decades of experience and deep market expertise, ASI is recognized worldwide for delivering reliable, hard-to-source electronic solutions.",
    website: "https://www.asieurope.net/",
    icon: asiIcon,
  },
  {
    name: "Meraj International FZC",
    description:
      "Meraj International FZC is a leading manufacturer of custom-built special application and specialty vehicles across the GCC and MENA region. The company delivers innovative municipal, rescue, firefighting, jetting, vacuum, and industrial vehicles.",
    website: "https://www.merajinternational.com/",
    icon: merajIcon,
  },
  {
    name: "Indra Avitech GmbH",
    description:
      "Indra Avitech is a global leader in Aeronautical Information Systems, supporting safe aviation operations in over 60 countries. It serves as the Indra Group’s Center of Excellence for AIM, MHS, AIS, SWIM, and MET solutions.",
    website:
      "https://www.indracompany.com/en/aeronautical-information-solutions",
    icon: indraIcon,
  },
  {
    name: "Rosenbauer",
    description:
      "Rosenbauer is the world’s leading manufacturer of firefighting and disaster-response equipment. With over 150 years of innovation, the company provides fire engines, aerial platforms, rescue systems, and digital solutions worldwide.",
    website: "https://www.rosenbauer.com/en",
    icon: rosenbauerIcon,
  },
  {
    name: "Moto-Truck GmbH",
    description:
      "Moto-Truck GmbH is a specialized manufacturer of emergency and municipal vehicles, known for durable construction, modern engineering, and customer-focused solutions.",
    website: "https://www.mototruck.pl/en/",
    icon: motorIcon,
  },
  {
    name: "Leviathan Corporation (OTRUSA)",
    description:
      "OTRUSA is a global wholesale distributor of OTR and industrial tires serving mining, construction, logistics, and agriculture. With over 20 years of expertise, it delivers tires, wheels, TPMS, and performance-enhancing sealants worldwide.",
    website: "https://www.leviathancorp.com/",
    icon: "🛞",
  },
  {
    name: "Unit Export Ltd.",
    description:
      "Unit Export Ltd. brings more than 45 years of experience delivering international supply contracts funded by organizations such as the World Bank, European Commission, and UN agencies, specializing in complex global procurement projects.",
    website: "https://www.unitexport.com/",
    icon: unitIcon,
  },
  {
    name: "Fire Safety Devices Pvt. Ltd.",
    description:
      "Fire Safety Devices Pvt. Ltd. is an ISO-certified manufacturer providing premium firefighting products since 1995, including foam concentrates, extinguishers, dry powders, and advanced fire protection systems.",
    website: "https://www.firesafetydevices.co.in/",
    icon: "🧯",
  },
  {
    name: "RESQTEC",
    description:
      "RESQTEC is a global innovator in rescue and aircraft recovery equipment with over 50 years of experience, delivering advanced, mission-critical solutions for emergency and recovery teams worldwide.",
    website: "https://rescue.resqtec.com/en_gb/",
    icon: resqtec,
  },
  {
    name: "Jingshen International (HK) Ltd.",
    description:
      "Jingshen International is a Hong Kong–based trading company specializing in global transit, import, and export operations across medical equipment, electronics, industrial materials, and metals.",
    website: "https://jshkgroup.com/?lang=en",
    icon: jingshenIcon,
  },
  {
    name: "Yiwu Foreal Import & Export Co. Ltd.",
    description:
      "Yiwu Foreal Import & Export Co. Ltd. provides reliable global sourcing, import, and export services, supporting international partners with efficient trade execution and transparent operations.",
    icon: "📊",
  },
];