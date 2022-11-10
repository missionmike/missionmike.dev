import styles from './CodeHeader.module.scss';

const CodeHeader = (props) => {
  const { children } = props;

  return <div className={styles.codeHeader}>{children}</div>;
};

export default CodeHeader;
