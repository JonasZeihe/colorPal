import React from 'react';
import generateSVG from '../utils/generateSVG';

function SVGPreview({ colors }) {
  const exportSVG = () => {
    const svgData = generateSVG(colors);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'color_palette.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="svg-preview">
      <h2>SVG Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: generateSVG(colors) }} />
      <button type="button" onClick={exportSVG}>
        Download SVG
      </button>
    </div>
  );
}

export default SVGPreview;
