import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../styles/components/Header.module.scss';

/**
 *
 *
 * @return {*}
 */
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerInnerWrapper}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
