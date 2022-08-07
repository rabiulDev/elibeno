import { NavLink } from "react-router-dom"
import dropDownArrow from "../../assets/icons/dropDownArrow.png"
const NavItem = ({ navItem }) => {
    return (
        <div className="navItem relative group">
            <NavLink state={navItem.name} to={navItem.pathName}>
                <span className="hover:text-pink">{navItem.name} {navItem.dropDown && <img className="inline" src={dropDownArrow} alt="" />}</span>
                {
                    navItem.dropDown && <ul className="flex flex-col absolute top-7  py-4 px-4 w-[150px] bg-darkBlue invisible group-hover:visible hover:visible duration-200">
                        {
                            navItem.dropDownItems?.map(item => (
                                <NavLink state={item.name} key={item.id} to={item.pathName} className='text-white hover:text-pink'>{item.name}</NavLink>
                            ))
                        }
                    </ul>
                }
            </NavLink>
        </div >
    )
}

export default NavItem