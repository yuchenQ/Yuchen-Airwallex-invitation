import React from 'react';
import styles from './Page.module.css';

const Page = ({ children }) => {
  return (
    <article className={styles.page}>
      {children}
    </article>
  );
};

export { Page };
