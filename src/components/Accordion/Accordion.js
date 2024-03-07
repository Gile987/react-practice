import { useState } from "react";
import { styled } from "@mui/material";

const AccordionWrapper = styled('div')({
  backgroundColor: 'lightgray',
  padding: '1rem',
});

const AccordionItem = styled('div')({
  marginBottom: '1rem',
  backgroundColor: 'white',
});

const AccordionTitle = styled('div')({
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '1rem',

});

const AccordionContent = styled('div')({
  paddingLeft: '1rem',
  paddingBottom: '1rem',
});

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
  P.s. useCallback is not necessary in this case, because we use only one state variable in the function, and
  the function is not passed as a prop to other components.
  */

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = items.map((item) => (
    <AccordionItem key={item.id}>
      <AccordionTitle onClick={() => toggleAccordion(item.id)}>
        {item.title}
      </AccordionTitle>
      {activeIndex === item.id && (
        <AccordionContent>{item.content}</AccordionContent>
      )}
    </AccordionItem>
  ));

  return <AccordionWrapper>{accordionItems}</AccordionWrapper>;
};

export default Accordion;
