import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import { useState } from 'react';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen === true ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
      </span>
      <div className={styles.headerNavContainer} data-open={isOpen}>
        <nav>
          <ul className={styles.headerNav}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Bio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export { HeaderNav };
