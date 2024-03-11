import reactCSS from 'reactcss';
import { RGBColor } from 'react-color';

type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

export const colorPickerTabStyles = (color: RGBColor) => reactCSS({
  'default': {
    color: {
      width: '360px',
      height: '14px',
      borderRadius: '2px',
      background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    },
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
      marginRight: '10px',
    },
    popover: {
      position: 'absolute' as Position,
      zIndex: '2',
    },
    cover: {
      position: 'fixed' as Position,
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  },
});
