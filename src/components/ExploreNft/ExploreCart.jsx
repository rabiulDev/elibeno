import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ethIcon from "../../assets/icons/eth (2).png";

const ExploreCart = ({ item }) => {
  const navigate = useNavigate();

  const navigateToSingleItem = (id) => {
    const path = `/explore/item-details/${id}`;
    navigate(path);
  };

  return (
    <div
      onClick={() => navigateToSingleItem(item.id)}
      className="p-6 w-[312px] bg-lightBlue rounded-lg cursor-pointer"
    >
      <div className="relative rounded-lg">
        <img className="w-full h-full rounded-lg" src={item.img} alt="" />
        <div className="bg-darkBlue w-[29px] h-[29px] rounded flex items-center justify-center absolute top-5 right-5">
          <BsThreeDotsVertical className="text-white text-xl" />
        </div>
      </div>

      <div className="font-manrope text-white space-y-4">
        <div className="mt-6 flex items-center justify-between ">
          <h3 className="text-xs opacity-[0.8]">
            <img
              className="w-3 h-3 inline-block mr-1"
              src={item.icon1}
              alt=""
            />{" "}
            {item.title}
          </h3>
          <button className="py-2 px-4 rounded-lg border border-pink font-semibold text-xs hover:bg-pink">
            Buy{" "}
            <img
              className="w-3 h-3 inline-block ml-2"
              src={item.icon2}
              alt=""
            />{" "}
          </button>
        </div>

        <div>
          <h3 className="font-syne font-bold text-base">{item.name}</h3>
          <p className="mt-2 font-normal text-xs opacity-[0.8]">
            {item.author}
          </p>
        </div>

        <div className="flex items-center">
          <div className=" w-7 h-7 bg-darkBlue flex items-center justify-center rounded">
            <img className="" src={ethIcon} alt="" />
          </div>
          <p className="ml-2 font-semibold text-base"> {item.qty}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCart;
