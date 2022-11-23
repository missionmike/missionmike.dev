import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} Michael R. Dinerstein.
      <br />
      <a href="mailto:holler@missionmike.dev" style={{ textDecoration: 'none' }}>
        Send a message 📧
      </a>
    </footer>
  );
};

export { Footer };
