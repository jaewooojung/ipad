import { Section } from "../reuse";
import { sectionDatas } from "../../data";

const size = sectionDatas[1].scrollBoundary[1] - sectionDatas[1].scrollBoundary[0];

function Features({ featuresProgress }: { featuresProgress: number }) {
  return <Section size={size}>Features</Section>;
}

export default Features;
