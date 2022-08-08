import React from 'react'

const LeaderboardListItem = ({ item }) => {
    return (
        <li className='flex items-center flex-wrap justify-between p-6 bg-lightBlue rounded-lg'>
            <div className='flex items-center'>
                <div className='mr-11 font-manrope font-bold text-2xl text-white'> <img className='inline-block' src={item.icon} alt="" /> {item.id}.</div>
                <img src={item.img} alt="" />
                <div className='text-white ml-2'>
                    <h3 className='font-syne font-bold text-base'>{item.name}</h3>
                    <p className='font-manrope font-normal text-xs opacity-[0.8]'>{item.author}</p>
                </div>
            </div>

            <div className='flex items-center flex-wrap gap-6 relative'>
                {
                    item.products.map(product => <div className='w-[100px] h-[100px] rounded-[100px]'>
                        <img src={product.img} alt="" />

                    </div>)
                }

                <span className='absolute right-8 font-manrope font-normal text-base text-white '>40+</span>
            </div>
        </li>
    )
}

export default LeaderboardListItem