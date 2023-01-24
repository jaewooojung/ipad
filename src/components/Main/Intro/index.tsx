import { useContext } from "react";
import { ScrollPositionContext } from "../../../context/scrollPosition";
import { sectionDatas } from "../../../data";
import { Section, StickyScreen } from "../../reuse";
import BeyondWords from "./BeyondWords";

function Intro() {
  const { sectionId, progress } = useContext(ScrollPositionContext);
  const size = sectionDatas[0].scrollBoundary[1] - sectionDatas[0].scrollBoundary[0];
  return (
    <Section size={size}>
      <StickyScreen>
        <BeyondWords progress={progress} />
      </StickyScreen>
    </Section>
  );
}

export default Intro;
