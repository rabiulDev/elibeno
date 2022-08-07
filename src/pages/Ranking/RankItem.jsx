import React from 'react'

const RankItem = ({ item }) => {
    return (
        <tr className='font-manrope font-normal text-base text-white'>
            <td className='p-4 pr-8'>0{item.rank}</td>
            <td className='p-4 pr-8 flex items-center'> <img className='mr-2' src={item.img} alt="" /> {item.name}</td>
            <td className='p-4 pr-8'>{item.volume}</td>
            <td className='p-4 pr-8 text-[#50FF24]'>{item.day}</td>
            <td className='p-4 pr-8 text-[#FF4242]'>{item.week}</td>
            <td className='p-4 pr-8'>{item.price}</td>
            <td className='p-4 pr-8'>{item.owner}</td>
            <td className='p-4 pr-8'>{item.asset}</td>
        </tr>
    )
}

export default RankItem