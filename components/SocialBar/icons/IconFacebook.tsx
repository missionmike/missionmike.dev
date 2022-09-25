import React from 'react';
import styles from './icons.module.scss';

const IconFacebook = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon}
      title="Follow Mission Mike on Twitter"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={styles.svg}
      >
        <path
          fill="#3B5998"
          d="M22.7,0H0c0,0,0,0.6,0,1.3v21.4C0,23.4,0,24,0,24h12.8v-9.3H9.7v-3.6h3.1V8.4c0-3.1,1.9-4.8,4.7-4.8 c1.3,0,2.5,0.1,2.8,0.1V7l-1.9,0c-1.5,0-1.8,0.7-1.8,1.8v2.3h3.6l-0.5,3.6h-3.1V24h6.1c0.7,0,1.3,0,1.3,0V0C24,0,23.4,0,22.7,0z"
        ></path>
      </svg>{' '}
    </a>
  );
};

export { IconFacebook };
