import React from 'react';
import { useColorStore } from './colorStoreMyComponent';

const MyComponent: React.FC = () => {
  const { mainBackground, background, textOnBackground, setMainBackground, setBackground, setTextOnBackground } = useColorStore();

  return (
    <div>
      <div style={{ backgroundColor: mainBackground, padding: '10px' }}>
        <p style={{ color: textOnBackground }}>Main Content</p>
      </div>

      <div style={{ backgroundColor: background, padding: '10px' }}>
        <p style={{ color: textOnBackground }}>Secondary Content</p>
      </div>

      <div>
        <label>Main Background Color: </label>
        <input type="color" value={mainBackground} onChange={(e) => setMainBackground(e.target.value)} />
      </div>

      <div>
        <label>Background Color: </label>
        <input type="color" value={background} onChange={(e) => setBackground(e.target.value)} />
      </div>

      <div>
        <label>Text Color on Background: </label>
        <input type="color" value={textOnBackground} onChange={(e) => setTextOnBackground(e.target.value)} />
      </div>
    </div>
  );
};

export default MyComponent;
