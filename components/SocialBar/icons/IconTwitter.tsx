import React from 'react';
import styles from './icons.module.scss';

/**
 * Twitter icon component, used to link to the platform.
 *
 * @param {string} url the url to link out to.
 * @returns {React.ReactElement} social media icon with link.
 */
const IconTwitter = ({ url }: { url: string }) => {
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
          fill="#1DA1F2"
          d="M24,0H5C2.2,0,0,0,0,0v19c0,2.8,0,5,0,5h19c2.8,0,5,0,5,0V5C24,2.2,24,0,24,0z M18.9,9.2 c0.2,4.6-3.2,9.8-9.3,9.8c-1.9,0-3.6-0.5-5-1.5c1.7,0.2,3.5-0.3,4.9-1.4c-1.4,0-2.6-1-3.1-2.3c0.5,0.1,1,0.1,1.5-0.1 c-1.6-0.3-2.7-1.7-2.6-3.3C5.6,10.8,6.1,11,6.6,11c-1.5-1-1.9-2.9-1-4.4c1.6,2,4,3.3,6.8,3.4c-0.5-2.1,1.1-4,3.2-4 c0.9,0,1.8,0.4,2.4,1c0.7-0.1,1.5-0.4,2.1-0.8c-0.2,0.8-0.8,1.4-1.4,1.8c0.7-0.1,1.3-0.3,1.9-0.5C20.1,8.2,19.5,8.8,18.9,9.2z"
        ></path>
      </svg>{' '}
    </a>
  );
};

export { IconTwitter };
