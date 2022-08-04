import { NavLink } from "react-router-dom"

const NavItem = ({ navItem }) => {
    return (
        <div className="navItem">
            <NavLink state={navItem.name} to={navItem.pathName}>
                <span>{navItem.name}</span>
            </NavLink>
        </div >
    )
}

export default NavItem