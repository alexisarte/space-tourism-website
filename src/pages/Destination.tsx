import Header from "../components/Header";

const Destination = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <span>01 pick your destination</span>
          <img></img>
        </div>
        <div>
          <nav>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </nav>
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div>divider</div>
          <div>
            <div>
              <span>AVG. DISTANCE</span>
              <h3>384,400 km</h3>
            </div>
            <div>
              <span>Est. travel time</span>
              <h3>3 days</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
