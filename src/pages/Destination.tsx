import Header from "../components/header/Header";

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

const destinations = ['Moon', 'Mars', 'Europa', 'Titan'];


const Destination = () => {

  const [destination, setDestination] = useState<DestinationType | undefined>(data.destinations[0]);

  const handleOnclick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const targetElement = e.target as HTMLLIElement;
    if (targetElement.tagName === 'LI') {
      let destinationName = targetElement.innerText;
      const toCapitalize = (text: string) => text[0].toUpperCase() + text.substring(1);
      // const toCapitalizeEveryWord = (text) => {
      //   return text.split(" ")                      // Separamos en un array cada palabra
      //     .map(word => toCapitalize(word))          // Aplicamos el capitalizar a cada elemento
      //     .join(" ");                               // Lo volvemos a unir en un string
      // }
      destinationName = toCapitalize(destinationName.toLowerCase());
      const destination = data.destinations.find((destination) => destination.name === destinationName);
      setDestination(destination);
    }
  };


  return (
    <>
      <div className="bg-destination min-h-screen">
        <Header />
        <main className="grid place-items-center text-center">
          <div>
            <h5><span className="opacity-25 font-bold">01</span> pick your destination</h5>
            <img src={destination?.images.webp} alt="destination" />
          </div>
          <div>
            <nav onClick={(e) => handleOnclick(e)} className="flex justify-center gap-10 text-sm uppercase list-none text-pale-blue">
              {destinations.map((destination) =>
                <li key={destination}>{destination}</li>
              )}
            </nav>
            <h2 className="text-[56px] sm:text-[80px] lg:text-[100px]">{destination?.name}</h2>
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
        </main>
      </div>
    </>
  );
};

export default Destination;
