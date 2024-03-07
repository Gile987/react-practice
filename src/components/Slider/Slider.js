import { useState } from "react";

const Slider = ({ min = 0, max = 100, step = 0.5, onChange = () => {} }) => {
  const [value, setValue] = useState(min || 0);

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <div>Value: {value}</div>
    </div>
  );
};

export default Slider;
