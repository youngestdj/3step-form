
import React from 'react';
import PropTypes from 'prop-types';

const ThirdStep = ({ currentStep, updateInput, input }) => {
  if (currentStep !== 3) return null;
  return (
    <>
      <h2>Step 3</h2>
      <input name="address1" value={input.address1} placeholder="Address line 1" type="text" onChange={updateInput} required />
      <input name="address2" value={input.address2} placeholder="Address line 2" type="text" onChange={updateInput} required />
      <input name="zip" value={input.zip} placeholder="Zip code" type="text" onChange={updateInput} required />
      <input name="city" value={input.city} placeholder="City" type="text" onChange={updateInput} required />
      <input name="state" value={input.state} placeholder="State" type="text" onChange={updateInput} required />
    </>
  );
};

ThirdStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  updateInput: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired
};

export default ThirdStep;
