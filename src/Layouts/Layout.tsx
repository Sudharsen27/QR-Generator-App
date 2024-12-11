import React from 'react';
import QRCode from '../components/QRCode';

const Layout: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#404040',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}>
      <QRCode />
    </div>
  );
};

export default Layout;
