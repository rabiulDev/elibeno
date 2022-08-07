import React from 'react'

const WalletItems = ({ item }) => {
    return (
        <li className='flex items-center justify-between px-[100px] py-4 bg-lightBlue rounded-lg'>
            <div className='flex items-center '>
                <div><img src={item.img} alt="" /> </div>
                <div className='ml-8 text-white w-[582.52px]'>
                    <h2 className='font-syne font-bold text-2xl'>{item.name}</h2>
                    <p className='font-manrope font-normal text-base opacity-[0.8]'>{item.desc}</p>
                </div>
            </div>

            <div>
                <button className='py-3 px-6 rounded-lg bg-darkBlue hover:bg-pink font-redHatDisplay font-medium text-white text-base'>Connect</button>
            </div>
        </li>
    )
}

export default WalletItems