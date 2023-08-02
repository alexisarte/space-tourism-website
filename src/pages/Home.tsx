import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-[url(/src/assets/home/background-home-desktop.jpg)] min-h-screen">
      <Header />
      <div>
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div>explore</div>
      </div>
    </div>
  );
};

export default Home;
