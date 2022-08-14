import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";
import service4 from "../images/service4.jpg";
import CardServices from "./CardServices";

function Services() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full mx-auto ">
        <div className="max-w-[1240px] h-screen mx-auto flex justify-center items-center mt-[60px]">
          <div>
            <h2 className="tracking-widest font-semibold  text-xl md:text-4xl flex flex-wrap md:flex-row justify-center items-center">
              BEHIND&nbsp;
              <img className=" h-[30px]" src={service1} alt="/" />
              &nbsp;EACH OF OUR CUPS
            </h2>
            <h2 className="tracking-widest font-semibold text-xl md:text-4xl flex justify-center items-center">
              HIDES A AMAZING&nbsp;
              <img className="h-[30px]" src={service2} alt="/" />
              &nbsp;SURPRISE
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center mt-10">
              <CardServices
                className="w-[100px] h-[100px] rounded"
                photo={service3}
                text="SPECIALTY COFFE ASSORTMENTS"
              />
              <CardServices
                photo={service4}
                text="BARISTA PRO AND INDIVIDUAL TRAINING"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
