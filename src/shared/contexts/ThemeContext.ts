import { createContext } from "react";

interface ThemeContextInterface {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export default ThemeContext;
