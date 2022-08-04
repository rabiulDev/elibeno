import React from 'react'

const FooterBodyItem = ({ title, items }) => {

    return (
        <div>
            <h2 className='font-syne inline-block font-bold text-lg text-white'>{title}</h2>
            <ul className='mt-10 space-y-4'>
                {
                    items?.map((item, indx) => (
                        <li className='font-manrope text-base text-white opacity-[0.8]' key={indx}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FooterBodyItem