import { CodeBlock } from 'components/CodeBlock/CodeBlock';
import CodeHeader from './CodeHeader';
import styles from './MDXComponents.module.scss';

const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  h2: (props) => <h2 {...props} className={styles.postHeading2} />,
  h3: (props) => <h3 {...props} className={styles.postHeading3} />,
  h4: (props) => <h3 {...props} className={styles.postHeading4} />,
  Aside: (props) => <aside {...props} className={styles.aside} />,
  CodeHeader: (props) => <CodeHeader {...props} />,
  CodeBlock: (props) => <CodeBlock {...props} />,
};

export { MDXComponents };
