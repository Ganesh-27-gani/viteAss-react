import React, { createContext, useState } from 'react';
import Footer from './Footer';
import MainText from './MainText';
import Header from './Header';

export const ThemeContext = createContext();

export const ThemeApp = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ height: '600px' }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`ThemeApp ${theme}`}>
          <Header />
          <MainText />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeApp;
