import bgFooter from "../images/bgFooter.jpg";
function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[40vh] relative ">
      <div className="w-full h-full bg-[#060605]/90 absolute z-10"></div>
      <img
        className="w-full h-full object-cover absolute"
        src={bgFooter}
        alt="/"
      />
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-start absolute z-20">
        <div className="flex flex-col md:flex-row justify-between w-full h-full">
          <div className="flex flex-col md:items-start md:justify-start items-center">
            <h2 className="text-white font-bold font-['Caveat'] text-5xl">
              Coffein
            </h2>
            {/* subscription */}
            <div className="mt-4" class="container">
              <div className="content w-[270px] h-[30px] md:w-[360px] md:h-[40px]">
                <form class="subscription">
                  <input
                    class="add-email"
                    type="email"
                    placeholder="subscribe@me.now"
                  />
                  <button class="submit-email" type="button">
                    <span class="before-submit">Subscribe</span>
                    <span class="after-submit">Thank you for subscribing!</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:ml-[20%] w-full">
            <div className="text-white text-xs md:text-sm">
              <ul>
                <li className="cursor-pointer hover:text-slate-300">
                  About us
                </li>
                <li className="cursor-pointer hover:text-slate-300">Menu</li>
                <li className="cursor-pointer hover:text-slate-300">
                  Reservetions
                </li>
                <li className="cursor-pointer hover:text-slate-300">Contact</li>
                <li className="cursor-pointer hover:text-slate-300">Blog</li>
              </ul>
            </div>
            <div className="text-white text-sm flex flex-col justify-center">
              <p>Jalan Batuampar 2 St, Jakarta,</p>
              <p>Indonesia 13520</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] w-full z-20 top-[90%] text-center text-white absolute">
        <p className=" mx-auto text-xs">Copyright&copy; 2022 by Wann</p>
      </div>
    </div>
  );
}

export default Footer;
