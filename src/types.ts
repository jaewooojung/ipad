// type Sections = "intro" | "features" | "useCases" | "contact";

export type ScrollPosition = {
  sectionId: string;
  progress: number;
};

export type SectionData = { id: string; name: string; scrollBoundary: Array<number> };
