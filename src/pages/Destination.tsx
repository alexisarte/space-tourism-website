import Header from "../components/Header";

import { useState } from "react";

import data from "../data.json";

type DestinationType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};


const Destination = () => {

  const [destination, setDestination] = useState<DestinationType | undefined>(data.destinations[0]);

  const handleOnclick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const targetElement = e.target as HTMLLIElement;
    if (targetElement.tagName === 'LI') {
      const destinationName = targetElement.innerText;
      const destination = data.destinations.find((destination) => destination.name === destinationName);
      setDestination(destination);
    }
  };
  

  return (
    <>
      <Header />
      <div>
        <div>
          <h5>01 pick your destination</h5>
          <img src={destination?.images.png} alt="destination" />
        </div>
        <div>
          <nav onClick={(e) => handleOnclick(e)}>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </nav>
          <h2>{destination?.name}</h2>
          <p>
            {destination?.description}
          </p>
          <div>divider</div>
          <div>
            <div>
              <span>AVG. DISTANCE</span>
              <h3>{destination?.distance}</h3>
            </div>
            <div>
              <span>Est. travel time</span>
              <h3>{destination?.travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
