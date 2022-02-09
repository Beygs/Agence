import { useEffect, useMemo, useState } from "react";
import ThemeContext from "shared/contexts/ThemeContext";
import Navbar from "routes/App/components/Navbar";
import { useRoutes, useLocation } from "react-router-dom";
import AppRoutes from "routes/App/routes";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const routing = useRoutes(AppRoutes);

  const preferedColorScheme = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

  const [darkMode, setDarkMode] = useState(() => {
    const colorTheme = localStorage.getItem("colorTheme");

    if (!colorTheme) {
      localStorage.setItem("colorTheme", "");
      return preferedColorScheme;
    }

    return JSON.parse(colorTheme);
  });

  const themeCtxValue = useMemo(() => ({
    darkMode,
    toggleTheme: () => setDarkMode(!darkMode),
  }), [darkMode]);

  useEffect(() => {
    localStorage.setItem("colorTheme", JSON.stringify(darkMode));
  }, [darkMode]);

  const location = useLocation();

  return (
    <ThemeContext.Provider value={themeCtxValue}>
      <div className={`App ${darkMode ? "theme--dark" : "theme--light"}`}>
        <div className="background">
          <div className="noise" />
        </div>
        <div className="wrapper">
          <Navbar />
          <AnimatePresence>
            <motion.main
              key={location.pathname.split("/")[1]}
              initial={{
                opacity: 0,
                y: 200,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                y: -100,
                zIndex: -1,
              }}
            >
              {routing}
            </motion.main>
          </AnimatePresence>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
