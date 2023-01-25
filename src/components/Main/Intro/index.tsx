import { memo, useContext, useMemo } from "react";
import { ScrollPositionContext } from "../../../context/scrollPosition";
import { sectionDatas, sequences } from "../../../data";
import { Sequence } from "../../../types";
import { isComponentUpdate } from "../../../utils/snapshot";
import { Section, StickyScreen } from "../../reuse";
import BeyondWords from "./BeyondWords";
import MouseWheelIcon from "./MouseWheelIcon";

const introSize = sectionDatas[0].scrollBoundary[1] - sectionDatas[0].scrollBoundary[0];
const introsequence = sequences.two.intro;

function Intro({ introProgress }: { introProgress: number }) {
  return (
    <Section size={introSize}>
      <StickyScreen>
        <div className="relative w-full h-full flex justify-center items-center">
          <BeyondWords
            introProgress={isComponentUpdate("beyondWords", introProgress, introsequence.beyondWords)}
            sequence={introsequence.beyondWords}
          />
          <MouseWheelIcon introProgress={introProgress} sequence={introsequence.mouseWheelIcom} />
        </div>
      </StickyScreen>
    </Section>
  );
}

export default memo(Intro);
