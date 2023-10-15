import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  // Validation
  const icon = currentTheme === "dark" ? faSun : faMoon;
  const toggleValidation = currentTheme === "dark" ? "light" : "dark";
  const handleThemeValidation = currentTheme === "dark" ? "dark" : "";

  // Functions
  const handleChangeTheme = () =>
    document.documentElement.setAttribute("theme", handleThemeValidation);

  const toggleTheme = () => {
    setCurrentTheme(toggleValidation);
    localStorage.setItem("theme", toggleValidation);
    handleChangeTheme();
  };

  if (!currentTheme) {
    localStorage.setItem("theme", "light");
    setCurrentTheme("light");
    handleChangeTheme();
  }

  handleChangeTheme();

  return <FontAwesomeIcon icon={icon} onClick={() => toggleTheme()} />;
};
