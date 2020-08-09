import React from 'react';

import menuOptions from 'components/Menu/options'
import mediaOptions from './medias'

const Links = () => (
  <div className="links w-100">
    <div className="links__container d-flex fd-row">
      <div className="links__container__section">
        <h3 className="links__container__section__name">Folks Hub</h3>
      </div>

      <div className="links__container__section">
        <ul>
          <li>
            Montevideo, Uruguay
          </li>
          <li>
            <a href="tel:+59855555555">+598 55 555 555</a>
          </li>
          <li>
            <a href="mailto:hey@folkshub.com">hey@folkshub.com</a>
          </li>
        </ul>
      </div>

      <div className="links__container__section">
        <ul>
          { menuOptions?.map(option => (
              <li>
                <a href={option.reference}>{option.name}</a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="links__container__section">
        <ul className="links__container__section__medias m-0">
          { mediaOptions?.map(option => (
              <li>
                <a href={option.reference} target="_blank">{option.icon}</a>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  </div>
);

export default Links;
