import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from '@components/Header';
import routesConfig from '@routes/routesConfig';

import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header></Header>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </>
  )
};

export default App;
