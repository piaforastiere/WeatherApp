import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Location = ({ city }) => {
  //Destruvturing
  //const { city } = props;
  //const city = props.city;

return(
  <div className="locationConst">
    <h1>
      {city}
    </h1>
  </div>
  )
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};
export default Location;
