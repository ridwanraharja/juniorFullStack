import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CardServices(props) {
  return (
    <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] relative rounded shadow-xl m-2">
      <div className="w-full flex ">
        <div className="w-full h-full bg-black/30 absolute z-10 hover:bg-black/0"></div>
        <img
          className="w-full object-cover absolute "
          src={props.photo}
          alt="/"
        />
        <div className="w-full h-full z-10">
          <div className="m-3 w-[70px] h-3 text-xs font-bold flex items-center p-2 z-20 bg-orange-500 text-white rounded-3xl">
            services
          </div>
          <h2 className="text-white w-[90%] m-3 text-xl md:text-4xl font-bold flex flex-col h-full justify-start z-20">
            {props.text}
          </h2>
          <button className="absolute text-white bottom-2 right-2 text-xs z-20 hover:border-slate-300 hover:text-slate-300">
            Discover <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardServices;
