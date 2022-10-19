import { Col, Container, Row } from 'react-bootstrap';

import { BlogPreview } from 'components/blog/BlogPreview/BlogPreview';
import { CarouselHome } from 'components/pages/home/CarouselHome/CarouselHome';
import { Layout } from 'components/Layout/Layout';
import { Post } from 'types/post';
import { SocialBar } from 'components/SocialBar/SocialBar';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';
import styles from 'styles/pages/index.module.scss';

export default function Home({ latestPost = {} }: { latestPost?: Post }) {
  return (
    <Layout>
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
          <Col className={styles.right}>
            <Container>
              <h2 style={{ textTransform: 'uppercase', color: 'gray', fontWeight: 'normal' }}>
                Latest attempt at writing.
              </h2>
              <BlogPreview post={latestPost} />
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = getAllFiles('posts');
  let latestPostDate: Date = null,
    latestPost: Post = {};

  files.map((file) => {
    if (!file.includes('posts')) return;

    const blogPostPath = path.join('posts', file.split('posts')[1]);
    const markdownWithMeta = fs.readFileSync(blogPostPath, 'utf-8');

    if (!markdownWithMeta) return;

    const { data: frontMatter } = matter(markdownWithMeta);

    if (!latestPostDate || (frontMatter?.date && new Date(frontMatter?.date) > latestPostDate)) {
      latestPostDate = new Date(frontMatter.date);
      latestPost.content = markdownWithMeta;
      latestPost.path = blogPostPath.replace('.mdx', '').replace('posts/', 'blog/');
    }
  });

  // const { data: frontMatter, content } = matter(markdownWithMeta);
  // const mdxSource = await serialize(content);
  return {
    props: {
      latestPost,
    },
  };
};
