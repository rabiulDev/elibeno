import React from 'react'
import explore from '../../fakeDB/json/explore.json'
import ExploreNftHeader from '../ExploreNftHeader/ExploreNftHeader'
import ExploreCart from './ExploreCart'

const ExploreNft = () => {
    return (
        <div className='py-[120px]'>

            <ExploreNftHeader title={'Explore NFTs'} btnTxt={'Explore More'} />


            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16'>
                {
                    explore.slice(0, 8).map(item => <ExploreCart key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default ExploreNft