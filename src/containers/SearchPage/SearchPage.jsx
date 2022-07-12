import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { API_SEARCH } from '@constants/api';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@ui/UiInput';

import styles from './SearchPage.module.scss';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {

        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img
        }
      });

      setErrorApi(false);
      setPeople(peopleList);

    } else {
      setErrorApi(true);
    }

  };

  useEffect(() => {
    getResponse('');
  }, []);

  const debouncedGetResponce = useCallback(
    debounce(value => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponce(value)
  };

  return (
    <>
      <h1 className='header__text'>Search</h1>
      <UiInput
        handleInputChange={handleInputChange}
        value={inputSearchValue}
        placeholder={'Search character'}
        classes={styles.input__search}>
      </UiInput>
      <SearchPageInfo people={people}></SearchPageInfo>
    </>
  )
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);