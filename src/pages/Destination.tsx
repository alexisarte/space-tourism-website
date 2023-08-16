import Header from "../components/header/Header";

import { useState } from "react";

import data from "../data.json";
import DestinationItem from "../components/DestinationItem";

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
  const [destination, setDestination] = useState<DestinationType | undefined>(
    data.destinations[0]
  );
  const [isActive, setIsActive] = useState('Moon');

  const destinations = [
    { name: 'Moon', isActive: isActive  === 'Destination 1' },
    { name: 'Mars', isActive: isActive  === 'Destination 2' },
    { name: 'Europa', isActive: isActive  === 'Destination 3' },
    { name: 'Titan', isActive: isActive  === 'Destination 3' },
  ];

  // const handleOnclick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   const targetElement = e.target as HTMLLIElement;
  //   if (targetElement.tagName === "DestinationItem") {
  //     let destinationName = targetElement.innerText;
  //     const toCapitalize = (text: string) =>
  //       text[0].toUpperCase() + text.substring(1);
  //     // const toCapitalizeEveryWord = (text) => {
  //     //   return text.split(" ")                      // Separamos en un array cada palabra
  //     //     .map(word => toCapitalize(word))          // Aplicamos el capitalizar a cada elemento
  //     //     .join(" ");                               // Lo volvemos a unir en un string
  //     // }
  //     destinationName = toCapitalize(destinationName.toLowerCase());
  //     const destination = data.destinations.find(
  //       (destination) => destination.name === destinationName
  //     );
  //     setDestination(destination);
  //   }

  const handleOnClick = (destinationName: string) => {
    const toCapitalize = (text: string) =>
      text[0].toUpperCase() + text.substring(1);
    const formattedName = toCapitalize(destinationName.toLowerCase());
    const newDestination = data.destinations.find(
      (destination) => destination.name === formattedName
    );
    setDestination(newDestination);
    setIsActive(destinationName);
  };

  return (
    <>
      <section className="bg-destination min-h-screen">
        <Header />
        <main className="grid place-items-center text-center">
          <section className="grid place-items-center">
            <h5 className="tracking-[2.70px]">
              <span className="opacity-25 font-bold">01</span> pick your
              destination
            </h5>
            <img
              src={destination?.images.webp}
              alt="destination"
              className="w-2/5 my-8"
            />
          </section>
          <div>
            <nav>
              <ul className="flex justify-center gap-10 text-sm uppercase list-none text-pale-blue">
                {destinations.map((destination) => (
                  <DestinationItem
                    key={destination.name}
                    name={destination.name}
                    onclick={handleOnClick}
                    isActive={isActive}
                  />
                ))}
              </ul>
            </nav>
            <h2 className="text-[56px] sm:text-[80px] lg:text-[100px]">
              {destination?.name}
            </h2>
            <p className="text-pale-blue text-[15px] leading-[25px] max-w-[327px]">
              {destination?.description}
            </p>
            <hr className="border-gray-700" />
            <div className="uppercase">
              <div>
                <span className="text-pale-blue text-sm">AVG. DISTANCE</span>
                <p className="text-[28px]">{destination?.distance}</p>
              </div>
              <div>
                <span className="block text-pale-blue text-sm uppercase">
                  Est. travel time
                </span>
                <time className="text-[28px]">{destination?.travel}</time>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Destination;
