import { useState } from "react";

import Header from "../components/Header";
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
      <Header />
      <div>
        <div>
          <h5>02 meet your crew</h5>
          <img src={crew?.images.png} alt="crew" />
        </div>
        <div>
          <span>{crew?.role}</span>
          <h2>{crew?.name}</h2>
          <p>{crew?.bio}</p>
        </div>
        <nav onClick={(e) => handleOnclick(e)}>
          <li>Douglas Hurley</li>
          <li>Mark Shuttleworth</li>
          <li>Victor Glover</li>
          <li>Anousheh Ansari</li>
        </nav>
      </div>
    </>
  );
};

export default Crew;
