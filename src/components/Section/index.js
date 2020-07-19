import React from 'react';
import { arrayOf, bool, node, number, string, shape } from 'prop-types';

import Card from './card'
import ButtonAction from '../common/buttonAction'

const Section = ({id, title, message, cards, button, headerOnRight, background }) => console.log('button', button) ||  (
  <div className={
    `section ${headerOnRight ?
                ('bg-right ' + (background ? 'bg-right-color': 'bg-right-default')) :
                ('bg-left ' + (background ? 'bg-left-color': 'bg-left-default'))
              }`
    }
  >
    <div className={
      `section__container d-flex ${headerOnRight ? 'fd-row-reverse' : ''}`
      }>
      <div className="section__container__header d-flex fd-column jc-center">
        <h1
          id={id}
          className="section__container__header__title"
        >
          {title}
        </h1>
        <p className="section__container__header__description">
          {message}
        </p>
        <br />
        <div className="d-flex jc-center">
          {button &&
            <ButtonAction
              primary
              title={button.title}
              href={button.href}
            />
          }
        </div>
      </div>
      <div className="section__container__points d-flex fw-wrap jc-center">
        {cards && cards.sort((a, b) => a.key - b.key).map((card) =>
          <Card key={card.key} title={card.title} color={card.key} background={background}>
            {card.content}
          </Card>
        )}
      </div>
    </div>
  </div>
);

Section.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  message: string.isRequired,
  headerOnRight: bool,
  background: bool,
  cards: arrayOf(
    shape({
      key: number.isRequired,
      title: string.isRequired,
      content: node.isRequired,
    })
  ),
  button: shape({
    title: string.isRequired,
    href: string.isRequired,
  }),
};

export default Section;
