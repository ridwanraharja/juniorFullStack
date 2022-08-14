import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-[70px]">
      <div className="max-w-screen mx-auto p-4 flex justify-between items-center h-full">
        <div className="hidden md:flex">
          <ul className="md:flex gap-5 text-white">
            <li className="cursor-pointer hover:text-slate-300">
              <Link to="about" smooth={true} offset={0} duration={500}>
                About us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-slate-300">
              <Link to="menu" smooth={true} offset={0} duration={500}>
                Menu
              </Link>
            </li>
            <li className="cursor-pointer hover:text-slate-300">
              <Link to="contact" smooth={true} offset={0} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-4xl font-['Caveat']">coffein</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="md:flex gap-5 text-white">
            <li className="cursor-pointer hover:text-slate-300">Instagram</li>
            <li className="cursor-pointer hover:text-slate-300">Tiktok</li>
          </ul>
        </div>
        <div onClick={menuHandler} className="z-20 Block md:hidden">
          {showMenu ? (
            <FontAwesomeIcon icon={faXmark} className="text-white" size={30} />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-white" size={30} />
          )}
        </div>
      </div>
      <div
        className={
          showMenu
            ? "md:hidden w-full bg-black/50 text-white absolute top-0 pt-[70px] flex justify-center items-center text-center"
            : "absolute left-[-100%] z-20"
        }
      >
        <ul>
          <li className="cursor-pointer hover:text-slate-300">
            <Link to="about" smooth={true} offset={0} duration={500}>
              About us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-slate-300">
            <Link to="menu" smooth={true} offset={0} duration={500}>
              Menu
            </Link>
          </li>
          <li className="cursor-pointer hover:text-slate-300">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact
            </Link>
          </li>
          <li className="cursor-pointer hover:text-slate-300">Instagram</li>
          <li className="cursor-pointer hover:text-slate-300">Tiktok</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
