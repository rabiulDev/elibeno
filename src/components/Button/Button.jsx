import React from 'react'

const Button = ({ btnText, btnType }) => {
    return (
        <>
            <button type='button' className={`${btnType === 'fill' ? 'bg-pink border border-pink' : btnType === 'outline' ? 'border border-pink' : ''} px-4 py-2 rounded font-manrope font-semibold text-sm text-white`} >
                {btnText}
            </button>
        </>
    )
}

export default Button