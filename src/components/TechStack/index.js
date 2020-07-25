import React from 'react';

import ButtonAction from '../common/buttonAction'
import Carousel from 'components/common/carousel'

import { Tech } from './tech'
import techs from './techs'

const TechStack = () => (
  <div className="tech-stack">
    <div className="tech-stack__container">
      <div className="tech-stack__container__header">
        <h1
          id="tech-stack"
          className="tech-stack__container__header__title"
        >
          Tech Stack
        </h1>
        <p className="tech-stack__container__header__description">
          How we build it
        </p>
      </div>
      <div className="tech-stack__container__items">
        <Carousel slidesPerPage={6} arrows>
          {techs?.sort((a, b) => a.key - b.key)
                 .flatMap(techGroup => techGroup?.children?.
                    sort((a, b) => a.key - b.key).
                    map(tech =>
                      <Tech
                        key={techGroup.key * tech.key}
                        icon={tech.icon}
                        name={tech.name}
                        color={tech.key}
                      />
                    )
                  )
          }
        </Carousel>
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

export default TechStack;
