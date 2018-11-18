import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Button } from 'reactstrap';

export default () => (
  <Link
    to="/comparer"
    style={{
      position: 'fixed',
      bottom: '0px',
      right: '0px',
      marginBottom: '50px',
      marginRight: '50px'
    }}
  >
    <Button color="primary">Comparar</Button>
  </Link>
);
