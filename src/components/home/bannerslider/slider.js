import React from 'react';

import Slider from 'react-slick';
import Slide from './slide';

class BannerSlider extends React.PureComponent {
  render() {
    const settings = {
      speed: 500,
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <Slide
          content="Best Quality"
          highlight="Best Price"
        />
        <Slide
          content="Suitable for all types of"
          highlight="Ups and Inverters"
        />
        <Slide
          content="High Performance on all"
          highlight="Solar applications"
        />
      </Slider>
    );
  }
}

export default BannerSlider;
