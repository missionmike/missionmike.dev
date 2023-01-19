import { Col, Container, Row } from 'react-bootstrap';

import { BlogPreview } from 'components/blog/BlogPreview/BlogPreview';
import { FeaturedImage } from 'components/blog/FeaturedImage/FeaturedImage';
import Image from 'next/image';
import { Layout } from 'components/Layout/Layout';
import Link from 'next/link';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';
import styles from 'styles/pages/blog.module.scss';

const TagPage = ({ tag, posts }) => {
  return (
    <Layout>
      <Container>
        <h1 className={styles.h1}>
          <span className="lightgray font-weight-normal">Tag:</span> {tag}
        </h1>
        {posts.map((post, index) => {
          return (
            <Row key={`post-preview-${index}`} className={styles.postPreview}>
              <FeaturedImage post={post} priority={index <= 1} />
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

export default TagPage;

export const getStaticPaths = async () => {
  const tags = getAllFiles('posts', [])
    .map((file) => {
      const markdownWithMeta = fs.readFileSync(path.join(file), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);
      if (frontMatter?.tags && Array.isArray(frontMatter.tags)) {
        return frontMatter.tags;
      }
    })
    .filter((tag) => tag !== undefined)
    .flat();

  const paths = [...new Set(tags)].map((tag) => {
    return { params: { tag } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { tag } }) => {
  let postsWithTag = getAllFiles('posts', [])
    .map((file) => {
      const markdownWithMeta = fs.readFileSync(path.join(file), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);

      if (frontMatter?.tags && Array.isArray(frontMatter.tags) && frontMatter.tags.includes(tag)) {
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
      }
    })
    .filter((obj) => obj !== undefined);

  postsWithTag = postsWithTag.sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
  });

  return {
    props: {
      tag,
      posts: postsWithTag,
    },
  };
};
