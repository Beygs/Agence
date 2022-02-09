import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import NavItems from "./components/NavItems";
import Toggle from "./components/Toggle";

const sidebar = {
  open: {
    clipPath: "circle(200% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      mass: 1,
      damping: 8,
    },
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      delay: 0.5,
      mass: 0.3,
      damping: 8,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="Navbar">
      <header>
        <NavLink to="/">
          <h1>L&apos;agence</h1>
        </NavLink>
      </header>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="nav-bg" variants={sidebar} />
        <NavItems toggle={() => toggleOpen()} />
        <Toggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default Navbar;
