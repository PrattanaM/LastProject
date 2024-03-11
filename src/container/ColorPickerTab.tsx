import React from 'react';
import { ChromePicker, RGBColor } from 'react-color';
import { colorPickerTabStyles, colorPickerTabStyles as styles } from '../styles/ColorPickerTabStyle';

interface ColorPickerTabProps {
  label: string;
  color: RGBColor;
  onChange: (color: RGBColor) => void;
}

const ColorPickerTab: React.FC<ColorPickerTabProps> = ({ label, color, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const styles = colorPickerTabStyles(color);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: any) => {
    onChange(color.rgb);
  };

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      ) : null}
      <span>{label}</span>
    </div>
  );
};

export default ColorPickerTab;