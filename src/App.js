import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Sidebar from "./components/Sidebar";

function App() {
  const components = ["Component1", "Component2", "Component3"];

  const handleSelectComponent = (component) => {
    console.log("Selected component:", component);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar
          components={components}
          onSelectComponent={handleSelectComponent}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
