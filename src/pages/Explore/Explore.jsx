import React from 'react'
import explore from '../../fakeDB/json/explore.json'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import ExploreCart from '../../components/ExploreNft/ExploreCart'

const Explore = () => {
    return (
        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>

                <div className='grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16'>
                    {
                        explore.slice(0, 12).map(item => <ExploreCart key={item.id} item={item} />)
                    }
                </div>

                <div className='max-w-[524px] mx-auto mt-16 h-[51px] flex items-center gap-6 flex-wrap font-manrope font-semibold text-base text-white'>
                    {/*  PAGINATION  */}
                    <button className='w-[100px] rounded bg-lightBlue h-full hover:bg-pink'>Prev</button>
                    <button className='w-[51px] h-full rounded bg-lightBlue hover:bg-pink'>01</button>
                    <button className='w-[51px] h-full rounded bg-lightBlue hover:bg-pink'>02</button>
                    <button className='w-[51px] h-full rounded bg-lightBlue hover:bg-pink'>03</button>
                    <button className='w-[51px] h-full rounded bg-lightBlue hover:bg-pink'>04</button>
                    <button className='w-[100px] rounded bg-lightBlue h-full hover:bg-pink'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Explore