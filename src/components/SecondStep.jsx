
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const limit = (val, max) => {
  if (val.length === 1 && val[0] > max[0]) {
    val = `0${val}`;
  }
  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }
  return val;
};

const formatDate = (val) => {
  const day = limit(val.substring(2, 4), '31');
  const month = limit(val.substring(0, 2), '12');
  const year = limit(val.substring(4, 8), '2019');
  const result = `${month} / ${day} / ${year}`;
  return result;
};
const SecondStep = ({ currentStep, updateInput, input }) => {
  if (currentStep !== 2) return null;
  return (
    <>
      <h2>Step 2</h2>
      <NumberFormat
        format={formatDate}
        name="dob"
        value={input.dob}
        placeholder="Date of birth"
        onChange={updateInput}
      />
      <NumberFormat
        name="phone"
        placeholder="Phone number"
        format="+1 (###) ###-####"
        value={input.phone}
        onChange={updateInput}
      />
      <select name="gender" onChange={updateInput}>
        <option>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </>
  );
};

SecondStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  updateInput: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired
};

export default SecondStep;
