import whiteLoadingSpinner from '../../assets/icons/whiteLoadingSpinner.png'

const ExploreBtn = () => {
    return (
        <button className='w-[172px] h-[51px] bg-pink rounded-lg text-white block mx-auto mt-16 font-manrope font-semibold text-base '>Explore More
            <img className='inline-block ml-2' src={whiteLoadingSpinner} alt="" />
        </button>
    )
}

export default ExploreBtn