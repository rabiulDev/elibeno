import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom'

const CommonHeader = () => {

    const { state } = useLocation()

    return (
        <header className='bg-bgNav bg-no-repeat bg-cover'>
            <div className='container mx-auto relative overflow-x-hidden' >
                <Navbar />

                <div className='mt-[147px] mb-[163px]'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-syne font-bold text-[4rem] text-white'>{state}</h2>
                        <p className='font-manrope font-semibold text-base text-white opacity-[0.8]'>Home {'>'}<span className='text-pink'> {state} </span></p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CommonHeader