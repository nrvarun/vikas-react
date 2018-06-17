import React from 'react';

import { NavLink } from 'react-router-dom';

import SectionHeading from '../common/sectionHeading';
import SectionDescription from '../common/sectionDesc';

const About = () => {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center aboutus__content">
            <SectionHeading heading="about us" />
            <SectionDescription
              desc="VIKAS INDUSTRIES - a well known company for top quality products, established for the manufacture of various types of Lead Acid Batteries in a wide range, is situated at PUTTUR, Dakshina Kannada district, India."
            />
            <NavLink className="button mt-2" to="/about">
              read more
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
