import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import NavItem from "./NavItem"
import { CgMenu } from 'react-icons/cg'
import { useState } from "react"

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [navBg, setNavBg] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavBg(true)
        } else {
            setNavBg(false)
        }
    };

    window.addEventListener('scroll', changeBackground);
    const navItems = [
        { id: 1, pathName: '/', name: 'Home' },
        {
            id: 2, pathName: '/explore', name: 'Explore', dropDown: true, dropDownItems: [
                { id: 1, pathName: '/explore/liveauction', name: 'Live Auction' },
                { id: 2, pathName: '/explore/wallet', name: 'Wallet' }
            ]
        },

        { id: 3, pathName: '/activity', name: 'Activity' },
        { id: 4, pathName: '/ranking', name: 'Ranking' },
        {
            id: 5, pathName: '/pages', name: 'Pages', dropDown: true, dropDownItems: [
                { id: 1, pathName: '/pages/collection', name: 'Collection' },
                { id: 2, pathName: '/pages/leaderboard', name: 'Leaderboard' },
                { id: 3, pathName: '/pages/create-items', name: 'Create Items' },
            ]
        },
        { id: 6, pathName: '/contact', name: 'Contact' }
    ]

    return (
        <section className='sticky top-0'>
            <nav className={` ${navBg ? 'bg-lightBlue' : 'bg-transparent'} py-6`}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">

                        {/* LOGO */}
                        <div>
                            <Logo />
                        </div>

                        {/* NAV ITEMS */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {
                                navItems.map(navItem => <NavItem key={navItem.id} navItem={navItem} />)
                            }
                        </div>

                        {/* NAV BUTTONS */}
                        <div className=" hidden lg:block space-x-2 ">

                            <Button btnText='Login' btnType='outline' />
                            <Button btnText='Singup' btnType='fill' />

                        </div>

                        {/* HAMBURGER MENU */}

                        <div className="hover:cursor-pointer lg:hidden w-6 h-6" onClick={() => setMenu(!menu)}>
                            {menu ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <CgMenu className="w-6 h-6 text-white" />}
                        </div>

                    </div>

                    {/* MOBILE MENU */}

                    {/* EVENT LISTENER BLOCK FOR CLOSE MENU */}
                    <div onClick={() => setMenu(false)} className={`absolute lg:hidden ${menu ? 'block' : 'hidden'} top-0 left-0 w-screen h-screen bg-transparent`}>
                    </div>

                    <div onClick={() => setMenu(false)} className={`absolute lg:hidden ${menu ? 'right-0' : ' -right-[300px]'} top-20 bg-lightBlue p-8 space-y-6 max-w-xs h-[inherit] duration-300 z-30`}>
                        {
                            navItems.map(navItem => <NavItem key={navItem.id} navItem={navItem} />)
                        }
                        <div className="space-x-2 ">

                            <Button btnText='Login' btnType='outline' />
                            <Button btnText='Singup' btnType='fill' />

                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar