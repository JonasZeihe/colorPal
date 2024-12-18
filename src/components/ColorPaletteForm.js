import React from 'react';
import GroupInput from './GroupInput';

function ColorPaletteForm({ colorGroups = [], onGroupChange }) {
  const addGroup = () =>
    onGroupChange([
      ...colorGroups,
      {
        id: Date.now(),
        groupName: '',
        colors: [{ id: Date.now(), label: '', color: '' }],
      },
    ]);

  const updateGroup = (id, updatedGroup) => {
    const newGroups = colorGroups.map((group) =>
      group.id === id ? updatedGroup : group
    );
    onGroupChange(newGroups);
  };

  const removeGroup = (id) => {
    const newGroups = colorGroups.filter((group) => group.id !== id);
    onGroupChange(newGroups);
  };

  return (
    <div className="color-palette-form">
      {colorGroups.map((group) => (
        <GroupInput
          key={group.id}
          group={group}
          onGroupUpdate={(updatedGroup) => updateGroup(group.id, updatedGroup)}
          onRemove={() => removeGroup(group.id)}
        />
      ))}
      <button type="button" className="add-group-button" onClick={addGroup}>
        Add Group
      </button>
    </div>
  );
}

export default ColorPaletteForm;
