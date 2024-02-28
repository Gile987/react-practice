import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      id: 1,
      title: "Accordion Title 1",
      content: "Content in Accordion 1",
    },
    {
      id: 2,
      title: "Accordion Title 2",
      content: "Content in Accordion 2",
    },
    {
      id: 3,
      title: "Accordion Title 3",
      content: "Content in Accordion 3",
    },
  ];

  /*
  We can also use useCallback to memoize the function and prevent unnecessary re-renders.

  const toggleAccordion = useCallback((index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [activeIndex]);
  
  The function will only be re-created when the activeIndex changes.
  */

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = items.map((item) => (
    <div key={item.id} className="accordion-item">
      <div
        className={`accordion-title ${activeIndex === item.id ? "active" : ""}`}
        onClick={() => toggleAccordion(item.id)}
      >
        {item.title}
      </div>
      {activeIndex === item.id && (
        <div className="accordion-content">{item.content}</div>
      )}
    </div>
  ));

  return <div className="accordion">{accordionItems}</div>;
};

export default Accordion;
