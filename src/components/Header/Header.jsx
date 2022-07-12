import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Favorite from '@components/Favorite';

import imgDroid from './img/droid.svg';
import imgLightSaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const isTheme = useTheme();
  const [icon, setIcon] = useState(imgDroid);

  const checkPeopleLocation = () => {
    if (location.pathname.includes('people')) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    switch (isTheme.theme) {

      case THEME_LIGHT:
        setIcon(imgLightSaber)
        break;

      case THEME_DARK:
        setIcon(imgSpaceStation)
        break;

      case THEME_NEUTRAL:
        setIcon(imgDroid)
        break;

      default: setIcon(imgDroid);
    }
  }, [isTheme]);

  return (
    <>
      <nav className={styles.nav__container}>
        <NavLink to="/" exact>
          <img className={styles.logo} src={icon} alt="Logo" />
        </NavLink>

        <ul className={styles.list__container}>
          <li><NavLink to="/" exact>Home</NavLink> </li>
          <li><NavLink to="/people/?page=1" className={checkPeopleLocation() ? 'active' : null} >People</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
          <li><NavLink to="/not-found">Not Found</NavLink></li>
          <li><NavLink to="/fail">Fail</NavLink></li>
        </ul>
        <Favorite />
      </nav>
    </>
  )
};

export default Header;