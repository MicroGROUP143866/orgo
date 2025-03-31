import React from 'react';
//import PropTypes from 'prop-types';
import styles from './awareness.module.css';

const awareness = () => (
  <div className={styles.awareness}>
    <div>
      <iframe
        width="600"
        height="340"
        src="https://www.youtube.com/embed/xKNiDlA7cZk"
        title="YouTube Video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div>
      <iframe
        width="600"
        height="340"
        src="https://www.youtube.com/embed/V9oXkucoJUE?si=kh-k08TQKPDddl4G"
        title="YouTube Video 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div>
      <iframe
        width="600"
        height="340"
        src="https://www.youtube.com/embed/OSo584m7E_I?si=Lgdsh-oYi4MNxEBJ" 
        title="YouTube Video 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

awareness.propTypes = {};

awareness.defaultProps = {};

export default awareness;
