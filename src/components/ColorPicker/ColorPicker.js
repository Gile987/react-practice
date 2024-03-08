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

  const updateColor = (e) => {
    setColor({
      ...color,
      [e.target.name]: e.target.value,
    });
  };

  const rgbaColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;

  return (
    <Wrapper>
      <Controls>
        <SelectedColor>Selected Color:</SelectedColor>
        <RgbaColor>{rgbaColor}</RgbaColor>
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
