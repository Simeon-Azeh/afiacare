import React from "react";
import HeroImg from "./../assets/images/hero.png";
import Ui from "./../assets/images/ui.png";
function Hero() {
  return (
    <div className="flex flex-col items-center mt-20 md:mt-0 justify-center gap-0 md:py-10 px-5 md:flex-row z-0 md:h-[100vh]">
      <div className="space-y-4 md:ml-10 md:w-[60%] text-center md:text-left">
        <h1 className="text-2xl md:text-6xl text-[#39827a] font-bold">
          Empowering Healthcare with Technology
        </h1>
        <p className="text-gray-500  text-base">
          Transforming Healthcare, One digital step a time
        </p>
        <div>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email" className="p-2 border--2 border-[#39827a] outline-none bg-[#f5f5f5] rounded border rounded-r-none text-gray-500"
            />
            <button className="bg-[#39827a] text-white p-2 rounded rounded-l-none cursor-pointer">
              Get Demo
            </button>
          </form>
        </div>
      </div>
      <div className="md:w-[30%]">
        <img
          src={HeroImg}
          alt="" className="w-[500px] h-[500px]  object-cover "
        />
      </div>
      <img src={Ui} alt="" className="absolute bottom-0 left-0 md:bottom-0 md:right-0 w-[260px] opacity-60" />
      <img src={Ui} alt="" className="absolute top-30 right-0 md:top-0 md:right-0 w-[260px] opacity-60" />
      <img src={Ui} alt="" className="absolute bottom-20 right-[567px] w-[260px] opacity-60" />
      <img src={Ui} alt="" className="absolute top-30  md:top-0 left-0 w-[260px] opacity-60" />
    </div>
  );
}

export default Hero;
