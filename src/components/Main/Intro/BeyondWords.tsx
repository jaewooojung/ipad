import clsx from "clsx";
import { memo } from "react";
import { sectionDatas } from "../../../data";
import { Sequence } from "../../../types";
import { linearEquation, quadraticEquation } from "../../../utils/math";

function BeyondWords({ introProgress, sequence }: { introProgress: number; sequence: Sequence }) {
  // if (introProgress === -1) {
  //   return null;
  // }
  console.log("BeyondWords");
  const [start, end] = sequence[0].interval;
  const scale = quadraticEquation(introProgress, { x: start, y: 1 }, { x: end, y: 0 });
  const opacity = linearEquation(introProgress, { x: start, y: 1 }, { x: end, y: 0 });
  return (
    <div
      className={clsx("text-center text-6xl text-9x text-10", "sm:text-10xl")}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className="mb-10">
        <div className="bg-clip-text bg-gradient-to-b from-white via-white to-black text-transparent">Beyond</div>
      </div>
      <div>Words</div>
    </div>
  );
}

export default memo(BeyondWords);
