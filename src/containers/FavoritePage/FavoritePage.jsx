import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
  const [people, setPeople] = useState([]);

  const storeData = useSelector(
    (state) => state.favoriteReducer
  );

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map(item => {

        return {
          id: item[0],
          //...item[1]
          name: item[1].name,
          img: item[1].img
        }
      })
      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className='header__text'>FavoritePage</h1>
      {people.length
        ? <PeopleList people={people}></PeopleList>
        : <h2 className='comment'>No data</h2>
      }
    </>
  )
};

export default FavoritePage;