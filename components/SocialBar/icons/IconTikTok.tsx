import React from 'react';
import styles from './icons.module.scss';

/**
 * TikTok icon component, used to link to the platform.
 *
 * @param {string} url the url to link out to.
 * @returns {React.ReactElement} social media icon with link.
 */
const IconTikTok = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon}
      title="Follow Mission Mike on TikTok"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3333 3333"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M3021 0H313C141 0 0 141 0 312v2708c0 172 141 312 313 312h2708c172 0 313-141 313-312V312c0-172-141-312-313-312zm-946 623c35 296 200 473 487 492v333c-167 16-313-38-483-141v623c0 792-863 1040-1210 472-223-365-87-1006 629-1032v352c-54 9-113 23-166 40-159 54-249 155-224 332 48 341 674 441 621-225V622h345z" />
      </svg>
    </a>
  );
};

export { IconTikTok };
