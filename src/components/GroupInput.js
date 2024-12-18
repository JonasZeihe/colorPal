import React from 'react';
import ColorInputRow from './ColorInputRow';

function GroupInput({ group, onGroupUpdate, onRemove }) {
  const updateColor = (id, updatedColor) => {
    const newColors = group.colors.map((color) =>
      color.id === id ? updatedColor : color
    );
    onGroupUpdate({ ...group, colors: newColors });
  };

  const addColor = () =>
    onGroupUpdate({
      ...group,
      colors: [...group.colors, { id: Date.now(), label: '', color: '' }],
    });

  return (
    <div className="group-input">
      <input
        type="text"
        placeholder="Group Name"
        value={group.groupName}
        onChange={(e) => onGroupUpdate({ ...group, groupName: e.target.value })}
      />
      {group.colors.map((color) => (
        <ColorInputRow
          key={color.id}
          color={color}
          onRemove={() =>
            onGroupUpdate({
              ...group,
              colors: group.colors.filter((c) => c.id !== color.id),
            })
          }
          onChange={(field, value) =>
            updateColor(color.id, { ...color, [field]: value })
          }
        />
      ))}
      <button type="button" onClick={addColor}>
        Add Color
      </button>
      <button type="button" onClick={onRemove}>
        Remove Group
      </button>
    </div>
  );
}

export default GroupInput;
