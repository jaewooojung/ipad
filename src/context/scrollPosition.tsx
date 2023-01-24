import { createContext, useCallback, useMemo, useState } from "react";

import { ScrollPosition } from "../types";
import { sectionDatas } from "../data";

function noProviderHandler(contextName: string) {
  console.error(`Cannot found ${contextName} Provider`);
}

const initialState = {
  scrollPosition: {
    sectionId: sectionDatas[0].id,
    progress: 0,
  },
  d_setScrollPosition: () => noProviderHandler("ScrollPositionAPIContext - d_setScrollPosition"),
};

export const ScrollPositionContext = createContext<ScrollPosition>(initialState.scrollPosition);
ScrollPositionContext.displayName = "ScrollPositionContext";

export const ScrollPositionAPIContext = createContext<{
  d_setScrollPosition: (sp: ScrollPosition) => void;
}>({
  d_setScrollPosition: initialState.d_setScrollPosition,
});
ScrollPositionAPIContext.displayName = "ScrollPositionAPIContext";

// provider
export const ScrollPositionProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>(initialState.scrollPosition);

  const d_setScrollPosition = useCallback((sp: ScrollPosition) => {
    setScrollPosition(sp);
  }, []);

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      <ScrollPositionAPIContext.Provider value={{ d_setScrollPosition }}>{children}</ScrollPositionAPIContext.Provider>
    </ScrollPositionContext.Provider>
  );
};
