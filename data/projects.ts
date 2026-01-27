export type ProjectCategory = "construction" | "supplies";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[]; // files inside /public
};

export const projects: Project[] = [
  {
    id: "residential-01",
    title: "Residential Projects",
    description:
      "Residential construction and renovation projects delivered with quality workmanship, efficient project management, and long-lasting structural performance.",
    category: "construction",
    images: [
      "/images/projects/RP1.png",
      "/images/projects/RP2.png",
      "/images/projects/RP3.png",
      "/images/projects/RP4.png",
      "/images/projects/RP5.png",
      "/images/projects/RP6.png",
    ],
  },
  {
    id: "civilworks-01",
    title: "Civil Works",
    description:
      "Professional civil works services delivering durable, well-engineered structures with quality workmanship and reliable execution.",
    category: "construction",
    images: ["/images/projects/CV1.png", "/images/projects/CV2.png"],
  },
  {
    id: "electricalworks-01",
    title: "Electrical Works",
    description:
      "Professional electrical works including installation, testing, maintenance, and power distribution systems delivered with strict safety compliance and industry standards.",
    category: "construction",
    images: [
      "/images/projects/EW1.png",
      "/images/projects/EW2.png",
      "/images/projects/EW3.png",
      "/images/projects/EW4.png",
    ],
  },
  {
    id: "fdas-01",
    title: "FDAS",
    description:
      "Design and installation of Fire Detection and Alarm System for early fire detection, alarm notification, and life safety compliance.",
    category: "construction",
    images: ["/images/projects/FDAS1.png"],
  },
  {
    id: "automation-01",
    title: "Automation",
    description:
      "Industrial and commercial automation solutions designed to improve operational efficiency, system accuracy, and reliable process control using modern automation technologies.",
    category: "construction",
    images: ["/images/projects/A1.png", "/images/projects/A2.png"],
  },
  {
    id: "mechanicalworks-01",
    title: "Mechanical Works",
    description:
      "Comprehensive mechanical works covering installation, repair, and preventive maintenance of mechanical systems for industrial and commercial facilities.",
    category: "construction",
    images: [
      "/images/projects/MW1.png",
      "/images/projects/MW2.png",
      "/images/projects/MW3.png",
      "/images/projects/MW4.png",
    ],
  },
  {
    id: "fabrications-01",
    title: "Fabrications",
    description:
      "Custom metal fabrication and welding services engineered to meet structural requirements, technical specifications, and project-specific design standards.",
    category: "construction",
    images: ["/images/projects/FAB1.png", "/images/projects/FAB2.png"],
  },
  {
    id: "telecommunications-01",
    title: "Telecommunications",
    description:
      "Telecommunication services providing structured cabling, network infrastructure, and communication systems to support reliable voice and data connectivity.",
    category: "construction",
    images: ["/images/projects/TEL1.png", "/images/projects/TEL2.png"],
  },
  {
    id: "airconditions-01",
    title: "Airconditioning Services",
    description:
      "Expert installation and maintenance of air-conditioning systems for homes, offices, and industrial spaces.",
    category: "construction",
    images: [
      "/images/projects/AS1.png",
      "/images/projects/AS2.png",
      "/images/projects/AS3.png",
      "/images/projects/AS4.png",
    ],
  },
  {
    id: "supplies-01",
    title: "Supplies",
    description:
      "Supply of construction, electrical, mechanical, and engineering materials sourced from trusted manufacturers to support project requirements.",
    category: "supplies",
    images: [
      "/images/projects/1.png",
      "/images/projects/2.png",
      "/images/projects/3.png",
      "/images/projects/4.png",
      "/images/projects/5.png",
      "/images/projects/6.png",
      "/images/projects/7.png",
      "/images/projects/8.png",
      "/images/projects/SUP1.png",
      "/images/projects/SUP2.png",
      "/images/projects/SUP3.png",
      "/images/projects/SUP4.png",
      "/images/projects/SUP5.png",
      "/images/projects/SUP6.png",
      "/images/projects/SUP7.png",
      "/images/projects/SUP8.png",
      "/images/projects/SUP9.png",
      "/images/projects/SUP10.png",
      "/images/projects/SUP11.png",
    ],
  },
];
