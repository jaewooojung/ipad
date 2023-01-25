import { useContext } from "react";
import { ScrollPositionContext } from "../../context/scrollPosition";
import Contact from "./Contact";
import Features from "./Features";
import Intro from "./Intro";
import Usecases from "./Usecases";

function Main() {
  const { sectionIndex, progress } = useContext(ScrollPositionContext);
  return (
    <main>
      <Intro introProgress={sectionIndex > 0 ? 1 : progress} />
      <Features featuresProgress={sectionIndex > 1 ? 1 : sectionIndex < 1 ? 0 : progress} />
      <Usecases useCasesProgress={sectionIndex > 2 ? 1 : sectionIndex < 2 ? 0 : progress} />
      <Contact contactProgress={sectionIndex > 3 ? 1 : sectionIndex < 3 ? 0 : progress} />
    </main>
  );
}

export default Main;
