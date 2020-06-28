import React, { useState, useEffect } from 'react'

import Language from '../language'
import Logo from '../logo'
import MenuOption from './option'

import options, { CONTACT_US, getOptionReference} from './options'


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
        className={`menu__container ${scrolled ? 'menu__container--background' : ''}`}
        >
      <div className="menu__container__logo d-flex fb-25">
        <a
          className="menu__container__logo__anchor d-flex fd-row ai-center"
          href="#top"
        >
          <Logo />
          <h1 className="menu__container__logo__anchor__title">
            Folks Hub
          </h1>
        </a>
      </div>
      <div className="menu__container__options d-flex ai-center jc-center fb-50">
        {options?.map(opt =>
          <MenuOption
            key={opt.key}
            name={opt.name}
            reference={opt.reference}
          />
        )}
      </div>
      <div className="menu__container__action d-flex fb-25">
        <div className="menu__container__action__mail-to d-flex ai-center">
          <a href="mailto:hello@folkshub.com">hey@folkshub.com</a>
        </div>
        <Language />
      </div>

    </div>
)};

export default Menu;
