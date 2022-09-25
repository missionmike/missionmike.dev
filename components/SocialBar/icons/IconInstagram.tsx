import { IconInstagramDefs } from './IconInstagramDefs';
import React from 'react';
import styles from './icons.module.scss';

const IconInstagram = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon}
      title="Follow Mission Mike on Instagram"
    >
      <IconInstagramDefs />
      <svg viewBox="0 0 132 132" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <path
          className="ig-svg-st0"
          d="m131.9 131.9c0.1-1.1 0.1-47.8 0.1-65.9s0-64.8-0.1-66h-131.9v66c0 27.5 0 64.5 0.2 66l131.7-0.1z"
        ></path>
        <path className="ig-svg-st1" d="m30.9 131.9c1.6 0.1 18.3 0.1 35 0.1s33.3 0 34.9-0.1"></path>
        <path className="ig-svg-st2" d="M87.5 0H66C38.5 0 30.4 0 28.8 0.2"></path>
        <path
          className="ig-svg-st3"
          d="m131.9 103.3c0.1-1.1 0.1-19.3 0.1-37.4s0-64.8-0.1-66h-65.9c-27.5 0.1-64.4 0.1-66 0.3v44.4 21.4c0 27.5 0 35.6 0.2 37.2v28.7c1.6 0.1 49.1 0.1 65.7 0.1s64.5 0 66.1-0.1l-0.1-28.6z"
        ></path>
        <path
          className="ig-svg-st4"
          d="m66 17.3c-13.2 0-14.9 0.1-20.1 0.3s-8.7 1.1-11.8 2.3c-3.2 1.2-5.9 2.9-8.6 5.6s-4.4 5.4-5.6 8.6c-1.2 3.1-2 6.6-2.3 11.8-0.2 5.2-0.3 6.9-0.3 20.1s0.1 14.9 0.3 20.1 1.1 8.7 2.3 11.8c1.2 3.2 2.9 5.9 5.6 8.6s5.4 4.4 8.6 5.6c3.1 1.2 6.6 2 11.8 2.3 5.2 0.2 6.9 0.3 20.1 0.3s14.9-0.1 20.1-0.3 8.7-1.1 11.8-2.3c3.2-1.2 5.9-2.9 8.6-5.6s4.4-5.4 5.6-8.6c1.2-3.1 2-6.6 2.3-11.8 0.2-5.2 0.3-6.9 0.3-20.1s-0.1-14.9-0.3-20.1-1.1-8.7-2.3-11.8c-1.2-3.2-2.9-5.9-5.6-8.6s-5.4-4.4-8.6-5.6c-3.1-1.2-6.7-2-11.8-2.3-5.2-0.3-6.9-0.3-20.1-0.3zm-4.4 8.7h4.4c13 0 14.6 0 19.7 0.3 4.8 0.2 7.3 1 9 1.7 2.3 0.9 3.9 1.9 5.6 3.6s2.8 3.3 3.6 5.6c0.7 1.7 1.5 4.3 1.7 9 0.2 5.1 0.3 6.7 0.3 19.7s-0.1 14.6-0.3 19.7c-0.2 4.8-1 7.3-1.7 9-0.9 2.3-1.9 3.9-3.6 5.6s-3.3 2.8-5.6 3.6c-1.7 0.7-4.3 1.5-9 1.7-5.1 0.2-6.7 0.3-19.7 0.3s-14.6-0.1-19.7-0.3c-4.8-0.2-7.3-1-9.1-1.7-2.3-0.9-3.9-1.9-5.6-3.6s-2.8-3.3-3.6-5.6c-0.7-1.7-1.5-4.3-1.7-9-0.2-5.1-0.3-6.6-0.3-19.6s0-14.6 0.3-19.7c0.2-4.8 1-7.3 1.7-9 0.9-2.3 1.9-3.9 3.6-5.6s3.3-2.8 5.6-3.6c1.7-0.7 4.3-1.5 9.1-1.7 4.5-0.3 6.2-0.4 15.3-0.4zm30.4 8.1c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8zm-26 6.9c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 8.8c9 0 16.2 7.3 16.2 16.2 0 9-7.3 16.2-16.2 16.2-9 0-16.2-7.3-16.2-16.2 0-9 7.2-16.2 16.2-16.2z"
        ></path>
      </svg>{' '}
    </a>
  );
};

export { IconInstagram };
