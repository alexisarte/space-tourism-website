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
  const [activeItem, setActiveItem] = useState("Moon");

  const destinations = [
    { name: "Moon", isActive: activeItem === "Moon" },
    { name: "Mars", isActive: activeItem === "Mars" },
    { name: "Europa", isActive: activeItem === "Europa" },
    { name: "Titan", isActive: activeItem === "Titan" },
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
    setActiveItem(destinationName);
  };

  return (
    <>
      <section className="bg-destination min-h-screen">
        <Header />
        <main className="grid place-items-center text-center pt-6 pb-[57px] sm:pt-10 sm:pb-[62px] ">
          <section className="grid place-items-center">
            <header className="w-screen sm:text-left sm:px-11">
              <h5 className="tracking-[2.70px] sm:text-lg sm:tracking-[3.38px]">
                <span className="opacity-25 font-bold">01</span> pick your
                destination
              </h5>
            </header>
            <img
              src={destination?.images.webp}
              alt="destination"
              className="w-2/5 my-8"
            />
          </section>
          <section>
            <nav>
              <ul className="flex justify-center gap-10 text-sm uppercase list-none text-pale-blue sm:text-base">
                {destinations.map((d) => (
                  <DestinationItem
                    key={d.name}
                    name={d.name}
                    onclick={handleOnClick}
                    isActive={d.isActive}
                  />
                ))}
              </ul>
            </nav>
            <div className="pt-5 sm:pt-8">
              <div>
                <h2 className="text-[56px] sm:text-[80px] lg:text-[100px]">
                  {destination?.name}
                </h2>
                <p className="text-pale-blue text-[15px] leading-[25px] max-w-[327px] sm:max-w-[573px] sm:text-base">
                  {destination?.description}
                </p>
              </div>
              <hr className="border-gray-700 mt-8 mb-8 sm:mt-" />
              <section className="grid gap-8 sm:flex sm:justify-evenly">
                <div className="mb-">
                  <span className="text-pale-blue text-sm">AVG. DISTANCE</span>
                  <p className="text-[28px] uppercase">
                    {destination?.distance}
                  </p>
                </div>
                <div className="uppercase">
                  <span className="block text-pale-blue text-sm">
                    Est. travel time
                  </span>
                  <time className="text-[28px]">{destination?.travel}</time>
                </div>
              </section>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Destination;
