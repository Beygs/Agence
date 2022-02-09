import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "shared/contexts/ThemeContext";

const ToggleTheme = () => {
  const theme = useContext(ThemeContext);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="ToggleTheme" data-ison={theme?.darkMode} role="button" tabIndex={0} onClick={theme?.toggleTheme}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

export default ToggleTheme;
