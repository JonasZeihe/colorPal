// src/utils/generateSVG.js
const generateSVG = (colorGroups, darkMode) => {
  const swatchWidth = 120;
  const swatchHeight = 120;
  const margin = 20;
  const textHeight = 24;
  const swatchesPerRow = 5;

  const svgWidth = (swatchWidth + margin) * swatchesPerRow - margin;
  const svgHeight =
    (swatchHeight + margin + textHeight * 2) *
      colorGroups.reduce(
        (acc, group) => acc + Math.ceil(group.colors.length / swatchesPerRow),
        0
      ) *
      2 +
    margin * 3;

  let svgContent = `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${svgWidth}" height="${svgHeight / 2}" fill="${
        darkMode ? '#333' : '#fff'
      }" />
      <rect x="0" y="${svgHeight / 2}" width="${svgWidth}" height="${
        svgHeight / 2
      }" fill="${darkMode ? '#555' : '#fafafa'}" />
  `;

  let yPositionTop = margin;
  let yPositionBottom = svgHeight / 2 + margin;

  colorGroups.forEach((group) => {
    svgContent += `
      <g id="${group.groupName}_Top_Swatches">
        <text x="${margin}" y="${yPositionTop - 10}" fill="${
          darkMode ? 'white' : 'black'
        }" font-size="18">${group.groupName}</text>
    `;
    svgContent += `
      <g id="${group.groupName}_Bottom_Swatches">
        <text x="${margin}" y="${yPositionBottom - 10}" fill="${
          darkMode ? 'white' : 'black'
        }" font-size="18">${group.groupName}</text>
    `;

    group.colors.forEach((color, index) => {
      const row = Math.floor(index / swatchesPerRow);
      const col = index % swatchesPerRow;
      const x = col * (swatchWidth + margin);
      const yTop =
        yPositionTop + row * (swatchHeight + margin + textHeight * 2);
      const yBottom =
        yPositionBottom + row * (swatchHeight + margin + textHeight * 2);

      svgContent += `
        <g id="${group.groupName}_${color.label}_Top_Swatch">
          <rect x="${x}" y="${yTop}" width="${swatchWidth}" height="${swatchHeight}" fill="${
            color.color
          }" rx="10" ry="10"/>
          <text x="${x + 10}" y="${yTop - 10}" fill="${
            darkMode ? 'white' : 'black'
          }" font-size="15">${color.label}</text>
          <text x="${x + 10}" y="${yTop + swatchHeight + 18}" fill="${
            darkMode ? 'white' : 'black'
          }" font-size="12">${color.color}</text>
        </g>
      `;
      svgContent += `
        <g id="${group.groupName}_${color.label}_Bottom_Swatch">
          <rect x="${x}" y="${yBottom}" width="${swatchWidth}" height="${swatchHeight}" fill="${
            color.color
          }" rx="10" ry="10"/>
          <text x="${x + 10}" y="${yBottom - 10}" fill="${
            darkMode ? 'white' : 'black'
          }" font-size="15">${color.label}</text>
          <text x="${x + 10}" y="${yBottom + swatchHeight + 18}" fill="${
            darkMode ? 'white' : 'black'
          }" font-size="12">${color.color}</text>
        </g>
      `;
    });
    yPositionTop +=
      Math.ceil(group.colors.length / swatchesPerRow) *
        (swatchHeight + margin + textHeight * 2) +
      margin;
    yPositionBottom +=
      Math.ceil(group.colors.length / swatchesPerRow) *
        (swatchHeight + margin + textHeight * 2) +
      margin;
  });

  svgContent += '</svg>';
  return svgContent;
};

export default generateSVG;
