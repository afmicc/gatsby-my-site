import React from 'react';

const MenuOption = ({ name, reference }) => (
  <span className="menu-option d-flex ai-center">
    <a className="menu-option__link" href={reference} >
      { name }
    </a>
  </span>
);

export default MenuOption;
