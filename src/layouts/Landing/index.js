import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';

export default function Landing(props) {
  const { children } = props;
  return (
    <main>
      <Toolbar />
      {children}
    </main>
  )
}
Landing.propType = {
  children: PropTypes.node
}
