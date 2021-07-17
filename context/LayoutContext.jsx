import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <LayoutContext.Provider value={{ showDrawer, setShowDrawer }}>
      {children}
    </LayoutContext.Provider>
  );
};

LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContextProvider;
