import React from 'react';
import BannerSlider from './bannerslider/slider';

import bannerImg from '../../assets/img/banner-img.png';

const Banner = () => {
  return (
    <section className="banner banner--home d-flex">
      <img className="banner__img" src={bannerImg} alt="banner" />
      <div className="container-fluid p-0 d-flex">
        <div className="row w-100 m-0 d-flex">
          <div className="col-md-6 h-50">
            <h2 className="d-none">Section 1</h2>
          </div>
          <div className="col-md-6 banner__content">
            <div className="banner-slider">
              <h2 className="banner-slider__heading">Hi-Tech Batteries</h2>
              <BannerSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
