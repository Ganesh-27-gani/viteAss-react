import React, { useContext } from 'react';
import { ThemeContext } from './ThemeApp';  

const MainText = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-content">
      <h1>Welcome to the Theme Switcher App!</h1>
      <p>The current theme is {theme}.</p>
    </div>
  );
};

export default MainText;
