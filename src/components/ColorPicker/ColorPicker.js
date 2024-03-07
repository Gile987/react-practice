import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0, opacity: 1 });

  const updateColor = (e) => {
    setColor({
      ...color,
      [e.target.name]: e.target.value,
    });
  };

  const rgbaColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`;

  return (
    <div style={{ backgroundColor: rgbaColor, padding: '10px' }}>
      <p>Selected Color: {rgbaColor}</p>
      {['red', 'green', 'blue'].map((colorName) => (
        <div key={colorName}>
          <label>{colorName.charAt(0).toUpperCase() + colorName.slice(1)}: </label>
          <input type="range" min="0" max="255" name={colorName} value={color[colorName]} onChange={updateColor} />
        </div>
      ))}
      <div>
        <label>Opacity: </label>
        <input type="range" min="0" max="1" step="0.01" name="opacity" value={color.opacity} onChange={updateColor} />
      </div>
    </div>
  );
};

export default ColorPicker;