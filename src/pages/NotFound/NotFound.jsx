import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col items-center'>
                <h1 className='font-syne font-semibold text-2xl text-white'>404 | Page Not Found</h1>
                <Link to='/' className='px-3 py-2 bg-pink font-manrope font-medium text-base text-white rounded-lg mt-3'>Go to Home</Link>
            </div>
        </div>
    )
}

export default NotFound