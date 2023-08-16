import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface Text {
  index: string;
  text: string;
  path: string;
}

const NavLinkHeader = ({ index, text, path }: Text) => {

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === `/${path}`) {
      setIsActive(true);
    }
  }, [location.pathname, path]);

  return (
    <Link to={`/${path}`} className="group relative sm:py-9 py-1 max-w-fit" >
      <p>
        <span className="font-bold inline-block sm:hidden lg:inline-block">{`${index}`}</span>
        {` ${text}`}
      </p>
      <span
        className={`absolute bottom-0 block h-1 w-full ${isActive ? 'bg-white'
          : 'scale-0 transition-all duration-700 group-hover:scale-100 group-hover:bg-white group-hover:opacity-50'}`
        }
      >
      </span>
    </Link>
  );
};

export default NavLinkHeader;
