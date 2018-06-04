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
          content="Power for a "
          highlight="Better Tomorrow"
        />
        <Slide
          content="Power for a "
          highlight="Better Tomorrow"
        />
        <Slide
          content="Power for a "
          highlight="Better Tomorrow"
        />
      </Slider>
    );
  }
}

export default BannerSlider;
