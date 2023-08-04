import { Link } from "react-router-dom";

interface Text {
  index: string;
  text: string;
}

const NavLinkHeader = ({ index, text }: Text) => {
  return (
    <Link to={`/${text}`} className="group relative py-9">
      <span>
        <span className="font-bold inline-block sm:hidden lg:inline-block">{`${index}`}</span>
        {` ${text}`}
      </span>
      <span className="absolute bottom-0 block h-1 w-full scale-0 transition-all duration-700 group-hover:scale-100 group-hover:bg-white"></span>
    </Link>
  );
};

export default NavLinkHeader;
