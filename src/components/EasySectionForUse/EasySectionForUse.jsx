import easyStep from '../../fakeDB/json/easyStep.json'
import EasySectionCart from './EasySectionCart'
const EasySectionForUse = () => {
    return (
        <div className='container mx-auto pt-[88.34px] pb-[151.81px]'>
            <div className='space-y-2'>
                <h2 className='font-syne font-bold text-white text-5xl text-center '>Easy Step For Use</h2>
                <p className='font-manrope font-normal text-white text-base text-center opacity-[0.8] '>Toadipasicing volutpaconsequat. Ullamcorper a lacus vestibulum sarcu Aliquam </p>
            </div>

            <div className='flex justify-around flex-wrap'>
                {
                    easyStep.map(item => <EasySectionCart key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default EasySectionForUse