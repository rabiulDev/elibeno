import React from 'react'
import Logo from '../Logo/Logo'
import { RiFacebookFill } from 'react-icons/ri'
import { GrYoutube } from 'react-icons/gr'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'


const FooterHeader = () => {
    return (
        <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row items-center justify-between'>
            <Logo />


            <div className='flex items-center space-x-4'>
                <div className='footer_social_icon bg-pink border-pink'>
                    <GrLinkedinOption className='text-white' />
                </div>
                <div className='footer_social_icon'>
                    <AiOutlineInstagram className='text-white' />
                </div>
                <div className='footer_social_icon'>
                    <GrYoutube className='text-white' />
                </div>
                <div className='footer_social_icon'>
                    <RiFacebookFill className='text-white' />
                </div>
            </div>
        </div>
    )
}

export default FooterHeader