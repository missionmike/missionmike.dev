import { HeaderNav } from './HeaderNav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
};

export { Header };
