import { NavItemProps } from "shared/interfaces/interfaces";
import { NavLink } from "react-router-dom";

const NavItem = ({ navItem }: NavItemProps) => (
  <li className="nav-item">
    <NavLink
      to={navItem.route}
    >
      {navItem.name}
    </NavLink>
  </li>
);

export default NavItem;
