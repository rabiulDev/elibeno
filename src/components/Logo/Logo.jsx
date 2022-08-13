import logo from "../../assets/icons/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        className="w-[25px] sm:w-[40.97px] h-[25px] sm:h-[40px] inline-block"
        src={logo}
        alt=""
      />
      <span className="font-syne font-medium sm:font-bold text-2xl sm:text-4xl text-white ml-1">
        Elibeno
      </span>
    </div>
  );
};

export default Logo;
