import { Col, Container, Row } from 'react-bootstrap';

import { BlogPreview } from 'components/blog/BlogPreview/BlogPreview';
import Image from 'next/image';
import { ImageWrapper } from 'components/blog/ImageWrapper/ImageWrapper';
import { Layout } from 'components/Layout/Layout';
import Link from 'next/link';
import { Post } from 'types/post';
import { SocialBar } from 'components/SocialBar/SocialBar';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';
import styles from 'styles/pages/index.module.scss';

export default function Home({
  latestPost = {},
  tags = [],
}: {
  latestPost?: Post;
  tags?: string[];
}) {
  return (
    <Layout
      pageSEO="common"
      title={'Mission Mike | Developer Log'}
      description={`Michael Dinerstein is a software developer and 
        graphic artist residing in the Pacific Northwest.`}
    >
      <Container className={styles.index}>
        <Row>
          <Col>
            <h1 className={styles.h1}>
              missionmike<span className={styles.suffix}>.dev</span>
            </h1>
            <span className={styles.subtitle}>
              software engineer on a mission to <br />
              innovate, inspire &amp; iterate
            </span>
            <SocialBar />
            <div className={styles.imageFrame}>
              <ImageWrapper>
                <Image
                  src="/static/images/family-gaming.jpg"
                  alt="Photo of Mission Mike playing videogames with his three children. Sitting at a computer desk with a green screen behind them."
                  style={{ objectFit: 'cover' }}
                  fill
                />
              </ImageWrapper>
              <p>Work hard, play hard!</p>
            </div>
          </Col>
          <Col lg className="d-flex flex-column justify-content-center">
            <Container>
              <span className={styles.h2}>Latest post:</span>
              <BlogPreview post={latestPost} />
            </Container>
            <Container>
              <br />
              <h2 className={styles.h2}>Tags &amp; Categories</h2>
              {tags.map((tag, index) => {
                return (
                  <Link href={`/blog/tag/${tag}`} key={index}>
                    <span className={styles.tagLink}>{tag}</span>
                  </Link>
                );
              })}
            </Container>
          </Col>
        </Row>
        {/* <Row>
          <Col className="d-flex flex-column justify-content-center">
            <Container className={styles.quoteContainer}>
              <span className={`${styles.h2} d-flex justify-content-center align-items-center`}>
                <span className="display-4">🍕</span> <span>Food for Thought</span>
              </span>
              <blockquote>
                <p>
                  <em>
                    THE BOY SCOUTS HAVE A RULE: “Always leave the campground cleaner than you found
                    it.” If you find a mess on the ground, you clean it up regardless of who might
                    have made it. You intentionally improve the environment for the next group of
                    campers.
                  </em>
                </p>
                <p>
                  <em>
                    ... What if we followed a similar rule in our code: “Always check a module in
                    cleaner than when you checked it out”? Regardless of who the original author
                    was, what if we always made some effort, no matter how small, to improve the
                    module? What would be the result?
                  </em>
                </p>
                <p>
                  <em>
                    I think if we all followed that simple rule, we would see the end of the
                    relentless deterioration of our software systems. Instead, our systems would
                    gradually get better and better as they evolved. We would also see teams caring
                    for the system as a whole, rather than just individuals caring for their own
                    small part.
                  </em>
                </p>
                <p style={{ textAlign: 'right' }}>
                  &mdash; Robert C. Martin
                  <br />
                  <a
                    href="https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    97 Things Every Programmer Should Know
                  </a>
                </p>
              </blockquote>
            </Container>
          </Col>
        </Row> */}
        {/* <Row>
          <Col lg>
            <div className={styles.imageFrame}>
              <ImageWrapper>
                <Image
                  src="/static/images/office-dogs.jpg"
                  alt="Photo of Mission Mike and his two office dogs, Maximus and Magnus lying on the floor in front of the desk."
                  style={{ objectFit: 'cover' }}
                  fill
                />
              </ImageWrapper>
              <p>
                I spend the workday coding with my trusty office doggos, Maximus (left) and Magnus.
                Sometimes I fear their snoring can be overheard during Zoom meetings.
              </p>
            </div>
          </Col>
          <Col lg>
            <div className={styles.imageFrame}>
              <ImageWrapper>
                <Image
                  src="/static/images/family-breakfast.jpg"
                  alt="Mike eating breakfast with his wife Yohana and their children."
                  style={{ objectFit: 'cover' }}
                  fill
                />
              </ImageWrapper>
              <p className="text-center">
                My family is my <span style={{ color: 'red' }}>❤️</span>... Everything I do, I do
                for them. Their wellbeing is my mission.
                <br /> <br />
              </p>
            </div>
          </Col>
        </Row> */}
        {/* <Row>
          <Col className="d-flex flex-column justify-content-center p-5">
            <Container className={styles.quoteContainer}>
              <span className={`${styles.h2} d-flex justify-content-center align-items-center`}>
                <span>Quote of the Day</span>
                <span className="display-4" style={{ paddingLeft: '1rem' }}>
                  💬
                </span>
              </span>
              <blockquote>
                <p>
                  <em>
                    &quot;What&apos;s the difference between regular parsley and Italian parsley?
                    Does Italian parsley have an accent or something?&quot;
                  </em>
                </p>
                <p style={{ textAlign: 'right' }}>
                  &mdash;
                  <a
                    href="https://www.youtube.com/channel/UCifuv8WtP23D0I_RHmj-wrA"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>{' '}
                  Mikey, age 9.
                </p>
              </blockquote>
            </Container>
          </Col>
        </Row> */}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = getAllFiles('posts'),
    tags = [];

  let latestPostDate: Date = null,
    latestPost: Post = {};

  files.map((file) => {
    if (!file.includes('posts')) return;

    const blogPostPath = path.join('posts', file.split('posts')[1]);

    const markdownWithMeta = fs.readFileSync(blogPostPath, 'utf-8');

    if (!markdownWithMeta) return;

    const { data: frontMatter } = matter(markdownWithMeta);

    if (frontMatter?.draft === true) return;

    if (frontMatter?.tags) tags.push(frontMatter.tags);

    if (!latestPostDate || (frontMatter?.date && new Date(frontMatter?.date) > latestPostDate)) {
      latestPostDate = new Date(frontMatter.date);
      latestPost.content = markdownWithMeta;
      latestPost.path = blogPostPath.replace('.mdx', '').replace('posts/', 'blog/');
    }
  });

  return {
    props: {
      latestPost,
      tags: [...new Set(tags.flat())],
    },
  };
};
