import React from 'react';

import FooterText from './footerText';
import SectionHeading from '../../common/sectionHeading';
import MyMapComponent from './GoogleMap';

import mailIcon from '../../../assets/img/mail.svg';
import phoneIcon from '../../../assets/img/phone.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__location-details">
        <div className="footer__map">
          <MyMapComponent
            isMarkerShown={false}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXy1BqkAoOR5OSCiO4nVvXHo4m9XZiRfs"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '350px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <div className="footer__map-data">
          <div>
            <SectionHeading classes="section-heading section-heading--normal mb-3" heading="get in touch" />
            <address className="footer__address">1-5/1, Mura, Nehru Nagar, Puttur, D.K. District, Karnataka State. India. PIN: 574 203</address>
            <div className="d-flex align-items-center mb-3">
              <img className="contact-icon" src={phoneIcon} alt="mail icon" aria-label="mail icon" />
              <p className="contact-item m-0">+91 8251 231445/ 232445</p>
            </div>
            <div className="d-flex align-items-center">
              <img className="contact-icon" src={mailIcon} alt="mail icon" aria-label="mail icon" />
              <a className="contact-item text-underline" href="mailto:omvikasindustries@gmail.com">omvikasindustries@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__content d-sm-flex w-100 justify-content-between align-items-center">
        <FooterText text="© Copyright 2018, VIKAS Industries. All rights reserved." />
        <FooterText text="Crafted by : Design Garrage" />
      </div>
    </footer>
  );
};

export default Footer;
