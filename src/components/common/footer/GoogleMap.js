
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

/* eslint-disable */

const defaultMapOptions = {
  fullscreenControl: false,
  disableDefaultUI: true
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 12.780095, lng: 75.174238 }}
    defaultOptions={defaultMapOptions}
  >
    {props.isMarkerShown && <Marker position={{ lat: 12.780095, lng: 75.174238 }} />}
  </GoogleMap>
));

/* eslint-enable */

export default MyMapComponent;
