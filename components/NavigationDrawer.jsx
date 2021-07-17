import React, { useContext } from 'react';
import { Drawer } from 'antd';
import { LayoutContext } from '../context/LayoutContext';

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
      title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={showDrawer}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export default NavigationDrawer;
