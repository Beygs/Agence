import { NavItemProps } from "shared/interfaces/interfaces";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavItem = ({ navItem, toggle }: NavItemProps) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          stiffness: 1000,
          velocity: -100,
        },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: {
          stiffness: 1000,
        },
      },
    },
  };

  return (
    <motion.li
      className="nav-item"
      variants={variants}
    >
      <NavLink
        to={navItem.route}
        onClick={toggle}
      >
        {navItem.name}
      </NavLink>
    </motion.li>
  );
};

export default NavItem;
