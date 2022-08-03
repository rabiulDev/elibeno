import seller from "../../fakeDB/json/seller.json"
import rightArrow from '../../assets/icons/whitearrow.png'
import TopSellerCart from "./TopSellerCart"
const TopSeller = () => {
    return (
        <div className="pb-[120px]">
            {/* HEADING */}
            <div className='flex flex-col sm:flex-row items-center sm:justify-between'>
                <h2 className='font-syne font-bold text-white text-5xl'>Top Seller</h2>
                <div className='flex items-center mt-3 sm:mt-0'>
                    <div className='flex items-center justify-center w-10 h-10 bg-lightBlue rounded-full'> <img className='rotate-180' src={rightArrow} alt="" />  </div>
                    <div className='flex items-center justify-center w-10 h-10 bg-pink rounded-full ml-2'> <img src={rightArrow} alt="" />  </div>
                </div>
            </div>

            <div className="mt-16 grid place-items-center gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
                {
                    seller.map(item => <TopSellerCart key={item.id} item={item} />)
                }
            </div>

        </div>
    )
}

export default TopSeller