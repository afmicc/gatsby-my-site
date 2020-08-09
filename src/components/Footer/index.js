import React from 'react';

import Newsletter from './newsletter'
import Links from './links'

const Footer = () => (
  <div className="footer">
    <div className="footer__container d-flex fd-column ai-center">
      <Newsletter />
      <Links />
      <div className="footer__container__cc">
        <label>&#169; Folks Hub - {new Date().getFullYear()}</label>
      </div>
    </div>
  </div>
);

export default Footer;
