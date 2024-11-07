import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import './ThemeButton.css';


const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === "light" ? <FiSun className="icon" /> : <FiMoon className="icon" />}
    </button>
  )
}

export default ThemeButton;