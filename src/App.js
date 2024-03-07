import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import LoginForm from "./components/LoginForm/LoginForm";
import TodoList from "./components/TodoList/TodoList";
import Timer from "./components/Timer/Timer";
import Tabs from "./components/Tabs/Tabs";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Dropdown from "./components/Dropdown/Dropdown";
import Accordion from "./components/Accordion/Accordion";
import ContactForm from "./components/ContactForm/ContactForm";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import Calendar from "./components/Calendar/Calendar";
import Slider from "./components/Slider/Slider";
import ColorPicker from "./components/ColorPicker/ColorPicker";
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
    "ContactForm",
    "WeatherWidget",
    "Calendar",
    "Slider",
    "ColorPicker",
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
    ContactForm: <ContactForm />,
    WeatherWidget: <WeatherWidget />,
    Calendar: <Calendar />,
    Slider: <Slider />,
    ColorPicker: <ColorPicker />,
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
