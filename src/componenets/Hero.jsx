import Typed from "react-typed";
const Hero = () => {
  return (
    <section className="hero text-white">
      <div className="hero__contents max-w-[800px] hero-height mx-auto text-center flex flex-col justify-center px-4">
        <p className="text-[#00df9a] font-bold text-2xl mb-3 md:tracking-widest">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold mb-3">
          Grow with data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold mb-4">
            Fast, flexible financing for 
            <Typed className="md:text-5xl sm:text-4xl text-xl font-bold ml-4 text-gray-500"
              strings={[
                "BTB",
                "BTC",
                "SASS",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
            </Typed>
          </p>
        </div>
        <p className="text-xl md:text-2xl fond-bold text-gray-500 max-w-[400px] mx-auto md:max-w-[100%]">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-full font-medium py-3 px-3 mx-auto mt-4  text-black text-lg">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
