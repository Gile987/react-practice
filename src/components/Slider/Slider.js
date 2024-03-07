import { useState } from "react";
import { styled } from "@mui/system";
import { Slider } from "@mui/material";

// Using MUI Slider instead of a simple input element, only because it's easy to style
const NeonSlider = styled(Slider)({
  color: '#FF6EC7',
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0 0 0 8px rgba(255, 110, 199, 0.16)',
    },
  },
});

const SliderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#000',
  padding: '1.25rem',
  borderRadius: '0.625rem',
});

const ValueContainer = styled('div')({
  marginTop: '1.25rem',
  color: '#EA00D9',
  fontSize: '1.25rem',
});

const SliderComponent = ({ min = 0, max = 100, step = 1, onChange = () => {} }) => {
  const [value, setValue] = useState(min || 0);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <SliderContainer>
      <NeonSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <ValueContainer>Value: {value}</ValueContainer>
    </SliderContainer>
  );
};

export default SliderComponent;
