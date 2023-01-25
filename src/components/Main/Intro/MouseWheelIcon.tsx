import { Sequence } from "../../../types";
import { linearEquation } from "../../../utils/math";

function MouseWheelIcon({ introProgress, sequence }: { introProgress: number; sequence: Sequence }) {
  const [start, end] = sequence[0].interval;
  const opacity = linearEquation(introProgress, { x: start, y: 1 }, { x: end, y: 0 });
  return (
    <div
      className="absolute bottom-10 text-center"
      style={{
        opacity: opacity,
      }}
    >
      <div className="w-5 h-9 flex justify-center items-center border-1 rounded-xl border-white">
        <div className="w-1 h-3 rounded-xl bg-white animate-flowdown"></div>
      </div>
      <div className="rotate-180">^</div>
    </div>
  );
}

export default MouseWheelIcon;
