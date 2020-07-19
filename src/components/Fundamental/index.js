import React from 'react';

import cards from './cardContents'
import Section from '../Section'

const Fundamental = () => (
  <Section
    id="fundamentals"
    title="Fundamentals"
    message="Are you aligned with our principles?"
    cards={cards}
    button={{ title: 'Let‘s build it!', href: '#option'}}
    background
  />
);

export default Fundamental;
