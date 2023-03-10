// type Sections = "intro" | "features" | "useCases" | "contact";

export type ScrollPosition = {
  sectionIndex: number;
  progress: number;
};

export type SectionData = { id: string; name: string; scrollBoundary: Array<number> };

export type Sequence = Array<{ name: string; interval: Array<number> }>;

export type Coordinate2D = {
  x: number;
  y: number;
};
