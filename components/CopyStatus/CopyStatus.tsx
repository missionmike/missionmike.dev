import React from 'react';
import styles from './CopyStatus.module.scss';

const CopyStatus = ({
  copyText = '(click to copy)',
  copied = false,
}: {
  copyText?: string;
  copied?: boolean;
}) => {
  return (
    <span className={styles.copyStatus} data-copied={copied}>
      <React.Fragment>{copyText}</React.Fragment>
    </span>
  );
};

export { CopyStatus };
