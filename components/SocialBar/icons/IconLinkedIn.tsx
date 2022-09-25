import React from 'react';
import styles from './icons.module.scss';

/**
 * LinkedIn icon component, used to link to the platform.
 *
 * @param {string} url the url to link out to.
 * @returns {React.ReactElement} social media icon with link.
 */
const IconLinkedIn = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon}
      title="Connect on LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={styles.svg}
      >
        <path
          fill="#2867B2"
          d="M24,0H5C2.2,0,0,0,0,0v19c0,2.8,0,5,0,5h19c2.8,0,5,0,5,0V5C24,2.2,24,0,24,0z M8,19H5V8h3V19z M6.5,6.7 c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8S8.3,4,8.3,5S7.5,6.7,6.5,6.7z M20,19h-3v-5.6c0-3.4-4-3.1-4,0V19h-3V8h3v1.8 c1.4-2.6,7-2.8,7,2.5V19z"
        ></path>
      </svg>{' '}
    </a>
  );
};

export { IconLinkedIn };
