import React from 'react';
import styles from './Styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.icons}>
      <FontAwesomeIcon icon={faFacebook} size="lg" />
      <FontAwesomeIcon icon={faTwitter} size="lg" />
      <FontAwesomeIcon icon={faInstagram} size="lg" />
      </div>
      <p>
        All Rights Reserved 2023©
      </p>
    </section>
  );
};

export default Footer;
