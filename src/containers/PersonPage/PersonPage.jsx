import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { withErrorApi } from '@hoc-helpers/withErrorApi';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonImg from '@components/PersonPage/PersonImg';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@ui/UiLoading';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';

import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.scss';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImg, setPersonImg] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector(
    (state) => state.favoriteReducer
  );

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: 'Gender', data: res.gender },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
        ]);

        setPersonName(res.name);
        setPersonImg(getPeopleImage(id))

        res.films.length && setPersonFilms(res.films)

        setErrorApi(false);
      }
      else {
        setErrorApi(true);
      };

    })();
  }, []);

  // return (
  //   <>
  //     {!personName && !personInfo && !personImg && !personFilms && <UiLoading />}

  //     {personName && personInfo && personImg && personFilms && (
  //       <>
  //         <PersonLinkBack />

  //         <div className={styles.wrapper}>
  //           <span className={styles.person__name}>{personName}</span>

  //           <div className={styles.container}>
  //             <PersonImg
  //               personId={personId}
  //               personImg={personImg}
  //               personName={personName}
  //               personFavorite={personFavorite}
  //               setPersonFavorite={setPersonFavorite}
  //             />
  //             <PersonInfo personInfo={personInfo} />

  //             <Suspense fallback={<h1>Loading</h1>}>
  //               <PersonFilms personFilms={personFilms}></PersonFilms>
  //             </Suspense>

  //           </div>
  //         </div>
  //       </>
  //     )}
  //   </>
  // )

  // как у чела из видоса
  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>

          <PersonImg
            personId={personId}
            personImg={personImg}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
