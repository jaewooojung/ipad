import clsx from "clsx";

/**
 * 0.2
 */
function BeyondWords({ progress }: { progress: number }) {
  let scale = (-1 / Math.pow(0.5, 2)) * progress + 1;
  scale = Math.max(scale, 0);
  const opacity = (-1 / 0.1) * progress + 1;
  return (
    <div className="relative w-full h-full flex justify-center items-center">
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
    </div>
  );
}

export default BeyondWords;
