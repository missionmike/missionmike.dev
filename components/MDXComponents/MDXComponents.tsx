import { CodeBlock } from 'components/CodeBlock/CodeBlock';
import CodeHeader from './CodeHeader';
import Image from 'next/image';
import styles from './MDXComponents.module.scss';

const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => (
    <a
      {...props}
      className={styles.link}
      target={props.href.includes('https') ? '_blank' : '_self'}
      rel={props.href.includes('https') ? 'noopener noreferrer' : ''}
    />
  ),
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  h2: (props) => <h2 {...props} className={styles.postHeading2} />,
  h3: (props) => <h3 {...props} className={styles.postHeading3} />,
  h4: (props) => <h3 {...props} className={styles.postHeading4} />,
  Aside: (props) => <aside {...props} className={styles.aside} />,
  Image: (props) => (
    <div className={styles.imageContainer}>
      <Image {...props} alt={props?.alt} className={styles.image} />
    </div>
  ),
  CodeHeader: (props) => <CodeHeader {...props} />,
  CodeBlock: (props) => <CodeBlock {...props} />,
  HorizontalRule: () => <div className={styles.hr} />,
};

export { MDXComponents };
