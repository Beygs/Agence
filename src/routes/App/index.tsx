import React, { useMemo, useState } from "react";
import ThemeContext from "shared/contexts/ThemeContext";
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
        <div className="background">
          <div className="noise" />
        </div>
        <div className="wrapper">
          <Navbar />
          {routing}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
