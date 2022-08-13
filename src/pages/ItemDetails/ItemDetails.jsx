import explore from "../../fakeDB/json/explore.json";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import ExploreCart from "../../components/ExploreNft/ExploreCart";
import profilePhoto from "../../assets/icons/profilePhoto.png";
import profileCheckmark from "../../assets/icons/profileCheckmark.png";
import star from "../../assets/icons/star.png";
import share from "../../assets/icons/share.png";
import heart from "../../assets/icons/heart.png";
import clock from "../../assets/icons/clock.png";
import etheriumCircle from "../../assets/icons/etheriumCircle.png";
import hammer from "../../assets/icons/hammer.png";
import buyCart from "../../assets/icons/cart.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const [items, setItems] = useState([]);
  const [viewImg, setViewImg] = useState("");

  const { id } = useParams();
  const Id = parseInt(id);

  useEffect(() => {
    const selectedProduct = explore.find((product) => product.id === Id);
    setItems(selectedProduct);
    setViewImg(selectedProduct.img);
  }, [Id]);

  return (
    <div>
      <CommonHeader />
      <div className="container mx-auto">
        <div className="py-10 lg:py-[120px] px-3">
          <div className="flex gap-6 flex-col lg:flex-row">
            <div className="w-full md:w-[536px]">
              <div className="w-full md:w-[536px] h-[300px] md:h-[395px]">
                <img className="w-full h-full" src={viewImg} alt="" />
              </div>

              <div className="flex items-center gap-6 mt-6">
                {items.productImg?.map((item, ind) => (
                  <div
                    onClick={() => setViewImg(item.img)}
                    key={ind}
                    className="h-[48px] md:h-[88px] w-[48px] md:w-[88px] rounded-lg cursor-pointer"
                  >
                    <img className="h-full w-full" src={item.img} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={profilePhoto} alt="" />
                  <img className="-ml-1" src={profileCheckmark} alt="" />
                  <p className="font-manrope font-medium text-xs text-white">
                    {" "}
                    <span className="font-normal opacity-[0.8] ml-3 mr-1">
                      Created by:
                    </span>{" "}
                    @Chris_Jacobs
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-[29px] h-[29px] bg-lightBlue rounded">
                    <img src={star} alt="" />
                  </div>
                  <div className="flex items-center justify-center w-[29px] h-[29px] bg-lightBlue rounded">
                    <img src={share} alt="" />
                  </div>
                  <div className="flex items-center justify-center w-[29px] h-[29px] bg-lightBlue rounded">
                    <img src={heart} alt="" />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-syne font-bold text-2xl lg:text-5xl text-white">
                  {items.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col lg:flex-row items-center">
                    <img src={etheriumCircle} alt="" />
                    <p className="font-manrope font-medium text-lg lg:text-2xl text-white flex items-center lg:ml-2">
                      <span className="font-normal text-base opacity-[0.8] mr-2 inline">
                        Minimum Bid:
                      </span>
                      {items.qty}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center">
                    <img src={clock} alt="" />
                    <h3 className="font-manrope font-medium text-base text-white opacity-[0.8] ml-2">
                      24D | 04H | 04M | 04S
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-lightBlue rounded-lg p-6 mt-10">
                <div className="pb-4 border-b border-[#c1c5e0] border-opacity-[0.2] border-dashed space-x-4">
                  <button className="bg-pink px-4 py-2 rounded font-manrope font-semibold text-white text-base hover:bg-pink">
                    Details
                  </button>
                  <button className="bg-darkBlue px-4 py-2 rounded font-manrope font-semibold text-white text-base hover:bg-pink">
                    Bid
                  </button>
                  <button className="bg-darkBlue px-4 py-2 rounded font-manrope font-semibold text-white text-base hover:bg-pink">
                    History
                  </button>
                </div>

                <p className="mt-4 font-manrope font-normal text-base text-white opacity-[0.8] leading-[170%]">
                  Rather which, caches regretting of in on parts thing at far at
                  the typically the apprehend who practice date out to change.
                  Impasse. Work that the value pink cache such structure do
                  little beacon on present hologram more quitting my that steps
                  the decided in turn the met and while.
                </p>
              </div>

              <div className="mt-10 text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                <button className="bg-pink py-2 px-14 rounded-lg font-manrope font-semibold text-xs text-white">
                  Bid Now <img className="inline ml-2" src={hammer} alt="" />
                </button>
                <button className="bg-lightBlue py-2 px-14 rounded-lg font-manrope font-semibold text-xs text-white">
                  Buy Now <img className="inline ml-2" src={buyCart} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[120px]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="font-syne font-bold text-white text-[3rem] text-center md:text-left">
                Explore NFTs
              </h2>
            </div>

            <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
              {explore.slice(0, 4).map((item) => (
                <ExploreCart key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
