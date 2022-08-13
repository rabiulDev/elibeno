import CommonHeader from "../../components/CommonHeader/CommonHeader";
import fileIcon from "../../assets/icons/fileIcon.png";
import uploadIcon from "../../assets/icons/upload.png";
import sale from "../../assets/icons/sale.png";
import clock from "../../assets/icons/whiteClock2.png";
import people from "../../assets/icons/people.png";
const CreateItems = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <CommonHeader />
      <div className="container mx-auto py-10 lg:py-[120px] px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-6 space-y-10 lg:space-y-0">
          <div className=" min-h-[580px] py-[148px]  bg-lightBlue rounded-lg px-2">
            <div className="flex items-center justify-center flex-col ">
              <img src={fileIcon} alt="" />
              <h3 className="text-center md:text-left font-syne font-bold text-2xl text-white mt-2">
                Drag and Drop Your File
              </h3>
              <p className="text-center md:text-left font-manrope font-normal text-base text-white opacity-[0.8] mt-2">
                PNG,JPEG,GIF,WEBP,MP3, MP4,HD Max 400MB
              </p>

              <h3 className="mt-10 font-syne font-bold text-2xl text-white">
                or Choose a File
              </h3>

              <div className="mt-6">
                <label
                  for="files"
                  className="py-3 px-6 bg-darkBlue rounded-lg font-manrope font-semibold text-base text-white hover:cursor-pointer"
                >
                  Browse file
                  <img className="inline ml-2" src={uploadIcon} alt="" />
                </label>
                <input type="file" id="files" class="hidden" />
              </div>
            </div>
          </div>

          <div className="min-h-[580px]">
            <form onSubmit={handleForm} className="space-y-6">
              <div>
                <label
                  className="block font-syne font-bold text-base text-white"
                  htmlFor="title"
                >
                  Title
                </label>
                <div>
                  <input
                    className="w-full px-[10px] py-[18px] bg-lightBlue rounded-lg focus:outline-none font-manrope text-xs text-white opacity-[0.8]"
                    id="title"
                    type="text"
                    placeholder="e.g. Creative Colorful Art"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block font-syne font-bold text-base text-white"
                  htmlFor="description"
                >
                  {" "}
                  Description (Optional)
                </label>
                <div>
                  <input
                    className="w-full px-[10px] py-[18px] bg-lightBlue rounded-lg focus:outline-none font-manrope text-xs text-white opacity-[0.8]"
                    id="description"
                    type="text"
                    placeholder="Description Here"
                  />
                </div>
              </div>

              <div>
                <p className="font-syne font-bold text-base text-white">
                  Select Method
                </p>
                <div className="flex items-center flex-wrap gap-6 checkBox">
                  <div>
                    <label className="cursor-pointer ">
                      <input className="hidden" type="checkbox" name="" />
                      <span className=" inline-block bg-lightBlue w-[200px] text-center rounded-lg font-manrope font-normal text-xs text-white py-[18px]">
                        <img className="inline mr-2" src={sale} alt="" /> Fixed
                        Price
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="cursor-pointer ">
                      <input className="hidden" type="checkbox" name="" />
                      <span className=" inline-block bg-lightBlue w-[200px] text-center rounded-lg font-manrope font-normal text-xs text-white py-[18px]">
                        {" "}
                        <img className="inline mr-2" src={clock} alt="" /> Time
                        Auction
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="cursor-pointer ">
                      <input className="hidden" type="checkbox" name="" />
                      <span className=" inline-block bg-lightBlue w-[200px] text-center rounded-lg font-manrope font-normal text-xs text-white py-[18px]">
                        {" "}
                        <img className="inline mr-2" src={people} alt="" /> Open
                        for bids
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block font-syne font-bold text-base text-white"
                  htmlFor="price"
                >
                  Price
                </label>
                <select
                  className="w-full px-[10px] py-[18px] bg-lightBlue rounded-lg focus:outline-none font-manrope text-xs text-white opacity-[0.8]"
                  name=""
                  id=""
                >
                  <option value="20" selected>
                    $20
                  </option>
                  <option value="30">$30</option>
                  <option value="50">$50</option>
                  <option value="100">$100</option>
                </select>
              </div>

              <div>
                <label
                  className="block font-syne font-bold text-base text-white"
                  htmlFor="description"
                >
                  Royality
                </label>
                <div>
                  <input
                    className="w-full px-[10px] py-[18px] bg-lightBlue rounded-lg focus:outline-none font-manrope text-xs text-white opacity-[0.8]"
                    id="description"
                    type="text"
                    placeholder="20%"
                  />
                </div>
              </div>

              <div>
                <input
                  className="bg-lightBlue px-6 py-3 rounded-lg font-manrope font-semibold text-base text-white mt-6 cursor-pointer hover:bg-pink"
                  type="submit"
                  value="Create Item"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItems;
