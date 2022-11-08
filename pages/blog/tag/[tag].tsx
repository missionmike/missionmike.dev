import { Container, Row } from 'react-bootstrap';

import { Layout } from 'components/Layout/Layout';
import Link from 'next/link';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';
import styles from 'styles/pages/blog.tag.module.scss';

const TagPage = ({ tag, posts }) => {
  return (
    <Layout>
      <Container>
        <h1>
          <span>Tag:</span> {tag}
        </h1>
        {posts.map((post, index) => {
          const { frontMatter, href } = post;
          return (
            <Row key={`post-preview-${index}`} className={styles.postPreview}>
              <Link href={href}>
                <h2>{frontMatter.title}</h2>
              </Link>
              <div>
                <p>
                  {frontMatter.summary} [<Link href={href}>read more</Link>]
                </p>
              </div>
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
  const tagName = tag;
  const postsWithTag = getAllFiles('posts', [])
    .map((file) => {
      const markdownWithMeta = fs.readFileSync(path.join(file), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);
      if (frontMatter?.tags && Array.isArray(frontMatter.tags) && frontMatter.tags.includes(tag)) {
        return {
          href: file.replace('posts/', '/blog/').replaceAll('.mdx', ''),
          frontMatter,
        };
      }
    })
    .filter((obj) => obj !== undefined);

  return {
    props: {
      tag: tagName,
      posts: postsWithTag,
    },
  };
};
