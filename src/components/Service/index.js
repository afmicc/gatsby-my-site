import React from 'react';

import Item from './item'
import ButtonAction from '../common/buttonAction'

import services from './services'

const Service = () => (
  <div className="service">
    <div className="service__container">
      <div className="service__container__header">
        <h1
          id="service"
          className="section__container__header__title"
        >
          Services
        </h1>
        <p className="section__container__header__description">
          How we can help you
        </p>
      </div>
      <div className="service__container__items d-flex fw-wrap jc-center">
        {services && services.sort((a, b) => a.key - b.key).map(service =>
          <Item
            key={service.key}
            icon={service.icon}
            name={service.name}
            color={service.key}
          />
        )}
      </div>

      <div className="d-flex jc-center">
        <ButtonAction
          primary
          title="Get started"
          href="#options"
        />
      </div>
    </div>
  </div>
);

export default Service;
