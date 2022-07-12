import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import iconBookmark from './img/bookmark.svg'

import styles from './Favorite.module.scss';

const Favorite = () => {
  const [count, setCount] = useState();

  const storeData = useSelector(
    (state) => state.favoriteReducer
  );

  useEffect(() => {
    const length = Object.keys(storeData).length;
    setCount(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorite">
        <span className={styles.counter}>{count > 99 ? '...' : count}</span>
        <img
          className={styles.icon}
          src={iconBookmark}
          alt="Favorites" />
      </Link>
    </div>
  )
};



export default Favorite;