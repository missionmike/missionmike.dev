import Head from 'next/head';

const SEO = ({ title = '' }: { title?: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { SEO };
