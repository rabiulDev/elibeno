import React from "react";
import banner from "../../assets/home/banner.png";
import uploadIcon from "../../assets/icons/upload2.png";
const Hero = () => {
  return (
    <section className="container mx-auto pt-12 lg:pt-[170px] pb-[128px]">
      <div className="flex flex-col-reverse xl:h-screen lg:flex-row items-center justify-between space-y-5 sm:space-y-10 md:space-y-0 px-4 sm:px-0">
        <div className="lg:max-w-[615px] text-white text-center md:text-left mt-6 sm:mt-0">
          <h1 className="font-syne font-bold text-3xl md:text-[4rem] md:leading-[76.8px]">
            Collect rare digital arts & nft’s today.
          </h1>
          <p className="font-manrope font-normal text-base sm:text-xl md:text-2xl opacity-[0.8] mt-3 sm:mt-0">
            Business requests of best or shall it global lorem is assignment.
            From
          </p>
          <button className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-pink font-manrope font-bold text-base mt-7 lg:mt-14">
            Upload Item{" "}
            <img className="inline-block ml-2" src={uploadIcon} alt="" />
          </button>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row mt-8 sm:mt-14 font-syne font-bold text-2xl sm:text-5xl">
            <div>
              <h2> 68,686+ </h2>
              <p className="font-montserrat font-normal opacity-[0.8] text-xl sm:text-2xl">
                nft’s Items
              </p>
            </div>
            <div className="md:ml-16">
              <h2>6.68 ETH</h2>
              <p className="font-montserrat font-normal opacity-[0.8] text-xl sm:text-2xl">
                Last Bid
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[538px] lg:max-h-[591.74px]">
          <img className="w-full h-full" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
