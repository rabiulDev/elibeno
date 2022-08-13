import CommonHeader from "../../components/CommonHeader/CommonHeader";
import LiveActionCart from "../../components/LiveAction/LiveActionCart";
import action from "../../fakeDB/json/auction.json";
import rightArrow from "../../assets/icons/whitearrow.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const LiveAuction = () => {
  return (
    <div>
      <CommonHeader />
      <div className="container mx-auto">
        <div className="py-10 lg:py-[120px]">
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
          >
            <SwiperSlide>
              <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {action.map((item) => (
                  <LiveActionCart key={item.id} item={item} />
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {action.map((item) => (
                  <LiveActionCart key={item.id} item={item} />
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {action.map((item) => (
                  <LiveActionCart key={item.id} item={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center justify-center mt-16 ">
            <div className="prev flex items-center justify-center w-10 h-10 bg-lightBlue rounded-full hover:cursor-pointer">
              {" "}
              <img className="rotate-180" src={rightArrow} alt="" />{" "}
            </div>
            <div className="next flex items-center justify-center w-10 h-10 bg-pink rounded-full ml-2 hover:cursor-pointer">
              {" "}
              <img src={rightArrow} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
