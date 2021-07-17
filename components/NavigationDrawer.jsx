import React, { useContext } from 'react';
import { Drawer } from 'antd';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeAlt } from 'react-icons/bi';
import logo from '../public/logo.png';
import { LayoutContext } from '../context/LayoutContext';
import styles from '../styles/components/NavigationDrawer.module.scss';

const YoutubeIcon = () => {
  const { setShowDrawer } = useContext(LayoutContext);
  return (
    <div className={styles.drawerTitle}>
      <GiHamburgerMenu
        className={styles.hamburger}
        height={17}
        onClick={() => setShowDrawer(false)}
      />
      <div className={styles.logo}>
        <Image src={logo} />
      </div>
    </div>
  );
};

/**
 *
 *
 * @return {*}
 */
function NavigationDrawer() {
  const { showDrawer, setShowDrawer } = useContext(LayoutContext);
  const onClose = () => {
    setShowDrawer(false);
  };
  return (
    <Drawer
      title={<YoutubeIcon />}
      placement="left"
      closable={false}
      onClose={onClose}
      className={styles.drawer}
      visible={showDrawer}
    >
      <ul>
        <li>
          <BiHomeAlt color="#898989" />
          <p>Home</p>
        </li>
        <li>
          <BiHomeAlt color="#898989" />
          <p>Trending</p>
        </li>
        <li>
          <BiHomeAlt color="#898989" />
          <p>Subscriptions</p>
        </li>
      </ul>
    </Drawer>
  );
}

export default NavigationDrawer;
