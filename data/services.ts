import type { IconCard } from "@/components/IconCardGrid";

export type ServiceGroup = {
  id: string;
  title: string;
  subtitle: string;
  items: IconCard[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "civil",
    title: "Civil Works",
    subtitle:
      "Planning, design, construction, and renovation for commercial and residential projects.",
    items: [
      {
        id: "design-build",
        title: "Design & Build",
        description: "End-to-end project delivery from planning to execution.",
        image: "/images/cards/services/design-build.webp",
      },
      {
        id: "architectural-design",
        title: "Architectural Design",
        description: "Professional drafting and design for functional builds.",
        image: "/images/cards/services/architectural-design.webp",
      },
      {
        id: "building-construction",
        title: "Building Construction",
        description: "Structural and finishing works with quality execution.",
        image: "/images/cards/services/building-construction.webp",
      },
      {
        id: "commercial",
        title: "Commercial Projects",
        description: "Office and industrial build solutions for businesses.",
        image: "/images/cards/services/commercial.webp",
      },
      {
        id: "residential",
        title: "Residential Projects",
        description: "Modern home builds with reliable workmanship.",
        image: "/images/cards/services/residential.webp",
      },
      {
        id: "renovation",
        title: "Renovation & Improvement",
        description: "Upgrades, repairs, and refurbishments for better performance.",
        image: "/images/cards/services/renovation.webp",
      },
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Works",
    subtitle: "HVAC, pumps, fabrication, and preventive maintenance support.",
    items: [
      {
        id: "airconditioning",
        title: "Air Conditioning",
        description: "Installation, servicing, and maintenance for HVAC systems.",
        image: "/images/cards/services/airconditioning.webp",
      },
      {
        id: "ahu-pms",
        title: "AHU Preventive Maintenance",
        description: "PMS support to keep systems efficient and safe.",
        image: "/images/cards/services/ahu-pms.webp",
      },
      {
        id: "motor-pump",
        title: "Motor & Pump",
        description: "Supply and support for pumping and motor-driven systems.",
        image: "/images/cards/services/motor-pump.webp",
      },
      {
        id: "fabrication-welding",
        title: "Fabrication & Welding",
        description: "Precision metal works for structural and industrial needs.",
        image: "/images/cards/services/fabrication-welding.webp",
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Works",
    subtitle: "Power, controls, safety systems, and structured cabling solutions.",
    items: [
      {
        id: "fdas-motor-control",
        title: "FDAS & Motor Control",
        description: "Fire alarm systems and motor control solutions for safety.",
        image: "/images/cards/services/fdas-motor-control.webp",
      },
      {
        id: "cctv",
        title: "CCTV Systems",
        description: "Professional surveillance solutions for security monitoring.",
        image: "/images/cards/services/cctv.webp",
      },
      {
        id: "solar",
        title: "Solar Power",
        description: "Solar solutions for efficient energy generation and savings.",
        image: "/images/cards/services/solar.webp",
      },
      {
        id: "instrumentation-control",
        title: "Instrumentation & Control",
        description: "Automation monitoring and control for industrial operations.",
        image: "/images/cards/services/instrumentation-control.webp",
      },
      {
        id: "telecommunications",
        title: "Telecommunications",
        description: "Structured cabling and network infrastructure support.",
        image: "/images/cards/services/telecommunications.webp",
      },
    ],
  },
];
