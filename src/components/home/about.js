import React from 'react';

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
              desc="Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that is why it is so complicated."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
