import { CommonSEO } from './Header/SEO';
import { Footer } from './Footer/Footer';
import React from 'react';
import { siteMetadata } from 'data/siteMetadata';

const Layout = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  children,
}: {
  title?: string;
  description?: string;
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <>
      <CommonSEO title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
