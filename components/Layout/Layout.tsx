import { Footer } from './Footer/Footer';
import React from 'react';
import { SEO } from './Header/SEO';

const Layout = ({ children }: { children?: React.ReactElement | React.ReactElement[] }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
