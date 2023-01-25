import { MutableRefObject, useContext, useEffect } from "react";
import { Group } from "three";
import { ScrollPositionAPIContext } from "../../context/scrollPosition";
import { sectionDatas } from "../../data";

function useScrollControl(iPadmodelRef: MutableRefObject<Group | undefined>) {
  const scrollAPI = useContext(ScrollPositionAPIContext);

  useEffect(() => {
    const root = document.getElementById("root") as HTMLDivElement;
    const onScroll = (event: Event) => {
      const target = event.target as HTMLDivElement;
      const scrollTop = target.scrollTop;
      const currentSectionIndex = sectionDatas.findIndex((sd) => scrollTop < sd.scrollBoundary[1] * root.clientHeight)!;
      const currentSection = sectionDatas[currentSectionIndex];
      /**
       * lerp 0~1
       */
      const progress =
        (scrollTop - currentSection.scrollBoundary[0] * root.clientHeight) /
        ((currentSection.scrollBoundary[1] - currentSection.scrollBoundary[0]) * root.clientHeight);

      const scrollPosition = { sectionIndex: currentSectionIndex, progress };

      scrollAPI.d_setScrollPosition(scrollPosition);
      // const ipadModel = iPadmodelRef.current as Group;
      // ipadModel.position.x += 1;
    };
    root.addEventListener("scroll", onScroll);
    () => {
      root.removeEventListener("scroll", onScroll);
    };
  }, []);
}

export default useScrollControl;
