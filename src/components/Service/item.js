import React from 'react';

import { colorDecider } from 'utils'

const Item = ({ icon, name, color }) => {
  const decorator = colorDecider(color)

  return (
    <div className="item d-flex fd-column ai-center">
      <div className={`item__icon ${decorator}`}>
        {icon}
      </div>
      <div className={`item__text br-20 ${decorator}`}>
        <h3>{name}</h3>
      </div>
    </div>
  )
};

export default Item;
