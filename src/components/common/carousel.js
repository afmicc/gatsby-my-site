import React from 'react';

import ReactCarousel, { autoplayPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Arrow, { directions } from './arrow'

const Carousel = ({ arrows = false, children, slidesPerPage = 2 }) => {
  const arrowsProps =
    arrows ?
    {
      arrowLeft: <Arrow direction={directions.left} />,
      arrowRight: <Arrow direction={directions.right} />,
      addArrowClickHandler: true
    } : undefined

  return (
    <ReactCarousel
      animationSpeed={1000}
      autoPlay={2000}
      infinite
      slidesPerPage={slidesPerPage}
      stopAutoPlayOnHover
      {...arrowsProps}
    >
      {children}
    </ReactCarousel>
  )
};

export default Carousel;
