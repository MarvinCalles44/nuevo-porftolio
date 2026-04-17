import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import "./ThemeToggle.css"; // Assuming you have a CSS file for styling

export const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
            <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
        </button>
        
    );

}