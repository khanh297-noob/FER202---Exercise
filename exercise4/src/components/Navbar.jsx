import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#4e4e4e',
      display: 'flex',
      alignItems: 'center',
      height: '55px'
    }}>
      <div style={{
        backgroundColor: '#27ae60',
        color: 'white',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 25px',
        fontWeight: '500',
        fontSize: '18px',
        cursor: 'pointer'
      }}>
        Home
      </div>
      <span style={{ color: 'white', marginLeft: '25px', fontSize: '18px', cursor: 'pointer' }}>Search</span>
      <span style={{ color: 'white', marginLeft: '25px', fontSize: '18px', cursor: 'pointer' }}>Contact</span>
      <div style={{
        backgroundColor: '#000',
        color: 'white',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 25px',
        marginLeft: '25px',
        fontSize: '18px',
        cursor: 'pointer'
      }}>
        Login
      </div>
    </nav>
  );
};

export default Navbar;