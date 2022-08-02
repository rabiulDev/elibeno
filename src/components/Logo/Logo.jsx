import logo from '../../assets/icons/logo.png'

const Logo = () => {
    return (
        <div className="flex items-center">
            <img className='w-[40.97px] h-[40px] inline-block' src={logo} alt="" />
            <span className='font-syne font-bold text-4xl text-white ml-1'>Elibeno</span>
        </div>
    )
}

export default Logo