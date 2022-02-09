import { NavbarProps } from "shared/interfaces/interfaces";
import { NavLink } from "react-router-dom";

const Navbar = ({ navItems }: NavbarProps) => (
  <nav className="Navbar">
    <ul className="nav-items">
      {navItems.map((navItem) => (
        <li className="nav-item" key={navItem.name}>
          <NavLink
            to={navItem.route}
          >
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
