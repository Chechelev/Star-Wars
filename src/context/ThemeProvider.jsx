import React, { useContext, useState, useEffect } from "react";

import { changeSccsVariables } from '@services/changeSccsVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEUTRAL = 'neutral';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);

  const change = (name) => {
    setTheme(name);
    changeSccsVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);