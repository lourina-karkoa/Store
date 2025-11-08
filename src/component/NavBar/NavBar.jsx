import { useState } from "react";
import logo from "../../assets/images/Logo-25-cropped.svg";
import bars from "../../assets/images/toggle.svg";
import Bage from "./Bage";
import Lang from "../Lang/Lang";
import { dataLang } from "../../data/DataLang";

export default function NavBar() {
  const [toggleBars, setToggleBars] = useState(false);

  function ChangeStyle() {
    if (window.scrollY >= 50) {
      setStylenav(true);
    } else {
      setStylenav(false);
    }
  }
  window.addEventListener("scroll", ChangeStyle);

  return (
    <nav className="border-b border-[#e6e9f2] px-6 md:px-16 xl:!px-32 flex sticky top-0 mb-6 bg-white z-[1000] justify-between items-center !py-1 text-gray-identity xl:text-lg desktop:text-2xl w-full">
      <div className="">
        <img src={logo} className="w-16 lg:w-20" />
      </div>
      <div className="hidden md:flex justify-between items-center">
        <Bage humbrger={""} />
      </div>
     
        <img
          src={bars}
          className="md:hidden w-7"
          onClick={() => {
            setToggleBars(!toggleBars);
          }}
        />
   
      <div
        className={` ${
          toggleBars ? "left-0" : "-left-full"
        } transition-all duration-700 ease-in-out top-12 rounded-s-full fixed trst bg-white w-full`}
      >
        <Bage humbrger={"flex-col gap-6 justify-center"} />
      </div>
      <div className="flex justify-center items-center gap-2">
        {dataLang.map((item , index)=>{
          return(
            <Lang key={index} lang={item.h1} />
          )
        })}
      </div>
    </nav>
  );
}
