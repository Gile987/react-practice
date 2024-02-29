import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import Tabs from "./components/Tabs";
import ImageGallery from "./components/ImageGallery";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const components = [
    "Button",
    "Counter",
    "LoginForm",
    "TodoList",
    "Timer",
    "Tabs",
    "ImageGallery",
    "Dropdown",
    "Accordion",
    "ContactForm"
  ];

  const handleSelectComponent = (component) => {
    console.log("Selected component:", component);
    setSelectedComponent(component);
  };

  const componentMap = {
    Button: <Button />,
    Counter: <Counter />,
    LoginForm: <LoginForm />,
    TodoList: <TodoList />,
    Timer: <Timer />,
    Tabs: <Tabs />,
    ImageGallery: <ImageGallery />,
    Dropdown: <Dropdown />,
    Accordion: <Accordion />,
    ContactForm: <ContactForm />
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
