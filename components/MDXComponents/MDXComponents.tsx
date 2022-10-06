import styles from './MDXComponents.module.scss';

const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  h2: (props) => <h1 {...props} className={styles.postHeading2} />,
  h3: (props) => <h1 {...props} className={styles.postHeading3} />,
};

export { MDXComponents };