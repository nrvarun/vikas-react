import React from 'react';

import bannerImg from '../../assets/img/banner-img.png';

const Banner = () => {
  return (
    <section className="banner banner--about d-flex">
      <img className="banner__img" src={bannerImg} alt="banner" />
      <div className="container-fluid p-0 d-flex">
        <div className="row w-100 m-0 d-flex">
          <div className="col-12 p-0">
            <h2 className="banner-heading">About us</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
