import Header from "../components/header/Header";

const Home = () => {
  return (
    <div className="bg-home min-h-screen">
      <Header />
      <main className="grid lg:grid-cols-2 lg:pt-36 lg:text-left lg:gap-0 place-items-center lg:items-end sm:gap-28 gap-20 pt-16 text-center">
        <div className="max-w-[327px]  sm:max-w-[444px]">
          <h5 className="text-pale-blue sm:text-xl lg:text-[28px] tracking-[4.75px] uppercase">So, you want to travel to</h5>
          <h1 className="text-[80px] sm:text-[150px] uppercase p-">Space</h1>
          <p className="text-pale-blue text-[15px] leading-loose sm:text-base lg:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="grid place-items-center rounded-full bg-white h-[150px] w-[150px] sm:h-[242px] sm:w-[242px] lg:h-[274px] lg:w-[274px] uppercase hover:shadow-[0_0_0_60px_rgba(255,255,255,0.1)] duration-500">
          <h4 className="text-gray-950 text-xl sm:text-[32px] font-normal tracking-widest">explore</h4>
        </button>
      </main>
    </div>
  );
};

export default Home;
