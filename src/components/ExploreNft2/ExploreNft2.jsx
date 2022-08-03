import explore2 from '../../fakeDB/json/explore2.json'
import ExploreNftHeader from '../ExploreNftHeader/ExploreNftHeader'
import ExploreNft2ItemCart from './ExploreNft2ItemCart'

const ExploreNft2 = () => {
    return (
        <div className='py-[120px]'>

            <ExploreNftHeader title="Explore NFTs" btnTxt="Explore More" />

            <div className='grid place-items-center md:grid-cols-2 lg:grid-cols-4 mt-16 gap-6'>
                {

                    explore2.map(item => <ExploreNft2ItemCart key={item.id} item={item} />)

                }
            </div>

        </div>
    )
}

export default ExploreNft2