// data/finishedProjectStats.ts

export type Stat = {
  label: string;
  value: number;      // numeric for count-up animation
  suffix?: string;    // "+", "%"
};

export type StatGroup = {
  title: string;      // section title (not a tab)
  subtitle?: string;
  stats: Stat[];
};

export const finishedProjectStatGroups: StatGroup[] = [
  {
    title: "Finished Projects",
    subtitle: "Real output delivered for commercial and industrial clients",
    stats: [
      { label: "Finished Projects", value: 120, suffix: "+" },
      { label: "Sites Served", value: 50, suffix: "+" },
      { label: "Years Experience", value: 8, suffix: "+" },
      { label: "Repeat Clients", value: 30, suffix: "+" },
      { label: "On-time Delivery", value: 95, suffix: "%" },
    ],
  },
];
