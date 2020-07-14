import React from 'react';

import Card from '../card'
import cardContents from './cardContents'
import ButtonAction from '../common/buttonAction'
import Wave from '../wave'

const AboutUs = () => (
  <div className="about-us">
    <div className="about-us__container w-100 d-flex">
      <div className="about-us__container__header d-flex fd-column jc-center">
        <h1
          id="about-us"
          className="about-us__container__header__title"
        >
          About Us
        </h1>
        <p className="about-us__container__header__description">Meet us and how we can develop your product</p>
        <br />
        <div className="d-flex jc-center">
          <ButtonAction
            primary
            title="Get in touch!"
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

export default AboutUs;
