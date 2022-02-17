import React from 'react';
import { COMPANY_NAME } from '../../common/constants';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      {COMPANY_NAME.toUpperCase()}
    </div>
  </header>
);

export { Header };
