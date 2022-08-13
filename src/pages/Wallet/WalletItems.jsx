import React from "react";

const WalletItems = ({ item }) => {
  return (
    <li className="flex flex-col lg:flex-row items-center justify-between lg:px-[100px] py-4 bg-lightBlue rounded-lg space-y-6 lg:space-y-0">
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center">
        <div>
          <img src={item.img} alt="" />{" "}
        </div>
        <div className="lg:ml-8 text-white text-center lg:text-left max-w-[582.52px] space-y-3 lg:space-y-0 px-2 lg:px-0">
          <h2 className="font-syne font-bold text-2xl">{item.name}</h2>
          <p className="font-manrope font-normal text-base opacity-[0.8]">
            {item.desc}
          </p>
        </div>
      </div>

      <div>
        <button className="py-3 px-6 rounded-lg bg-darkBlue hover:bg-pink font-redHatDisplay font-medium text-white text-base">
          Connect
        </button>
      </div>
    </li>
  );
};

export default WalletItems;
