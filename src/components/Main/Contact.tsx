import { Section } from "../reuse";
import { sectionDatas } from "../../data";

function Contact() {
  const size = sectionDatas[3].scrollBoundary[1] - sectionDatas[3].scrollBoundary[0];
  return <Section size={size}>Contact</Section>;
}

export default Contact;
