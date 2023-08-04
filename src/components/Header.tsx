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
      <button className="sm:hidden" onClick={toogleMenu}>
        <img src={isOpen ? IconClose : IconHamburguer} className="relative z-20" />
      </button>
      <nav
        className={
          `sm:flex sm:flex-row sm:justify-evenly sm:min-w-[450px] lg:min-w-[830px] sm:h-24 bg-white bg-opacity-5 backdrop-blur-[81.55px] tracking-[2.70px] uppercase 
          ${isOpen
            ? 'absolute top-0 right-0 z-10 flex flex-col items-center h-full w-1/2'
            : 'hidden'
          } `
        }
      >
        <NavLinkHeader index={"00"} text={"home"} />
        <NavLinkHeader index={"01"} text={"destination"} />
        <NavLinkHeader index={"02"} text={"crew"} />
        <NavLinkHeader index={"03"} text={"technology"} />
      </nav>
    </header>
  );
};

export default Header;
