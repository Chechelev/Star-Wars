import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchPageInfo.module.scss';

const SearchPageInfo = ({ people }) => {

  return (
    <>
      {people.length
        ?
        (<ul className={styles.list__container}>

          {people.map(({ id, name, img }) =>
            <>
              <li className={styles.list__item} key={id}>
                <Link to={`/people/${id}`}>
                  <img className={styles.person__img} src={img} alt={name} />
                  <span className={styles.person__name}>{name}</span>
                </Link>
              </li>
            </>
          )}

        </ul>)
        : <h2 className='comment'>No Results</h2>
      }
    </>
  )
};

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;