import { useState } from "react";
import {
  Wrapper,
  Controls,
  SelectedColor,
  RgbaColor,
  ColorControl,
  Label,
  Input,
  ColorDisplay,
} from "./ColorPickerStyles";

const ColorPicker = () => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0, alpha: 1 });
  const [hexColor, setHexColor] = useState("#000000");

  const updateColor = (e) => {
    const updatedColor = {
      ...color,
      [e.target.name]: e.target.value,
    };
    
    setColor(updatedColor);
  
    const hexColor = rgbToHex(updatedColor.red, updatedColor.green, updatedColor.blue);
    setHexColor(hexColor);
  };

  function rgbToHex(r, g, b) {
    r = parseInt(r, 10).toString(16);
    g = parseInt(g, 10).toString(16);
    b = parseInt(b, 10).toString(16);
  
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
  
    return "#" + r + g + b;
  }

  const rgbaColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;

  return (
    <Wrapper>
      <Controls>
        <SelectedColor>Selected Color:</SelectedColor>
        <RgbaColor>{rgbaColor}</RgbaColor>
        <RgbaColor>{hexColor}</RgbaColor>
        {["red", "green", "blue"].map((colorName) => (
          <ColorControl key={colorName}>
            <Label>
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}:{" "}
            </Label>
            <Input
              type="range"
              min="0"
              max="255"
              name={colorName}
              value={color[colorName]}
              onChange={updateColor}
            />
          </ColorControl>
        ))}
        <ColorControl>
          <Label>Alpha: </Label>
          <Input
            type="range"
            min="0"
            max="1"
            step="0.01"
            name="alpha"
            value={color.alpha}
            onChange={updateColor}
          />
        </ColorControl>
      </Controls>
      <ColorDisplay bgcolor={rgbaColor} />
    </Wrapper>
  );
};

export default ColorPicker;
