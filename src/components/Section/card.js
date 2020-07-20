import React from 'react';
import { colorDecider } from 'utils'

const Card = ({title, content, children, color, background }) => (
  <div className={ `card ${background ? 'card--background-default' : 'card--background-inverse' } d-flex fd-column` }>
    <h2 className={ `card__title m-0 ${colorDecider(color)}` }>{title}</h2>
    <p className="card__text m-0">
      {children || content}
    </p>
  </div>
);

export default Card;
