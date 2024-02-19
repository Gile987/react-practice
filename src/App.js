import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;
