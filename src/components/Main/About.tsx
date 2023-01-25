import { Section } from "../reuse";
import { sectionDatas } from "../../data";

function About() {
  const size = sectionDatas[4].scrollBoundary[1] - sectionDatas[4].scrollBoundary[0];
  return <Section size={size}>About</Section>;
}

export default About;
