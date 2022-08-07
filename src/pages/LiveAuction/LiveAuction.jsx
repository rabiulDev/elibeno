import CommonHeader from '../../components/CommonHeader/CommonHeader'
import LiveActionCart from '../../components/LiveAction/LiveActionCart'
import action from '../../fakeDB/json/auction.json'
import rightArrow from '../../assets/icons/whitearrow.png'
const LiveAuction = () => {
    return (

        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>

                <div className='py-[120px]'>
                    <div className='grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {
                            action.map(item => <LiveActionCart key={item.id} item={item} />)
                        }
                    </div>


                    <div className='flex items-center justify-center mt-16 '>
                        <div className='flex items-center justify-center w-10 h-10 bg-lightBlue rounded-full hover:cursor-pointer'> <img className='rotate-180' src={rightArrow} alt="" />  </div>
                        <div className='flex items-center justify-center w-10 h-10 bg-pink rounded-full ml-2 hover:cursor-pointer'> <img src={rightArrow} alt="" />  </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LiveAuction