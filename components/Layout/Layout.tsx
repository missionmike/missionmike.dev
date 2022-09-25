import { CommonSEO } from './Header/SEO';
import { Footer } from './Footer/Footer';
import { PageSEO } from 'types/page';
import React from 'react';
import { siteMetadata } from 'data/siteMetadata';

const Layout = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  className = '',
  pageSEO = 'common',
  children,
}: {
  title?: string;
  description?: string;
  className?: string;
  pageSEO?: PageSEO;
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <div className={className}>
      {
        {
          common: <CommonSEO title={title} description={description} />,
        }[pageSEO]
      }
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
