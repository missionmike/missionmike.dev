import Link from 'next/link';
import { Post } from 'types/post';
import matter from 'gray-matter';
import parse from 'html-react-parser';
import removeMd from 'remove-markdown';
import styles from './BlogPreview.module.scss';

const BlogPreview = ({ post = {} }: { post: Post }) => {
  if (!post?.content || !post?.path) return;

  const { data: frontMatter, content } = matter(post.content);
  const summary = frontMatter?.summarys
    ? frontMatter.summary
    : removeMd(content.split(' ').slice(0, 50).join(' ').substring(0, 500));
  const briefTitle =
    frontMatter.title.length > 50 ? `${frontMatter.title.substring(0, 50)}...` : frontMatter.title;

  return (
    <div className={styles.previewContainer}>
      <h3 className={styles.previewTitle} title={frontMatter.title}>
        {briefTitle}
      </h3>
      {parse(summary)} [...] <Link href={post.path}>Read More.</Link>
    </div>
  );
};

export { BlogPreview };
