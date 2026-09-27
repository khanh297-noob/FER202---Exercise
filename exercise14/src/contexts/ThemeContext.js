import React, { createContext, useState, useContext } from 'react';

// Bảng màu theo đúng đặc tả của đề bài
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb"
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeValues = {
    theme: themes[currentTheme],
    currentTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook tiện lợi để lấy context
export const useTheme = () => useContext(ThemeContext);