import React from 'react';
import { COMPANY_NAME } from '../../common/constants';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div>Created by YuchenQ</div>
      <div>© 2022 {COMPANY_NAME} All rights reserved.</div>
    </div>
  </footer>
);

export { Footer };
