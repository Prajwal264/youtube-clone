import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import logo from '../public/logo.png';
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
        <div className={styles.leftSection}>
          <GiHamburgerMenu className={styles.hamburger} height={17} />
          <div className={styles.logo}>
            <Image src={logo} />
          </div>
          <div className={styles.search}>
            <input type="text" />
            <FiSearch className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.rightSection}>
          <button className={styles.signin} type="button">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
