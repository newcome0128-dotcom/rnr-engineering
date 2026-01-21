export type ProjectCategory = "construction" | "supplies";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[]; // paths from /public
};

export const projects: Project[] = [
  {
    id: "telecom-01",
    title: "Telecommunications",
    description:
      "Structured cabling, network infrastructure, and communication systems for reliable voice and data connectivity.",
    category: "construction",
    images: [
      "/images/projects/telecom-1.jpg",
      "/images/projects/telecom-2.jpg",
    ],
  },
  {
    id: "solar-01",
    title: "Solar Panel Installation",
    description:
      "Design, installation, and commissioning of efficient solar PV systems for commercial and industrial applications.",
    category: "construction",
    images: [
      "/images/projects/solar-1.jpg",
      "/images/projects/solar-2.jpg",
      "/images/projects/solar-3.jpg",
    ],
  },
  {
    id: "supplies-01",
    title: "Supplies",
    description:
      "Supply of construction, electrical, mechanical, and engineering materials sourced from trusted manufacturers.",
    category: "supplies",
    images: [
      "/images/projects/supply-1.jpg",
      "/images/projects/supply-2.jpg",
      "/images/projects/supply-3.jpg",
    ],
  },
];
