  
import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({ open, handleClick }) => {
  let cssClass = 'custom-button';
  if (open) {
    cssClass += ' custom-button--open';
  }

  return (
    <button
      className={cssClass}
      type="button"
      onClick={() => {
        handleClick();
      }}
    >
      🏋️
    </button>
  );
};

CustomButton.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomButton;
