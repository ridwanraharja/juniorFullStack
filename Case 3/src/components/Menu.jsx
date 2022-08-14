import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div
      name="menu"
      className="flex justify-center items-center w-full h-screen bg-[#b3501b] "
    >
      <div className="w-full">
        <div className="max-w-[1240px] w-[75%] mx-auto p-2 flex flex-col md:flex-row justify-center items-start text-white">
          <div className=" md:basis-4/12 md:mb-0 md:text-start w-full mb-10 text-center">
            <h3 className="font-bold text-4xl md:text-5xl">OUR MENU</h3>
            <button className="mt-5 w-[75%] hover:text-slate-400 hover:border-slate-400">
              See more <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
            </button>
          </div>
          <div className="basis-8/12 w-full">
            <div className=" flex justify-between">
              <h3 className="font-medium text-sm">Coffee</h3>
              <h3 className="font-medium text-sm">Price</h3>
            </div>
            <div className=" flex justify-between py-4 border-solid border-b-2 border-white">
              <p className="font-medium text-xl tracking-widest">
                Double Espresso
              </p>
              <p className="font-medium text-lg ">$13.9</p>
            </div>
            <div className=" flex justify-between py-4 border-solid border-b-2 border-white">
              <p className="font-medium text-xl tracking-widest">Americano</p>
              <p className="font-medium text-lg ">$12.9</p>
            </div>
            <div className=" flex justify-between py-4 border-solid border-b-2 border-white">
              <p className="font-medium text-xl tracking-widest">
                Iced Americano
              </p>
              <p className="font-medium text-lg ">$13.9</p>
            </div>
            <div className=" flex justify-between py-4 border-solid border-b-2 border-white">
              <p className="font-medium text-xl tracking-widest">Cappuccino</p>
              <p className="font-medium text-lg ">$14.9</p>
            </div>
            <div className=" flex justify-between py-4 border-solid border-b-2 border-white">
              <p className="font-medium text-xl tracking-widest">Flat White</p>
              <p className="font-medium text-lg ">$11.9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
