import React from 'react';

import waves from './waves'

const Wave = ({ number }) => (
  <div className="wave">
    {(number && waves[number]) || waves[0]}
  </div>
);

export default Wave;
