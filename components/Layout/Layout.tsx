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
  isProse = false,
  children,
}: {
  title?: string;
  description?: string;
  className?: string;
  pageSEO?: PageSEO;
  isProse?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <Container as="main" className={`${className} ${styles.layout} ${isProse ? 'prose' : ''}`}>
        {
          {
            common: <CommonSEO title={title} description={description} />,
          }[pageSEO]
        }
        <div className={isProse ? 'prose' : ''}>{children}</div>
      </Container>
      <Footer />
    </div>
  );
};

export { Layout };
