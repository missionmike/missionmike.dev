import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import { useState } from 'react';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/about',
      text: 'Bio',
    },
  ];

  return (
    <>
      <span className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen === true ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
      </span>
      <div className={styles.headerNavContainer} data-open={isOpen}>
        <nav>
          <ul className={styles.headerNav}>
            {links.map((link, index) => {
              return (
                <li key={`menu-item-${index}`} onClick={() => setIsOpen(false)}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export { HeaderNav };
