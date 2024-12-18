// src/components/ColorInputRow.js
import React from 'react';

function ColorInputRow({ color, onRemove, onChange }) {
  return (
    <div className="color-input-row">
      <input
        type="text"
        placeholder="Group Name"
        value={color.group}
        onChange={(e) => onChange('group', e.target.value)}
      />
      <input
        type="text"
        placeholder="#FFFFFF"
        value={color.color}
        onChange={(e) => onChange('color', e.target.value)}
      />
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default ColorInputRow;
