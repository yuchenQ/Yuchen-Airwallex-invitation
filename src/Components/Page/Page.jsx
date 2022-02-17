import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.css';

const Page = ({ children, dataTestId }) => {
  return (
    <article className={styles.page} data-testid={dataTestId}>
      {children}
    </article>
  );
};

Page.defaultProps = {
  dataTestId: '',
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string,
};

export { Page };
