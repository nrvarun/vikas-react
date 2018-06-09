import React from 'react';

// import SectionHeading from '../common/sectionHeading';
import SectionDescription from '../common/sectionDesc';

const About = () => {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center aboutus__content mb-5">
            {/* <SectionHeading heading="about us"  */}
            <SectionDescription
              desc="VIKAS INDUSTRIES - a well known company for top quality products, established for the manufacture of various types of Lead Acid Batteries in a wide range, is situated at PUTTUR, Dakshina Kannada district, India."
            />
            <SectionDescription
              desc="The factory is fully equipped with various modern battery manufacturing machineries such as Grid Casting, Paste Mixing, Plate Formation / Drying & above all, the state of the art fully computerized Charging and Product Line Testing (PLT), Capacity Testing systems to ensure products of the highest quality standards. The company has extensive technical know-how for manufacturing various types of batteries through the active association with the top notch professionals in the field of battery manufacturing."
            />
            <SectionDescription
              desc="This has resulted in producing a range of top quality batteries to meet the ever growing demand and expectations from our valued customers."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
