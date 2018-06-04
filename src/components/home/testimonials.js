import React from 'react';

import SectionHeading from '../common/sectionHeading';
import TestimonialSlider from './testimonials/slider';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <SectionHeading heading="testimonials" />
          </div>
          <div className="col-sm-12 text-center testimonials-wrapper">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
