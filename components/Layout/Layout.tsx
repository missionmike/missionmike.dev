import { CommonSEO } from './Header/SEO';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { PageSEO } from 'types/page';
import React from 'react';
import { siteMetadata } from 'data/siteMetadata';
import styles from './Layout.module.scss';

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
  const isProse = false;
  return (
    <>
      <Header />
      <Container as="main" className={`${className} ${styles.layout} ${isProse ? 'prose' : ''}`}>
        {
          {
            common: <CommonSEO title={title} description={description} />,
          }[pageSEO]
        }
        {children}
        <Footer />
      </Container>
    </>
  );
};

export { Layout };
