// src/utils/parseClipboardText.js

function parseClipboardText(text) {
  const lines = text.split('\n');
  const colors = [];
  let currentGroup = '';

  lines.forEach((originalLine) => {
    const line = originalLine.trim(); // Avoid direct assignment to parameters

    if (line.startsWith('#') || !line) return;

    if (!line.includes(':')) {
      currentGroup = line;
    } else {
      const [label, color] = line.split(':').map((part) => part.trim());
      if (color && color.startsWith('#')) {
        colors.push({ group: currentGroup, label, color });
      } else {
        colors.push({ group: currentGroup, label, color: '' });
      }
    }
  });

  return colors;
}

export default parseClipboardText;
