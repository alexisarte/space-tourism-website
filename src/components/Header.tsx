import { useState } from "react";

import Logo from "../assets/shared/logo.svg";
import IconHamburguer from "../assets/shared/icon-hamburger.svg";
import IconClose from "../assets/shared/icon-close.svg";

import NavLinkHeader from "./NavLinkHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center pl-11 pt-11">
      <img src={Logo} />
      <hr className="relative left-10 z-10 w-[673px] h-px opacity-25 bg-white hidden lg:block" />
      <button className="relative z-20 sm:hidden pr-11" onClick={toogleMenu}>
        <img src={isOpen ? IconClose : IconHamburguer} />
      </button>
      <nav
        className={
          `sm:static sm:z-0 sm:flex sm:flex-row sm:justify-evenly sm:min-w-[450px] lg:min-w-[830px] sm:h-24 bg-white bg-opacity-5 backdrop-blur-[81.55px] tracking-[2.70px] uppercase 
          sm:pt-0
          ${isOpen
            ? 'absolute top-0 right-0 z-10 flex flex-col gap-9 h-full w-3/4 pt-36 pl-8'
            : 'hidden'
          } `
        }
      >
        <NavLinkHeader index={"00"} text={"home"} path={""} />
        <NavLinkHeader index={"01"} text={"destination"} path={"destination"} />
        <NavLinkHeader index={"02"} text={"crew"} path={"crew"} />
        <NavLinkHeader index={"03"} text={"technology"} path={"technology"} />
      </nav>
    </header>
  );
};

export default Header;
