import React from 'react';

import Logo from './logo'
import Menu from './Menu'
import Wave from './wave'
import ButtonAction from './common/buttonAction'

import { CONTACT_US, MORE_INFO, getOptionReference} from '../components/Menu/options'

const Welcome = () => (
  <>
    <div className="welcome vh-90 d-flex">
      <Menu />
      <div className="welcome__container h-100">
        <Logo />
        <h1 className="welcome__container__title">Folks Hub</h1>
        <h2 className="welcome__container__subtitle">Let‘s build it together &nbsp; ;)</h2>
        <div >
          <div className="welcome__container__buttons d-flex">
            <ButtonAction
              title="More Info"
              href={getOptionReference(MORE_INFO)}
            />
            <ButtonAction
              title="Contact us"
              href={getOptionReference(CONTACT_US)}
              primary
              />
          </div>
        </div>
      </div>
    </div>
    <Wave />
  </>
);

export default Welcome;
