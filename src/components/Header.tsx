import Logo from "../assets/shared/logo.svg";
import NavLinkHeader from "./NavLinkHeader";

const Header = () => {
  return (
    <div className="flex justify-between items-center pl-11 pt-11">
      <figure>
        <img src={Logo} />
      </figure>
      <hr className="relative left-10 z-10 w-[673px] h-px opacity-25 bg-white" />
      <nav className="grid grid-flow-col place-items-center min-w-[830px] h-24 bg-white bg-opacity-5 backdrop-blur-[81.55px] uppercase">
        <NavLinkHeader index={"00"} text={"home"} />
        <NavLinkHeader index={"01"} text={"destination"} />
        <NavLinkHeader index={"02"} text={"crew"} />
        <NavLinkHeader index={"03"} text={"technology"} />
      </nav>
    </div>
  );
};

export default Header;
