import { IconFacebook } from './icons/IconFacebook';
import { IconGitHub } from './icons/IconGitHub';
import { IconInstagram } from './icons/IconInstagram';
import { IconLinkedIn } from './icons/IconLinkedIn';
import { IconTikTok } from './icons/IconTikTok';
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
      <IconLinkedIn url={siteMetadata.linkedIn} />
      {/* <IconTwitter url={siteMetadata.twitter} /> */}
      {/* <IconFacebook url={siteMetadata.facebook} /> */}
      <IconGitHub url={siteMetadata.gitHub} />
      {/* <IconInstagram url={siteMetadata.instagram} /> */}
      {/* <IconTikTok url={siteMetadata.tikTok} /> */}
    </div>
  );
};

export { SocialBar };
