import React from 'react';
import styles from './CopyStatus.module.scss';

const CopyStatus = ({
  copied = false,
  copyText = '(click to copy)',
}: {
  copied: boolean;
  copyText?: string;
}) => {
  return (
    <span className={styles.copyStatus} data-copied={copied}>
      <React.Fragment>{copied === true ? `Copied!` : copyText}</React.Fragment>
    </span>
  );
};

export { CopyStatus };
