import collection from '../../fakeDB/json/collection.json'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import CollectionCart from './CollectionCart'
import rightArrow from '../../assets/icons/whitearrow.png'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import "swiper/css/navigation";

const Collection = () => {
    return (

        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>
                <Swiper slidesPerView={1} modules={[Navigation]} navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}>

                    <SwiperSlide>
                        <div className='flex gap-6 flex-wrap place-content-center'>
                            {
                                collection.map(item => <CollectionCart key={item.id} item={item} />)
                            }
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex gap-6 flex-wrap place-content-center'>
                            {
                                collection.map(item => <CollectionCart key={item.id} item={item} />)
                            }
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex gap-6 flex-wrap place-content-center'>
                            {
                                collection.map(item => <CollectionCart key={item.id} item={item} />)
                            }
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className='flex items-center justify-center mt-16 '>
                    <div className='prev flex items-center justify-center w-10 h-10 bg-lightBlue rounded-full hover:cursor-pointer'> <img className='rotate-180' src={rightArrow} alt="" />  </div>
                    <div className='next flex items-center justify-center w-10 h-10 bg-pink rounded-full ml-2 hover:cursor-pointer'> <img src={rightArrow} alt="" />  </div>
                </div>
            </div>
        </div>
    )
}

export default Collection