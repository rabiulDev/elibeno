import React from 'react'
import banner from '../../assets/home/banner.png'
import uploadIcon from '../../assets/icons/upload2.png'
const Hero = () => {
    return (
        <section className='container mx-auto mt-12 lg:mt-[170px]'>
            <div className='flex items-center justify-between flex-col-reverse lg:flex-row space-y-10 lg:space-y-0'>

                <div className=' max-w-[615px] text-white text-center md:text-left'>
                    <h1 className='font-syne font-bold text-[3rem] md:text-[4rem]'> Collect rare digital arts & nft’s today.</h1>
                    <p className='font-manrope font-normal text-xl md:text-2xl opacity-[0.8]'>Business requests of best or shall it global lorem is assignment. From</p>
                    <button className='px-4 py-3 rounded bg-pink font-manrope font-bold text-base mt-7 lg:mt-14'>Upload Item <img className='inline-block ml-2' src={uploadIcon} alt="" /></button>
                    <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row mt-14 font-syne font-bold text-5xl'>
                        <div>
                            <h2> 68,686+ </h2>
                            <p className='font-montserrat font-normal opacity-[0.8] text-2xl'>nft’s Items</p>
                        </div>
                        <div className='md:ml-16'>
                            <h2>6.68 ETH</h2>
                            <p className='font-montserrat font-normal opacity-[0.8] text-2xl'>Last Bid</p>
                        </div>
                    </div>
                </div>

                <div className=' lg:max-w-[538px] lg:max-h-[591.74px]'>

                    <img className='w-full h-full' src={banner} alt="" />

                </div>
            </div>
        </section>
    )
}

export default Hero