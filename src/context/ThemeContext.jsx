// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Cambiar el tema al clicar el botón
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Guardar la preferencia en el localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};