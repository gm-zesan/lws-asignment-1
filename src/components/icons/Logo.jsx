import React from 'react';
import logo from '../../assets/logo.svg';

const Logo = (props) => {
  return (
    <img {...props} alt="Landwind Logo" src={logo} />
  );
};

export default Logo; 