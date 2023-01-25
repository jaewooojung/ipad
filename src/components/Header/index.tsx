import clsx from "clsx";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header
      className={clsx("fixed inset-0 bottom-auto p-5 flex justify-between items-center bg-transparent", "sm:pr-16")}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
