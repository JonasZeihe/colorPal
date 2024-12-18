import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme, darkTheme } from '../styles/GlobalStyles';

function ThemeToggle({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
      >
        {/* Label is now properly associated with the checkbox */}
        <label htmlFor="theme-toggle-checkbox" style={{ marginRight: '8px' }}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </label>
        <input
          id="theme-toggle-checkbox"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          style={{ display: 'none' }} // Hide the checkbox but keep it accessible
        />
        {/* Button now includes an explicit type */}
        <button
          type="button"
          onClick={toggleTheme}
          style={{
            background: isDarkMode
              ? darkTheme.colors.primary
              : lightTheme.colors.primary,
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
      </div>
      {children}
    </ThemeProvider>
  );
}

export default ThemeToggle;
