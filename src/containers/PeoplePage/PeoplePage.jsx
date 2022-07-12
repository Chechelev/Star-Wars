import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { useQueryParams } from '@hooks/useQueryParams';
import { getApiResource, changeHTTP } from '@utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img
        };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url))
      setErrorApi(false);
    }
    else {
      setErrorApi(true);
    };
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      {!people && <h1>Loading...</h1>}
      {people &&
        <>
          <PeopleNavigation
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
          />
          <PeopleList people={people}></PeopleList>
        </>
      }
    </>
  )
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};


export default withErrorApi(PeoplePage);