import { Layout } from 'components/Layout/Layout';
import { MDXComponents } from 'components/MDXComponents/MDXComponents';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <Layout isProse={true}>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={MDXComponents} />
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

  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      frontMatter,
      slugStr,
      mdxSource,
    },
  };
};
