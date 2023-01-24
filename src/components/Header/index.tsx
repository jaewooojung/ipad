import clsx from "clsx";
import { ScrollPosition } from "../../types";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header
      className={clsx("fixed inset-0 bottom-auto flex justify-between items-center bg-transparent p-5", "sm:p-7")}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
