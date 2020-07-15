import React from 'react';

import Card from '../card'
import cardContents from './cardContents'
import ButtonAction from '../common/buttonAction'

const Fundamental = () => (
  <div className="about-us">
    <div className="about-us__container w-100 d-flex">
      <div className="about-us__container__header d-flex fd-column jc-center">
        <h1
          id="fundamentals"
          className="about-us__container__header__title"
        >
          Fundamentals
        </h1>
        <p className="about-us__container__header__description">
          Are you aligned with our principles?
        </p>
        <br />
        <div className="d-flex jc-center">
          <ButtonAction
            primary
            title="Let‘s build it!"
            href='#option'
          />
        </div>
      </div>
      <div className="about-us__container__points d-flex fw-wrap jc-center">
        {cardContents.sort((a, b) => a.key - b.key).map((card) =>
          <Card key={card.key} title={card.title}>
            {card.content}
          </Card>
        )}
      </div>
    </div>
  </div>
);

export default Fundamental;
