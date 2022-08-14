import bgabout from "../images/bgabout.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div
      name="about"
      className="flex justify-center items-center w-full h-screen bg-[#060605]"
    >
      <div className="w-full mx-auto p-2 ">
        <div className="max-w-[1240px] flex-col mx-auto flex md:flex-row justify-center">
          <div className="mx-auto mb-3 md:mr-20">
            <img className="h-[30vh] md:h-[65vh]" src={bgabout} alt="/" />
          </div>
          <div className="flex flex-col mx-auto justify-center md:w-[400px] w-auto text-white md:ml-20">
            <h2 className="font-bold text-xl md:text-4xl tracking-widest">
              ABOUT COFFEIN
            </h2>
            <p className="text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mauris nisi, porttitor ut eros at, imperdiet cursus nulla. Nam
              gravida commodo elit, vel vulputate leo pulvinar at. Cras vel eros
              mauris.
            </p>
            <br />
            <p className="text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mauris nisi, porttitor ut eros at, imperdiet cursus nulla. Nam
              gravida commodo elit, vel vulputate leo pulvinar at. Cras vel eros
              mauris. Sed laoreet magna non molestie pulvinar. Donec lobortis ut
              dolor at fringilla.
            </p>

            <div className="mt-5">
              <button className="= hover:text-slate-400 hover:border-slate-400">
                Learn more
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
