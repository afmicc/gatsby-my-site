import React from 'react';

const ButtonAction = ({ title, primary, ...props }) => (
  <a className={`action action__${primary ? 'primary' : 'secondary'}`}
    {...props}
  >
      {title}
  </a>
);

export default ButtonAction;
