import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import iconBack from './img/left-arrow.png';
import styles from './PersonLinkBack.module.scss';

export const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <a
      href='#'
      onClick={handleGoBack}
      className={styles.link}>

      <img className={styles.link__img} src={iconBack} alt='Go Back'></img>
      <span></span> Go Back

    </a>
  )
};

PersonLinkBack.propTypes = {
  text: PropTypes.string,
};

export default PersonLinkBack;