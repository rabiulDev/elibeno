import collection from '../../fakeDB/json/collection.json'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import CollectionCart from './CollectionCart'
import rightArrow from '../../assets/icons/whitearrow.png'
const Collection = () => {
    return (

        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>
                <div className='flex gap-6 flex-wrap place-content-center'>
                    {
                        collection.map(item => <CollectionCart key={item.id} item={item} />)
                    }
                </div>
                <div className='flex items-center justify-center mt-16 '>
                    <div className='flex items-center justify-center w-10 h-10 bg-lightBlue rounded-full hover:cursor-pointer'> <img className='rotate-180' src={rightArrow} alt="" />  </div>
                    <div className='flex items-center justify-center w-10 h-10 bg-pink rounded-full ml-2 hover:cursor-pointer'> <img src={rightArrow} alt="" />  </div>
                </div>
            </div>
        </div>
    )
}

export default Collection