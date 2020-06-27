import React from 'react';

const MenuOption = ({ name, reference }) => (
  <span className="menu__container__option">
    <a className="menu__container__option__link" href={reference} >
      { name }
    </a>
  </span>
);

export default MenuOption;
