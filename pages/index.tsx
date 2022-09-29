import { Col, Container, Row } from 'react-bootstrap';

import { CarouselHome } from 'components/pages/home/CarouselHome/CarouselHome';
import { Layout } from 'components/Layout/Layout';
import { SocialBar } from 'components/SocialBar/SocialBar';
import styles from 'styles/pages/index.module.scss';

export default function Home() {
  return (
    <Container className={styles.index}>
      <Row>
        <Col>
          <h1>
            MissionMike<span className="suffix">.dev</span>
            <br />
            <span className="subtitle">
              I&apos;m a software developer. I also do{' '}
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                href="https://linktr.ee/missionmike"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                other things.
              </a>
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
  );
}
