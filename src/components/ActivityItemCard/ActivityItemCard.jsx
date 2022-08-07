import React from 'react'
import clock from '../../assets/icons/clock.png'
const ActivityItemCard = ({ item }) => {
    return (

        <li className='flex items-center justify-between p-6 rounded-lg bg-lightBlue hover:cursor-pointer'>
            <div className='flex items-center'>
                <div className='w-[88px] h-[88px] rounded-full'>
                    <img className='w-full h-full' src={item.img} alt="" />
                </div>
                <div className='ml-4 text-white'>
                    <p className='font-syne font-bold text-2xl'>{item.name}</p>
                    <span className='font-manrope font-medium text-xs'>{item.title}</span>
                </div>
            </div>

            <div className='flex items-center'>
                <img src={clock} alt="" />
                <span className='ml-2 font-manrope font-normal text-base text-white'>{item.time}</span>
            </div>
        </li>

    )
}

export default ActivityItemCard