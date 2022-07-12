import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from '@ui/UiButton';

import styles from './PeopleNavigation.module.scss';

const PeopleNavigation = ({
  getResource, prevPage, nextPage, counterPage
}) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={styles.buttons__container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UiButton
          text='Previous'
          onClick={handleChangePrev}
          disabled={!prevPage}
        ></UiButton>
      </Link>

      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UiButton
          text='Next'
          onClick={handleChangeNext}
          disabled={!nextPage}
        ></UiButton>
      </Link>
    </div>
  )
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;