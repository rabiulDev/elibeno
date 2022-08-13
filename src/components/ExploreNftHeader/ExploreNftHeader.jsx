import React from "react";
import circleSpinner from "../../assets/icons/circle.png";
const ExploreNftHeader = ({ title, btnTxt }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <h2 className="font-syne font-bold text-white text-2xl mt-10 md:mt-0 md:text-[3rem] text-center md:text-left">
        {title}{" "}
      </h2>
      <button className="py-3 px-6 mt-4 md:mt-0 font-manrope font-semibold text-base text-white bg-lightBlue rounded-lg">
        {btnTxt}
        <img className="w-4 h-4 inline-block ml-2" src={circleSpinner} alt="" />
      </button>
    </div>
  );
};

export default ExploreNftHeader;
