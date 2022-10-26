import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} Michael R. Dinerstein.
    </footer>
  );
};

export { Footer };
