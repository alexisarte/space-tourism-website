import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface Text {
  index: string;
  text: string;
}

const NavLinkHeader = ({ index, text }: Text) => {

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === `/${text}`) {
      setIsActive(true);
    }
  }, [location.pathname, text]);

  return (
    <Link to={`/${text}`} className="group relative py-9" >
      <p>
        <span className="font-bold inline-block sm:hidden lg:inline-block">{`${index}`}</span>
        {` ${text}`}
      </p>
      <p
        className={`absolute bottom-0 block h-1 w-full ${isActive ? 'bg-white'
          : 'scale-0 transition-all duration-700 group-hover:scale-100 group-hover:bg-white'}`
        }
      >
      </p>
    </Link>
  );
};

export default NavLinkHeader;
