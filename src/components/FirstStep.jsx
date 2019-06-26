import React from 'react';
import PropTypes from 'prop-types';

const FirstStep = ({ currentStep, updateInput, input }) => {
  if (currentStep !== 1) return null;

  return (
    <>
      <h2>Step 1</h2>
      <input name="name" value={input.name} placeholder="Name" type="text" onChange={updateInput} />
      <input name="email" value={input.email} placeholder="Email" type="email" onChange={updateInput} />
      <input name="password" value={input.password} placeholder="Password" type="password" onChange={updateInput} />
      <input name="confirmPassword" value={input.confirmPassword} placeholder="Re-enter Password" type="password" onChange={updateInput} />
    </>
  );
};

FirstStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  updateInput: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired
};

export default FirstStep;
