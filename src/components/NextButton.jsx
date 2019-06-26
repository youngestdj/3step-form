import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ currentStep, incrementStep }) => (
  <>
    {
      (currentStep < 4) ? <button className="right" onClick={incrementStep}>Next</button> : null
    }
  </>
);

NextButton.propTypes = {
  currentStep: PropTypes.number.isRequired,
  incrementStep: PropTypes.func.isRequired,
};

export default NextButton;
