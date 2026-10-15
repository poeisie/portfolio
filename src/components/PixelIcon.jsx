import React from 'react';

// Ícones em pixel art (grade 16x16), desenhados com retângulos
const SHAPES = {
  folder: [
    [1, 3, 6, 1], [1, 4, 1, 10], [7, 4, 8, 1], [14, 5, 1, 9], [1, 13, 14, 1],
    [6, 4, 1, 1], [2, 6, 12, 1],
  ],
  doc: [
    [3, 1, 7, 1], [3, 2, 1, 13], [3, 14, 11, 1], [13, 5, 1, 9], [10, 2, 1, 3], [11, 4, 2, 1], [12, 5, 1, 0],
    [10, 1, 1, 1], [11, 2, 1, 1], [12, 3, 1, 1], [13, 4, 1, 1],
    [5, 6, 6, 1], [5, 8, 6, 1], [5, 10, 4, 1],
  ],
  mail: [
    [1, 3, 14, 1], [1, 4, 1, 9], [14, 4, 1, 9], [1, 12, 14, 1],
    [2, 4, 1, 1], [3, 5, 1, 1], [4, 6, 1, 1], [5, 7, 1, 1], [6, 8, 1, 1], [7, 9, 2, 1],
    [9, 8, 1, 1], [10, 7, 1, 1], [11, 6, 1, 1], [12, 5, 1, 1], [13, 4, 1, 1],
  ],
  brush: [
    [11, 1, 2, 1], [10, 2, 1, 1], [13, 2, 1, 1], [9, 3, 1, 1], [12, 3, 1, 1],
    [8, 4, 1, 1], [11, 4, 1, 1], [7, 5, 1, 1], [10, 5, 1, 1], [6, 6, 1, 1], [9, 6, 1, 1],
    [4, 8, 3, 3], [3, 11, 3, 2], [2, 13, 2, 2],
  ],
};

const PixelIcon = ({ name, size = 40 }) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    shapeRendering="crispEdges"
    aria-hidden="true"
    className="pixel-icon"
  >
    {SHAPES[name].map(([x, y, w, h], i) => (
      <rect key={i} x={x} y={y} width={w} height={h || 1} fill="currentColor" />
    ))}
  </svg>
);

export default PixelIcon;
