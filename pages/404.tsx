import { Col, Container, Row } from 'react-bootstrap';

import { Layout } from 'components/Layout/Layout';
import Link from 'next/link';
import styles from 'styles/pages/index.module.scss';

export default function NotFound() {
  return (
    <Layout
      pageSEO="common"
      title={'Page Not Found | Mission Mike | Developer Log'}
      description={`Michael Dinerstein is a software developer and 
        graphic artist residing in the Pacific Northwest. You're attempting 
        to view a page that he didn't create or publish...`}
    >
      <Container className={styles.index}>
        <Row>
          <Col>
            <h1
              className={styles.h1}
              style={{ textAlign: 'center', paddingTop: '4rem', lineHeight: '4rem' }}
            >
              Page Not Found
              <br />
              <Link href="/">Head home</Link>
            </h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
