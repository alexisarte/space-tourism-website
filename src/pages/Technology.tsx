import { useState } from "react";

import Header from "../components/Header";

import data from "../data.json";

type TechnologyType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

const Technology = () => {
  const [technology, setTechnology] = useState<TechnologyType | undefined>(
    data.technology[0]
  );

  const handleOnclick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const targetElement = e.target as HTMLLIElement;
    if (targetElement.tagName === "LI") {
      const technologyName = targetElement.innerText;
      const technology = data.technology.find(
        (technology) => technology.name === technologyName
      );
      setTechnology(technology);
    }
  };

  return (
    <>
      <div className="bg-[url(/src/assets/technology/background-technology-desktop.jpg)] min-h-screen">
        <Header />
        <div>
          <h5>
            <span>03</span>space launch 101
          </h5>
          <nav onClick={(e) => handleOnclick(e)}>
            <li>Launch vehicle</li>
            <li>Spaceport</li>
            <li>Space capsule</li>
          </nav>
          <div>
            <span>the terminology...</span>
            <h2>{technology?.name}</h2>
            <p>{technology?.description}</p>
          </div>
        </div>
        <img src={technology?.images.landscape} />
      </div>
    </>
  );
};

export default Technology;
