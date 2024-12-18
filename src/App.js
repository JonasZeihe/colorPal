import React, { useState } from 'react';
import ColorPaletteForm from './components/ColorPaletteForm';
import TextInputImport from './components/TextInputImport';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [colorGroups, setColorGroups] = useState([]); // Initialisiere als leeres Array
  const [darkMode, setDarkMode] = useState(false);

  const handleGroupChange = (newGroups) => setColorGroups(newGroups);

  const handleTextImport = (importedGroups) => {
    setColorGroups(importedGroups);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Color Palette Generator</h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <TextInputImport onImport={handleTextImport} />
      <ColorPaletteForm
        colorGroups={colorGroups}
        onGroupChange={handleGroupChange}
      />
    </div>
  );
}

export default App;
