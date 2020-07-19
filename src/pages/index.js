import React from 'react'

import Welcome from '../components/welcome'
import AboutUs from '../components/AboutUs'
import Fundamental from '../components/Fundamental'
import Wave from '../components/Wave'

const Index = () => (
  <>
    <hidden id='top'/>

    <Welcome />
    <AboutUs />
    <Wave number={1} />
    <Fundamental />
    <Wave number={2} />

    {/* TODO: delete */}
    <div className="vh-100"></div>
    <h3 id="option">I‘m an option</h3>
  </>
);

export default Index;
