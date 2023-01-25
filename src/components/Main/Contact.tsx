import { Section } from "../reuse";
import { sectionDatas } from "../../data";

const size = sectionDatas[3].scrollBoundary[1] - sectionDatas[3].scrollBoundary[0];

function Contact({ contactProgress }: { contactProgress: number }) {
  return <Section size={size}>Contact</Section>;
}

export default Contact;
