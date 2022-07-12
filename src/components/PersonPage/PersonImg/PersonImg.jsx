import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import styles from './PersonImg.module.scss';

const PersonImg = ({ personId, personImg, personName, personFavorite, setPersonFavorite }) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));

      setPersonFavorite(false);
    }
    else {
      dispatch(setPersonToFavorite(
        {
          [personId]: {
            name: personName,
            img: personImg,
          },
        }
      ));

      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personImg} alt={personName}></img>

        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="Add to favorite"
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
        ></img>

      </div>
    </>
  )
};

PersonImg.propTypes = {
  personId: PropTypes.string,
  personImg: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonImg;