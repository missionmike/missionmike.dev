import styles from './ImageWrapper.module.scss';

const ImageWrapper = ({ children }) => {
  return <div className={styles.imageWrapper}>{children}</div>;
};

export { ImageWrapper };
