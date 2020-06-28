import React from 'react';

const ButtonAction = ({ title, primary, children, ...props }) => (
  <a className={`action action__${primary ? 'primary' : 'secondary'}`}
    {...props}
  >
      {title || children}
  </a>
);

export default ButtonAction;
