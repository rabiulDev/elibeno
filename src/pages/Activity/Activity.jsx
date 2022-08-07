import React from 'react'
import ActivityItemCard from '../../components/ActivityItemCard/ActivityItemCard'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import activity from '../../fakeDB/json/activity.json'
import whiteClock from '../../assets/icons/whiteClock.png'
import grid from '../../assets/icons/grid.png'
import list from '../../assets/icons/listing.png'
import bidding from '../../assets/icons/bidding.png'
import follow from '../../assets/icons/follow.png'
import unfollow from '../../assets/icons/unfollow.png'
import sale from '../../assets/icons/sale.png'
import ExploreBtn from '../../components/ExploreBtn/ExploreBtn'

const Activity = () => {
    return (
        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>

                <div className=' flex items-center justify-between gap-[29.93px] flex-wrap'>
                    <div className='flex items-center flex-wrap gap-[29.93px] font-manrope font-semibold text-base text-[#C1C5E0]'>
                        <button className='bg-pink py-3 px-6 rounded-lg text-white hover:bg-pink'> <img className='inline-block mr-2' src={grid} alt="" /> All</button>
                        <button className='bg-lightBlue py-3 px-6 rounded-lg hover:bg-pink'> <img className='inline-block mr-2' src={list} alt="" /> Listing</button>
                        <button className='bg-lightBlue py-3 px-6 rounded-lg hover:bg-pink'> <img className='inline-block mr-2' src={follow} alt="" /> Following</button>
                        <button className='bg-lightBlue py-3 px-6 rounded-lg hover:bg-pink'> <img className='inline-block mr-2' src={bidding} alt="" /> Biding</button>
                        <button className='bg-lightBlue py-3 px-6 rounded-lg hover:bg-pink'> <img className='inline-block mr-2' src={unfollow} alt="" /> Unfollow</button>
                        <button className='bg-lightBlue py-3 px-6 rounded-lg hover:bg-pink'> <img className='inline-block mr-2' src={sale} alt="" /> Sale</button>
                    </div>

                    <div>
                        <button className='px-6 py-3 bg-lightBlue rounded-lg font-redHatDisplay font-medium text-base text-white hover:bg-pink' type='button'>Recently Active
                            <img className='inline-block ml-2' src={whiteClock} alt="" />
                        </button>
                    </div>
                </div>

                <ul className='space-y-6 mt-16'>
                    {
                        activity.map(item => <ActivityItemCard key={item.id} item={item} />)
                    }
                </ul>

                <ExploreBtn />
            </div>
        </div>
    )
}

export default Activity