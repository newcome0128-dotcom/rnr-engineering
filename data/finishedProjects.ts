export type FinishedProjectStat = {
  id: string;
  label: string;
  value: number;
};

export const finishedProjectStats: FinishedProjectStat[] = [
  { id: "total", label: "Finished Projects", value: 260 },
  { id: "civil", label: "Civil Works", value: 59 },
  { id: "electrical", label: "Electrical & FDAS", value: 28 },
  { id: "mechanical", label: "Mechanical / HVAC", value: 95 },
  { id: "supplies", label: "Supply Deliveries", value: 78 },
];
