import clsx from "clsx";

import { sectionDatas } from "../../../data";
import { useContext } from "react";
import { ScrollPositionContext } from "./../../../context/scrollPosition";
import { SectionData } from "../../../types";

function MobileHamburgurButton() {
  return (
    <div className={clsx("sm:hidden")}>
      <button className="w-6 h-6 flex flex-col justify-between">
        <div className="w-full h-[2px] h- bg-white"></div>
        <div className="w-full h-[2px] bg-white"></div>
        <div className="w-full h-[2px] bg-white"></div>
      </button>
    </div>
  );
}

function NavLink({ data, progress }: { data: SectionData; progress: number }) {
  return (
    <li
      className={clsx(
        "relative px-5 py-1 border-1 rounded-3xl border-white text-xl tracking-widest cursor-pointer overflow-hidden",
        "hover:bg-white hover:text-black transition duration-300"
      )}
    >
      <div
        className="absolute inset-0 border-1 bg-white origin-left"
        style={{ transform: `scaleX(${progress})` }}
      ></div>
      <div className={clsx("relative mix-blend-difference", "hover:mix-blend-normal")}>{data.name}</div>
    </li>
  );
}

function Nav() {
  const scrollPosition = useContext(ScrollPositionContext);
  return (
    <nav>
      <MobileHamburgurButton />
      <div className={clsx("hidden", "sm:block")}>
        <ul className={clsx("flex gap-5")}>
          {sectionDatas.map((sd, i) => (
            <NavLink
              key={`NavLink-${i}`}
              data={sd}
              progress={scrollPosition.sectionId === sd.id ? scrollPosition.progress : 0}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
