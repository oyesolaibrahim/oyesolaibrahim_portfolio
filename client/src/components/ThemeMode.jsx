import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    mainBackgroundColor: '#000000',
    navBackgroundColor: '#333333',
    buttonBackgroundColor: '#FFD700',
    spanBackgroundColor: '#FFD700',
    navDivbackgroundColor: '#666666',
    technologiesBackgroundColor: '#333333',
    technologiesBorder: '1px solid #333333',
    technologiesPercentagesBackgroundColor: '#FFD700',
    technologiesPercentagesBorder: '1px solid ##FFD700',
    h3BackgroundColor: '#FFD700',
    labelsBackgroundColor: '#333333'
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme}}
>      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
  
