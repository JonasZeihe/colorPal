// src/components/TextInputImport.js
import React, { useState } from 'react';
import parseClipboardText from '../utils/parseClipboardText';

function TextInputImport({ onImport }) {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    const colors = parseClipboardText(text);
    onImport(colors);
  };

  return (
    <div className="text-input-import">
      <textarea
        value={inputText}
        onChange={handleTextChange}
        placeholder="Fügen Sie Ihre Farbdefinitionen hier ein..."
        rows={10}
        className="text-input-area"
      />
    </div>
  );
}

export default TextInputImport;
