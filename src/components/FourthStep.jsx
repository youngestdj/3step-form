/* eslint-disable react/jsx-no-bind */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const FourthStep = (props) => {
  const { currentStep } = props;
  if (currentStep !== 4) return null;

  const [selected, setSelected] = useState({
    plan: null,
    monthly: null,
    yearly: null,
    submitted: false
  });

  const selectButton = (event) => {
    event.preventDefault();
    const plan = event.target.name;
    if (plan === 'monthly') {
      setSelected({
        ...selected, monthly: 'selected-plan', yearly: null, plan: 'monthly',
      });
      return;
    }
    setSelected({
      ...selected, monthly: null, plan: 'yearly', yearly: 'selected-plan'
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (selected.monthly || selected.yearly) {
      setSelected({ ...selected, submitted: true });
      return props.history.push('/success-message');
    }
  };

  if (selected.submitted) {
    return (
      <h3>Thanks for filling this form</h3>
    );
  }

  return (
    <>
      <h2>Select a plan</h2>
      <button name="monthly" onClick={selectButton} className={selected.monthly}>Monthly plan</button>
      <button name="yearly" onClick={selectButton} className={selected.yearly}>Yearly plan</button>
      <input type="submit" value="Submit" onClick={submitForm} />
    </>
  );
};

FourthStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(FourthStep);
