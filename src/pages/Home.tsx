import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-home min-h-screen">
      <Header />
      <main className="grid grid-cols-2 place-items-center justify-between pt-64">
        <div className="text-center w-[444px]">
          <h3 className="text-xl uppercase">So, you want to travel to</h3>
          <h1 className="text-[150px] uppercase ">Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="grid place-items-center rounded-full bg-white h-48 w-48 text-black uppercase">
          <h5>explore</h5>
        </div>
      </main>
    </div>
  );
};

export default Home;
