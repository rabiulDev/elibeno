import React from 'react'

const ExploreNft2ItemCart = ({ item }) => {
    return (
        <div>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className='mt-4 text-white font-syne space-y-2'>
                <h2 className='font-bold text-base'>{item.title}</h2>
                <p><span className='font-manrope text-xs font-normal opacity-[0.8] mr-1'>{item.author}</span> <img className='inline-block' src={item.checkIcon} alt="" /> </p>
                <div className='flex items-center font-medium text-xs'>
                    <p className='flex items-center'> <img className='w-3 h-3' src={item.dimondIcon} alt="" /> <span className='ml-1'>{item.items}</span>  </p>
                    <p className='flex items-center ml-2'> <img className='w-3 h-3' src={item.outlineHeartIcon} alt="" /> <span className='ml-1'>{item.reaction}</span>  </p>
                </div>
            </div>
        </div>
    )
}

export default ExploreNft2ItemCart