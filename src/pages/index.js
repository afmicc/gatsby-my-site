import React from 'react'

import Welcome from 'components/welcome'
import AboutUs from 'components/AboutUs'
import Fundamental from 'components/Fundamental'
import Wave from 'components/Wave'
import Service from 'components/Service'
import TechStack from 'components/TechStack'
import Contact from 'components/Contact'

const Index = () => (
  <>
    <hidden id='top'/>

    <Welcome />
    <AboutUs />
    <Wave number={1} />
    <Fundamental />
    <Wave number={2} />
    <Service />
    <TechStack />
    <Wave number={1} />
    <Contact />
    <Wave number={2} />
  </>
);

export default Index;
