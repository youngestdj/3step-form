import React from 'react';
import PropTypes from 'prop-types';

const PreviousButton = ({ currentStep, decrementStep }) => (
  <>
    {
      (currentStep !== 1) ? <button className="left" onClick={decrementStep}>Previous</button> : null
    }
  </>
);

PreviousButton.propTypes = {
  currentStep: PropTypes.number.isRequired,
  decrementStep: PropTypes.func.isRequired
};

export default PreviousButton;
