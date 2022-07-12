import React from 'react';
import UiVideo from '@ui/UiVideo';
import video from './video/han-solo.mp4';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {

  return (
    <>
      <UiVideo
        src={video}
        classes={styles.video}
        playbackRate={1.0}
      />
      <p className={styles.text}>
        The dark side of the force has won.<br />
        We can not display data.<br />
        Come back when we fix everything.<br />
      </p>
    </>
  )
};

export default ErrorMessage;