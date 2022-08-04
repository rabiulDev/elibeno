import React from 'react'
import rightArrow from '../../assets/icons/rightArrow.png'
import FooterBodyItem from './FooterBodyItem'
const FooterBody = () => {
    return (
        <div className='mt-16 border-b-2 border-t-2 border-dashed border-[#9EA2C5] border-opacity-[0.3]'>
            <div className='flex items-center justify-center xl:justify-between flex-wrap'>
                <div className='w-[312px] py-16'>
                    <p className='font-manrope font-normal text-base text-white leading-7 opacity-[0.8]'>Be can of packed he sighed. On into table is take titles bits avoid afforded step, up true,a ancient indication</p>
                    <div className='border border-dashed border-[#9EA2C5] border-opacity-[0.3] rounded-md p-[5px] flex items-center justify-between mt-4'>
                        <input className='bg-transparent pl-3 focus:outline-none font-manrope text-sm text-white opacity-[0.6]' placeholder='Enter email address' type="text" />
                        <div className='w-10 h-10 rounded-lg bg-pink flex items-center justify-center hover:cursor-pointer'>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center w-[700px] py-16'>
                    <div className='grow'>
                        <FooterBodyItem title="Marketplace" items={["Categoies", "Affiliate Program", "FAQs", "News & Press"]} />
                    </div>

                    <div className='grow'>
                        <FooterBodyItem title="Explore" items={["Explore Artwork", "Single Artwork", "Creators", "Single Creator"]} />
                    </div>

                    <div className='grow'>
                        <FooterBodyItem title="Navigation" items={["Home", "Explore", "Collection", "Author"]} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBody