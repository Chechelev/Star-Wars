import React from "react";

import ChooseSide from '@components/HomePage/ChooseSide';
//import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

const HomePage = () => {

  //можно использовать для localStorage
  // const isTheme = useTheme();
  // const [icon, setClassname] = useState('');

  // useEffect(() => {
  //   switch (isTheme.theme) {

  //     case THEME_LIGHT:
  //       setClassname('header__text-light')
  //       break;

  //     case THEME_DARK:
  //       setClassname('header__text-dark')
  //       break;

  //     case THEME_NEUTRAL:
  //       setClassname('header__text-neutral')
  //       break;

  //     default: setClassname('header__text-neutral');
  //   }
  // }, [isTheme]);

  return (
    <>
      <h1 className="header__text">Home Page</h1>
      <ChooseSide></ChooseSide>
    </>
  )
};

export default HomePage;