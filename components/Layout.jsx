import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

/**
 *
 *
 * @return {*}
 */
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
