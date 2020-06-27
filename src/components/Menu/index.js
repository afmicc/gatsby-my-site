import React, { useState, useEffect } from 'react'

import MenuOption from './option'
import options from './options'

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  if (!scrolled) return <></>;
  return (
    <div
        className={`menu__container w-100 ${scrolled ? 'menu__container--background' : ''}`}
        >
      {options?.map(opt =>
        <MenuOption
          key={opt.key}
          name={opt.name}
          reference={opt.reference}
        />
      )}
    </div>
)};

export default Menu;
