import { IconFacebook } from './icons/IconFacebook';
import { IconGitHub } from './icons/IconGitHub';
import { IconInstagram } from './icons/IconInstagram';
import { IconLinkedIn } from './icons/IconLinkedIn';
import { IconTwitter } from './icons/IconTwitter';
import { IconYouTube } from './icons/IconYouTube';
import React from 'react';
import { siteMetadata } from 'data/siteMetadata';
import styles from './SocialBar.module.scss';

/**
 * Social media icons component to link to various
 * platforms.
 *
 * @returns {React.ReactElement} Social media icons with links.
 */
const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <IconYouTube url={siteMetadata.youTube} />
      <IconLinkedIn url={siteMetadata.linkedIn} />
      <IconTwitter url={siteMetadata.twitter} />
      <IconFacebook url={siteMetadata.facebook} />
      <IconGitHub url={siteMetadata.gitHub} />
      <IconInstagram url={siteMetadata.instagram} />
    </div>
  );
};

export { SocialBar };