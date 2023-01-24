import { useEffect, useRef, useState, useContext } from "react";
import Components from "./components";
import { sectionDatas } from "./data";
import IPad3D from "./IPad3D";
import { ScrollPosition } from "./types";
import { ScrollPositionProvider, ScrollPositionAPIContext } from "./context/scrollPosition";

function App() {
  const scrollAPI = useContext(ScrollPositionAPIContext);
  const root = document.getElementById("root") as HTMLDivElement;

  useEffect(() => {
    const onScroll = (event: Event) => {
      const target = event.target as HTMLDivElement;
      const scrollTop = target.scrollTop;
      const currentSection = sectionDatas.find((sd) => scrollTop < sd.scrollBoundary[1] * root.clientHeight)!;
      /**
       * lerp 0~1
       */
      const progress =
        (scrollTop - currentSection.scrollBoundary[0] * root.clientHeight) /
        ((currentSection.scrollBoundary[1] - currentSection.scrollBoundary[0]) * root.clientHeight);

      scrollAPI.d_setScrollPosition({ sectionId: currentSection.id, progress });
    };
    root.addEventListener("scroll", onScroll);
    () => {
      root.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <IPad3D />
      <Components />
    </>
  );
}

export default App;
