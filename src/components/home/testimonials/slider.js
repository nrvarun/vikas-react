import React from 'react';

import Slider from 'react-slick';

import Slide from './slide';

import user1 from '../../../assets/img/user1.jpg';
import user2 from '../../../assets/img/user2.jpg';
import user3 from '../../../assets/img/user3.jpg';

class TestimonySlider extends React.PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <Slide
          img={user1}
          content="With greater access to teachers outside of academia, higher education institutions and learning platforms can bring in relevant real-world expertise. For experts, this is a great opportunity to build reputation, meet future peers or customers and increase their impact."
          author="Merry Jain"
        />
        <Slide
          img={user2}
          content="With greater access to teachers outside of academia, higher education institutions and learning platforms can bring in relevant real-world expertise. For experts, this is a great opportunity to build reputation, meet future peers or customers and increase their impact."
          author="Merry Jain"
        />
        <Slide
          img={user3}
          content="With greater access to teachers outside of academia, higher education institutions and learning platforms can bring in relevant real-world expertise. For experts, this is a great opportunity to build reputation, meet future peers or customers and increase their impact."
          author="Merry Jain"
        />
      </Slider>
    );
  }
}

export default TestimonySlider;
