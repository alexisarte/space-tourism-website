import Logo from "../assets/shared/logo.svg";
import NavLinkHeader from "./NavLinkHeader";

const Header = () => {
  return (
    <div>
      <img src={Logo} />
      <nav>
        <NavLinkHeader index={'00'} text={'home'}  />
        <NavLinkHeader index={'01'} text={'destination'}  />
        <NavLinkHeader index={'02'} text={'crew'}  />
        <NavLinkHeader index={'03'} text={'technology'}  />
      </nav>
    </div>
  );
};

export default Header;
