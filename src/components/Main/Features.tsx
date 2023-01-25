import { Section } from "../reuse";
import { sectionDatas } from "../../data";

function Features() {
  const size = sectionDatas[1].scrollBoundary[1] - sectionDatas[1].scrollBoundary[0];
  return <Section size={size}>Features</Section>;
}

export default Features;
