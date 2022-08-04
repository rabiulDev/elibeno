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

                <div>

                </div>
            </div>
        </div>
    )
}

export default Explore