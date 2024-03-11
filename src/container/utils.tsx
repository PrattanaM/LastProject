import { RGBColor } from 'react-color';

export const hexToRgb = (hex: string): RGBColor => {
    hex = hex.replace(/^#/, '');
  
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
  
    const bigint = parseInt(hex, 16);
  
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
      a: 1,
    };
  };
  