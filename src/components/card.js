import React from 'react';

const Card = ({title, content, children }) => (
  <div className="card d-flex fd-column">
    <h2 className="card__title m-0">{title}</h2>
    <p className="card__text m-0">
      {children || content}
    </p>
  </div>
);

export default Card;
