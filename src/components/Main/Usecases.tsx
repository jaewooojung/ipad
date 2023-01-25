import { Section } from "../reuse";
import { sectionDatas } from "../../data";

function Usecases() {
  const size = sectionDatas[2].scrollBoundary[1] - sectionDatas[2].scrollBoundary[0];
  return <Section size={size}>UseCases</Section>;
}

export default Usecases;
