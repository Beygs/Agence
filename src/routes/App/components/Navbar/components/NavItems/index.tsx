import routes from "shared/constants/routes";
import { motion } from "framer-motion";
import { ToggleProps } from "shared/interfaces/interfaces";
import NavItem from "./components/NavItem";

const NavItems = ({ toggle }: ToggleProps) => {
  const navItems = Object.values(routes);

  const variants = {
    open: {
      display: "block",
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      display: "none",
      transition: {
        delay: 0.4,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.ul
      variants={variants}
      className="nav-items menu"
    >
      {navItems.map((navItem) => (
        <NavItem navItem={navItem} key={navItem.name} toggle={toggle} />
      ))}
    </motion.ul>
  );
};

export default NavItems;
