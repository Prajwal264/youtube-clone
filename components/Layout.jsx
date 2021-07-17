import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import NavigationDrawer from './NavigationDrawer';

/**
 *
 *
 * @return {*}
 */
function Layout({ children }) {
  return (
    <>
      <Header />
      <NavigationDrawer />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
