import React from 'react';

export const TechGroup = ({ name, techs }) => (
  <div className="tech__group d-flex fd-column ai-center">
    <div className="tech__group__items d-flex jc">
      {
        techs && techs.map(tech =>
          <Tech
            key={tech.key}
            icon={tech.icon}
            name={tech.name}
            color={tech.key}
          />
        )
      }
    </div>
    <div className="tech__group__bar w-100"></div>
    <div className="tech__group__title">
      <h3 className="m-0 bg-none">
        {name}
      </h3>
    </div>
  </div>
);

export const Tech = ({ icon, name }) => {
  return (
    <div className="tech d-flex fd-column ai-center">
      <div className="tech__icon">
        {icon}
        <h4 className="tech__icon__text">
          {name}
        </h4>
      </div>
    </div>
  )
};
