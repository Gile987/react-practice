import { useState } from "react";

const Tab = ({ label, isActive, onClick }) => (
  <div
    className={`tab ${isActive ? "active" : ""}`}
    onClick={onClick}
    style={{
      cursor: "pointer",
      padding: "10px",
      color: isActive ? "blue" : "black",
      borderBottom: isActive ? "2px solid blue" : "none",
      display: "inline-block",
    }}
  >
    {label}
  </div>
);

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: "1", label: "Tab 1", content: "Content for Tab 1" },
    { id: "2", label: "Tab 2", content: "Content for Tab 2" },
    { id: "3", label: "Tab 3", content: "Content for Tab 3" },
  ];

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={selectedTab === index}
            onClick={() => setSelectedTab(index)}
          />
        ))}
      </div>
      <div
        className="tab-content"
        style={{
          marginTop: "20px",
          padding: "20px",
          borderLeft: "2px solid red",
          borderBottom: "2px solid violet",
          borderTop: "2px solid green",
          borderRight: "2px solid blue",
          maxWidth: "400px",
        }}
      >
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default Tabs;
