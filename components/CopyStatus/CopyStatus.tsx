import React from 'react';
import styles from './CopyStatus.module.scss';

const CopyStatus = ({ copyText = '(click to copy)' }: { copyText?: string }) => {
  return (
    <span className={styles.copyStatus}>
      <React.Fragment>{copyText}</React.Fragment>
    </span>
  );
};

export { CopyStatus };
