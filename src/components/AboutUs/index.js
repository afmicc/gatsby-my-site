import React from 'react';

import cards from './cardContents'
import Section from '../Section'

const AboutUs = () => (
  <Section
    id="about-us"
    title="About Us"
    message="Meet us and how we can develop your product"
    cards={cards}
    button={{ title: 'Get in touch!', href: '#option'}}
    headerOnRight
  />
);

export default AboutUs;
