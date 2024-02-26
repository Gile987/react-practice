import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const components = ["Button", "Counter"];

  const handleSelectComponent = (component) => {
    console.log("Selected component:", component);
    setSelectedComponent(component);
  };

  const componentMap = {
    Button: <Button />,
    Counter: <Counter />,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar
          components={components}
          onSelectComponent={handleSelectComponent}
        />
        <div className="MainContent">
          {selectedComponent && componentMap[selectedComponent]}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
