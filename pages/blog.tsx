import { Col, Container, Row } from 'react-bootstrap';

import { BlogPreview } from 'components/blog/BlogPreview/BlogPreview';
import { FeaturedImage } from 'components/blog/FeaturedImage/FeaturedImage';
import { Layout } from 'components/Layout/Layout';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';
import styles from 'styles/pages/blog.module.scss';

const BlogPage = ({ posts }) => {
  return (
    <Layout>
      <Container style={{ marginTop: 100 }}>
        <h1 className={styles.h1}>
          <span className="lightgray font-weight-normal">Blog</span>
        </h1>
        {posts.map((post, index) => {
          return (
            <Row key={`post-preview-${index}`} className={styles.postPreview}>
              <FeaturedImage post={post} />
              <Col className={styles.postContentPreviewContainer}>
                <BlogPreview key={index} post={post} />
              </Col>
            </Row>
          );
        })}
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const postsWithTag = getAllFiles('posts', [])
    .map((file) => {
      const markdownWithMeta = fs.readFileSync(path.join(file), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);

      if (
        frontMatter?.draft !== true ||
        (frontMatter?.draft === true && process.env.NODE_ENV !== 'production')
      ) {
        return {
          content: markdownWithMeta,
          href: file.replace('posts/', '/blog/').replaceAll('.mdx', ''),
          path: file.replace('posts/', '/blog/').replaceAll('.mdx', ''),
          frontMatter,
        };
      }
    })
    .filter((obj) => obj !== undefined);

  return {
    props: {
      posts: postsWithTag,
    },
  };
};
