import React from 'react';

const Card = ({title, content, children, color }) => (
  <div className="card d-flex fd-column">
    <h2 className={ `card__title m-0 card__title--${gerColor(color)}` }>{title}</h2>
    <p className="card__text m-0">
      {children || content}
    </p>
  </div>
);

const colors = ['', 'red', 'yellow', 'blue', 'green']
const gerColor = key => colors.length <= key || !key ? colors[1] : colors[key]

export default Card;
