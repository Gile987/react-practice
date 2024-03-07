import { useState } from 'react';
import { styled } from '@mui/material';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  const DropdownWrapper = styled('div')({
    position: 'relative',
    display: 'inline-block',
  });
  
  const DropdownToggle = styled('div')({
    background: '#ccc',
    color: 'white',
    padding: '0.625rem',
    cursor: 'pointer',
  });
  
  const DropdownMenu = styled('ul')({
    position: 'absolute',
    background: 'white',
    minWidth: '10rem',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    padding: '0.75rem 1rem',
    zIndex: 1,
  });
  
  const DropdownItem = styled('li')({
    padding: '0.625rem',
    cursor: 'pointer',
  });
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownWrapper>
      <DropdownToggle onClick={toggleDropdown}>
        Toggle Dropdown
      </DropdownToggle>
      {isOpen ? (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem key={option.id}>{option.name}</DropdownItem>
          ))}
        </DropdownMenu>
      ) : null}
    </DropdownWrapper>
  );
};

export default Dropdown;
