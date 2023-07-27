import { Link } from "react-router-dom";

interface Text {
  index: string;
  text: string;
}

const NavLinkHeader = ({index, text}: Text) => {
  return (
    <Link to={`/${text}`}>
      <span>{`${index} ${text}`}</span>
    </Link>
  );
};

export default NavLinkHeader;
