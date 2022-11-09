import { Layout } from 'components/Layout/Layout';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import fs from 'fs';
import { getAllFiles } from 'helpers/files';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <Layout isProse={true}>
      <h1>{title}</h1>
      <MDXRemote
        {...mdxSource}
        components={{
          code: (props) => {
            const match = /language-(\w+)/.exec(props?.className || '');
            return (
              <SyntaxHighlighter
                language={match?.length >= 1 ? match[1] : 'javascript'}
                PreTag="div"
                {...props}
              />
            );
          },
          h2: (props) => <h2 {...props} />,
          h3: (props) => <h3 {...props} />,
          h4: (props) => <h4 {...props} />,
        }}
      />
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const getAllFiles = function (dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
      } else {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    });

    return arrayOfFiles;
  };

  const postsBaseDir = 'posts';
  const files = getAllFiles(postsBaseDir, []);

  const paths = files.map((filename) => {
    return {
      params: {
        slug: filename.replace('.mdx', '').replace('posts/', '').split('/'),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug;
  const markdownWithMeta = fs.readFileSync(path.join('posts', slugStr + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slugStr,
      mdxSource,
    },
  };
};
