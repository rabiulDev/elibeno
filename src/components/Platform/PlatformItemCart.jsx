import React from 'react'

const PlatformItemCart = ({ item }) => {
    return (
        <div className=' h-[120px] w-[200px] bg-darkBlue flex justify-center items-center rounded-lg hover:bg-pink hover:cursor-pointer '>
            <div className='flex flex-col items-center'>
                <img src={item.img} alt="" />
                <h2 className='font-redHatDisplay font-bold text-base text-[#C1C5E0] mt-4'>{item.name}</h2>
            </div>
        </div>
    )
}

export default PlatformItemCart