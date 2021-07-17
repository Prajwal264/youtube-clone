import React, { useContext } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import logo from '../public/logo.png';
import styles from '../styles/components/Header.module.scss';
import { LayoutContext } from '../context/LayoutContext';

/**
 *
 *
 * @return {*}
 */
function Header() {
  const { setShowDrawer } = useContext(LayoutContext);

  return (
    <div className={styles.header}>
      <div className={styles.headerInnerWrapper}>
        <div className={styles.leftSection}>
          <GiHamburgerMenu
            className={styles.hamburger}
            height={17}
            onClick={() => setShowDrawer(true)}
          />
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
