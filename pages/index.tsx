import { Col, Container, Row } from 'react-bootstrap';

import { Layout } from 'components/Layout/Layout';
import { MMCarousel } from 'components/Carousel/Carousel';
import { SocialBar } from 'components/SocialBar/SocialBar';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>
              MissionMike.dev
              <br />
              <span>I&apos;m a software developer. I also do other things.</span>
            </h1>
            <SocialBar />
            <MMCarousel />
          </Col>
          <Col>
            <Container>Latest attempt at writing.</Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
