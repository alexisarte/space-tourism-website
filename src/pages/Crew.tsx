import { useState } from "react";

import Header from "../components/header/Header";
import data from "../data.json";

type CrewType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

const Crew = () => {
  const [crew, setCrew] = useState<CrewType | undefined>(data.crew[0]);

  const handleOnclick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const targetElement = e.target as HTMLLIElement;
    if (targetElement.tagName === "LI") {
      const crewName = targetElement.innerText;
      const crew = data.crew.find((crew) => crew.name === crewName);
      setCrew(crew);
    }
  };

  return (
    <>
      <div className="bg-crew min-h-screen">
        <Header />
        <div className="flex">
          <div>
            <h5>02 Meet your crew</h5>
            <article>
              <span>{crew?.role}</span>
              <h2>{crew?.name}</h2>
              <p>{crew?.bio}</p>
            </article>
            <nav onClick={(e) => handleOnclick(e)}>
              <li>Douglas Hurley</li>
              <li>Mark Shuttleworth</li>
              <li>Victor Glover</li>
              <li>Anousheh Ansari</li>
            </nav>
          </div>
          <img
            src={crew?.images.webp}
            alt="crew"
            className="w-[177.12px] h-[222px] sm:w-[456.37px] sm:h-[572px] lg:w-[568.07px] lg:h-[712px]"
          />
        </div>
      </div>
    </>
  );
};

export default Crew;
