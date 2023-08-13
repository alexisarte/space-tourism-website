import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-home min-h-screen">
      <Header />
      <main className="grid grid-cols-2 place-items-center items-end pt-36">
        <div className="w-[444px]">
          <h5 className="text-indigo-200 text-[28px] tracking-[4.75px] uppercase">So, you want to travel to</h5>
          <h1 className="text-[150px] uppercase">Space</h1>
          <p className="text-indigo-200 leading-loose text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="grid place-items-center rounded-full bg-white h-[274px] w-[274px] uppercase hover:shadow-[0_0_0_60px_rgba(255,255,255,0.1)] duration-500">
          <h4 className="text-gray-950 text-[32px] font-normal tracking-widest">explore</h4>
        </button>
      </main>
    </div>
  );
};

export default Home;
