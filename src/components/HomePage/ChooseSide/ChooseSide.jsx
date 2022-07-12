import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import lightSide from './img/light-side.jpg'
import falcon from './img/falcon.jpg'
import darkSide from './img/dark-side.jpg'

import styles from './ChooseSide.module.scss';

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: lightSide,
      classes: styles.item__light
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: darkSide,
      classes: styles.item__dark
    },
    {
      theme: THEME_NEUTRAL,
      text: "I am Han Solo",
      img: falcon,
      classes: styles.item__neutral
    }
  ];

  return (
    <div className={styles.container}>
      {
        elements.map(({ theme, text, img, classes }, index) => (
          <ChooseSideItem
            key={index}
            theme={theme}
            text={text}
            img={img}
            classes={classes}
          />
        ))
      }
    </div>
  )
};

export default ChooseSide;