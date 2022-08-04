import action from '../../fakeDB/json/auction.json'
import ExploreNftHeader from '../ExploreNftHeader/ExploreNftHeader'
import LiveActionCart from './LiveActionCart'

const LiveAction = () => {
    return (
        <div className='py-[120px]'>
            <ExploreNftHeader title="Live Auction" btnTxt="Explore More" />

            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    action.slice(0, 4).map(item => <LiveActionCart key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default LiveAction