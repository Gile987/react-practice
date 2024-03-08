import { styled } from '@mui/system';

export const Wrapper = styled('div')({
  display: 'flex',
  height: '20vh',
  gap: '0.625rem',
  padding: '0.625rem',
  backgroundColor: '#f5f5f5',
  boxSizing: 'border-box',
});

export const ColorDisplay = styled('div')(({ bgcolor }) => ({
  flex: 1,
  height: '100%',
  backgroundColor: bgcolor,
  border: '2px solid #000',
  borderRadius: '0.625rem',
  boxSizing: 'border-box',
}));

export const Controls = styled('div')({
  padding: '0.625rem',
  flex: 1,
  border: '2px solid #000',
  borderRadius: '0.625rem',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  backgroundImage: 'linear-gradient(120deg, #fbfb 0%, #ebedee 100%)',
  boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
});

export const ColorControl = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.625rem',
});

export const Label = styled('label')({
  marginRight: '0.625rem',
  width: '3.125rem',
  fontFamily: '"Courier New", Courier, monospace',
});

export const SelectedColor = styled('p')({
  fontWeight: 'bold',
  fontSize: '1.2em',
  color: '#333',
  marginBottom: '0',
});

export const RgbaColor = styled('p')({
  fontSize: '1.2em',
  color: '#333',
  marginTop: '0',
});

export const Input = styled('input')({
  flex: 1,
});