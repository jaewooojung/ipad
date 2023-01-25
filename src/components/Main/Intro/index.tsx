import { useContext, useMemo } from "react";
import { ScrollPositionContext } from "../../../context/scrollPosition";
import { sectionDatas } from "../../../data";
import { Section, StickyScreen } from "../../reuse";
import BeyondWords from "./BeyondWords";

function Intro() {
  const { sectionIndex, progress } = useContext(ScrollPositionContext);
  const size = sectionDatas[0].scrollBoundary[1] - sectionDatas[0].scrollBoundary[0];
  const introProgress = sectionIndex < 0 ? 0 : sectionIndex > 0 ? 1 : progress;
  return (
    <Section size={size}>
      <StickyScreen>
        <BeyondWords progress={introProgress} />
      </StickyScreen>
    </Section>
  );
}

export default Intro;
