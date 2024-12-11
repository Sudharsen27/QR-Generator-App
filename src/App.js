// App.tsx
import React from 'react';
import './App.css';  // Ensure you have styles defined here or update if needed
import Mainpage from './pages/Mainpage'; 
import QRCode from './components/QRCode.tsx';
import Layout from './Layouts/Layout';  // Assuming Layout component is in Layouts directory

 // Correct import path for the QRCode component

function App() {
  return (
    <div className="App">
      <Mainpage />
      <Layout />
      {/* <QRCode />  */}
    </div>
  );
}

export default App;
