import { Section } from "../reuse";
import { sectionDatas } from "../../data";

const size = sectionDatas[2].scrollBoundary[1] - sectionDatas[2].scrollBoundary[0];

function Usecases({ useCasesProgress }: { useCasesProgress: number }) {
  return <Section size={size}>UseCases</Section>;
}

export default Usecases;
