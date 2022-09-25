import { Col, Container, Row } from 'react-bootstrap';

import { CarouselHome } from 'components/pages/home/CarouselHome/CarouselHome';
import { Layout } from 'components/Layout/Layout';
import { SocialBar } from 'components/SocialBar/SocialBar';
import styles from 'styles/pages/index.module.scss';

export default function Home() {
  return (
    <Layout className={styles.index}>
      <Container>
        <Row>
          <Col>
            <h1>
              MissionMike<span className="suffix">.dev</span>
              <br />
              <span className="subtitle">
                I&apos;m a software developer. I also do other things.
              </span>
            </h1>
            <SocialBar />
            <CarouselHome />
          </Col>
          <Col>
            <Container>Latest attempt at writing.</Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
