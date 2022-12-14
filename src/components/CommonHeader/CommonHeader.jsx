import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

const CommonHeader = () => {
  const { state } = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <section className="bg-bgNav bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="pt-44 sm:pt-[147px] pb-6 sm:pb-[163px]">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between">
              <h2 className="font-syne font-bold text-4xl md:text-[4rem] text-white">
                {state}
              </h2>
              <p className="font-manrope font-semibold text-sm sm:text-base text-white opacity-[0.8]">
                Home {">"}
                <span className="text-pink"> {state} </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonHeader;
