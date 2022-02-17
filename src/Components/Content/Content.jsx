import React from 'react';
import styles from './Content.module.css';

const Content = () => {
  return (
    <main className={styles.content}>
      <section className={styles.layout}>
        <div className={styles.tagLine}>
          A better way
          <br />
          to enjoy every day
        </div>
        <div className={styles.secondTitle}>
          Be the first to know when we launch.
        </div>
        <div>modal</div>
      </section>
    </main>
  );
};

export { Content };
