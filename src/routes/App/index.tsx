import React, { useMemo, useState } from "react";
import ThemeContext from "shared/contexts/ThemeContext";
import routes from "shared/constants/routes";
import Navbar from "routes/App/components/Navbar";
import { useRoutes } from "react-router-dom";
import AppRoutes from "routes/App/routes";

const App = () => {
  const routing = useRoutes(AppRoutes);

  const [darkMode, setDarkMode] = useState(false);

  const themeCtxValue = useMemo(() => ({
    darkMode,
    toggleTheme: () => setDarkMode(!darkMode),
  }), []);

  return (
    <ThemeContext.Provider value={themeCtxValue}>
      <div className={`App ${darkMode ? "theme--dark" : "theme--light"}`}>
        <Navbar navItems={Object.values(routes)} />
        {routing}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
