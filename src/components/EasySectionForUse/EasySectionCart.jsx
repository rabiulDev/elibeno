import React from "react";

const EasySectionCart = ({ item }) => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="flex items-center justify-center w-[100px] h-[100px] bg-darkBlue rounded-lg relative">
        <img src={item.stepIcon} alt="" />
        <span className="absolute right-[5px] -top-4 font-manrope font-medium text-xs text-white p-2 bg-pink rounded-full">
          {item.stepNumber}
        </span>
      </div>

      <div className="mt-6 font-syne font-bold text-xl sm:text-2xl text-white">
        <p className="text-center w-[247px]">{item.stepName}</p>
      </div>
    </div>
  );
};

export default EasySectionCart;
