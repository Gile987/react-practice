import React from 'react';
import { styled } from '@mui/system';

const SidebarWrapper = styled('div')({
  width: '200px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
});

const ComponentItem = styled('li')({
  listStyle: 'none',
  marginBottom: '10px',
});

const Button = styled('button')({
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  padding: '0',
  width: '100%',
  textAlign: 'left',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

function Sidebar({ components, onSelectComponent }) {
  return (
    <SidebarWrapper>
      <ul className="components-list">
        {components.map((component) => (
          <ComponentItem key={component}>
            <Button onClick={() => onSelectComponent(component)}>
              {component}
            </Button>
          </ComponentItem>
        ))}
      </ul>
    </SidebarWrapper>
  );
}

export default Sidebar;
