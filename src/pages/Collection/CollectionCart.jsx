import React from 'react'

const CollectionCart = ({ item }) => {
    return (
        <div className="w-[200px] h-[240px] rounded-lg relative group hover:cursor-pointer">
            <img src={item.img} alt="" />

            <div className='w-[200px] h-[240px] bg-black absolute top-0 left-0 rounded-lg invisible group-hover:opacity-[0.7] group-hover:visible'></div>
            <div className='absolute font-jost text-center text-white top-[91.5px] left-[49px] invisible group-hover:visible'>
                <h3 className='font-bold text-base'>{item.name}</h3>
                <h4 className=' font-normal text-xs text-[#C1C5E0]'>{item.qty}</h4>
                <p className='flex items-center'><img src={item.img2} alt="" /> <span className='ml-1 text-xs'>{item.author}</span></p>
            </div>
        </div>
    )
}

export default CollectionCart