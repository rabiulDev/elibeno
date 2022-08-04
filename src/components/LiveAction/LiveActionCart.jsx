import eth2 from '../../assets/icons/etherium.png'
import clock from '../../assets/icons/clock.png'

const LiveActionCart = ({ item }) => {
    return (
        <div className='p-6 bg-lightBlue rounded-lg w-[312px]'>
            <div className='relative rounded-lg'>
                <img className='w-full h-full rounded-lg' src={item.img} alt="" />
            </div>

            <div className='font-manrope text-white'>
                <div className='mt-2 flex items-center justify-center'>
                    <img src={clock} alt="" />
                    <p className='ml-[9.14px] text-base opacity-[0.8] flex items-center gap-[9.14px]'>{item.time.date}d <span>|</span> {item.time.hours}h <span>|</span> {item.time.minutes}m <span>|</span> {item.time.second}s</p>
                </div>

                <div className='flex items-center justify-between mt-6'>
                    <div>
                        <h3 className='font-syne font-bold text-base leading-[19px]'>{item.name}</h3>
                        <p className='mt-2 font-normal text-xs opacity-[0.8]'>{item.author}</p>
                    </div>

                    <div className='flex items-center'>
                        <div>
                            <img src={eth2} alt="" />
                        </div>
                        <p className='ml-1 font-semibold text-base'> {item.qty}</p>
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button className='hover:bg-pink w-[180px] h-9 rounded-lg border border-pink font-semibold text-xs'>Bid Now </button>
                </div>

            </div>
        </div>
    )

}

export default LiveActionCart