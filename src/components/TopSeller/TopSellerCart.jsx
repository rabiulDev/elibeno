import dimondIcon from '../../assets/icons/dimondIcon.png'
import dimondFill from '../../assets/icons/dimondFill.png'
const TopSellerCart = ({ item }) => {
    return (
        <div className='space-y-4 w-[120px]'>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className='text-white flex flex-col items-center'>
                <h2 className='font-syne font-bold text-base'>{item.name}</h2>
                <p className='flex items-center mt-1'>
                    {item.item > 500 ? <img src={dimondIcon} alt="" /> : <img src={dimondFill} alt="" />}
                    <span className='font-manrope font-normal text-xs ml-1 opacity-[0.6]'> {item.item} Items</span>
                </p>
            </div>
        </div>
    )
}

export default TopSellerCart