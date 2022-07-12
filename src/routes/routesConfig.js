import React from 'react';
import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import FavoritePage from '@containers/FavoritePage';
import NotFoundPage from '@containers/NotFoundPage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/people',
    element: <PeoplePage />
  },
  {
    path: '/people/:id',
    element: <PersonPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/favorite',
    element: <FavoritePage />
  },
  {
    path: '/fail',
    element: <ErrorMessage />
  },
  // { тк и так непонятный путь без выдавать ошибку
  //   path: '/not-found',
  //   element: <NotFoundPage />
  // },
  {
    path: '*',
    element: <NotFoundPage />
  },
];

export default routesConfig;