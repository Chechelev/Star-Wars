import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import icon from './img/cancel.svg';

import styles from './UiInput.module.scss';

const UiInput = ({ handleInputChange, value, classes, placeholder }) => {

  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
      />
      <img
        className={cn(styles.clear, !value && styles.clear__disabled)}
        src={icon}
        alt="Delete"
        onClick={() => value && handleInputChange('')}
      />
    </div>
  )
};

UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string
};

export default UiInput;