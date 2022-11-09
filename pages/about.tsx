import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { Layout } from 'components/Layout/Layout';
import { Post } from 'types/post';
import { SocialBar } from 'components/SocialBar/SocialBar';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';

export default function Page() {
  return (
    <Layout title={'About Michael R. Dinerstein (Mission Mike)'} isProse>
      <Container>
        <h1>About Michael</h1>
        <SocialBar />
        <p>
          <Image
            src="/static/images/missionmike-profile.jpeg"
            width={300}
            height={300}
            alt="Headshot Photograph of Michael Dinerstein"
            style={{ float: 'right', margin: '0 0 1rem 2rem' }}
          ></Image>
          Growing up, Michael Dinerstein was one of those kids who would take things apart and put
          them back together just to see how they “ticked.” Understanding the basics was never
          enough. His interests weren’t just technical though, they were also creative. Playing
          guitar at church services led to learning about live sound. When his parents got a PC in
          the mid-90s his curiosity led him to learn the computer’s inner-workings. While learning
          Microsoft BASIC, his first bit of code was, not surprisingly, a program that generated
          tones to play a melody.
        </p>
        <p>
          After high school, Mike set his sights on pursuing something that would enable him to
          utilize both his artistic and technical inclinations. This ultimately led to Web Design &
          Development. This career path allowed him to incorporate his creative eye with a love of
          programming, analytical thinking, and learning.
        </p>
        <p>
          Michael has been married to his lovely wife Yohana since 2012. They have four beautiful
          children. He’s looking forward to seeing if his kids might also want to know how things
          “tick.”
        </p>
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
