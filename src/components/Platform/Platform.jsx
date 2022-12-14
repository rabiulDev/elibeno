import platform from "../../fakeDB/json/platform.json";
import PlatformItemCart from "./PlatformItemCart";

const Platform = () => {
  return (
    <div className="bg-lightBlue">
      <div className="container mx-auto py-[120px] grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {platform.map((item) => (
          <PlatformItemCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Platform;
