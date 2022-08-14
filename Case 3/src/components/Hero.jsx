import Navbar from "./Navbar";
import bghero from "../images/bghero.jpg";

function Hero() {
  return (
    <div className="w-full h-screen bg-black/50 border-solid border-b border-[#DDDDDD]">
      <img
        className="absolute w-full h-full object-cover -z-10"
        src={bghero}
        alt="/"
      />
      <Navbar />
      <div className="flex justify-center items-center max-w-[1120px] h-[75%] mx-auto p-2">
        <div className="mx-auto">
          <div className="max-w-[720px] mx-auto">
            <div className="flex justify-center mx-auto p-2 text-start text-white">
              <h3 className="tracking-widest md:text-4xl text-xl mb-7 text-white">
                DISCOVER THE TASTE
                <br />
                REAL OF COFFEES WITH
                <br />
                COFFEIN
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[#DDDDDD] text-xs ml-4">
          Inspired by cafe culture prevalent all
          <br />
          over, we are a cafe that prides
          <br />
          ourselves on excellent coffee, fresh
          <br />
          ingredients and heartfelt service!
        </p>
      </div>
    </div>
  );
}

export default Hero;
