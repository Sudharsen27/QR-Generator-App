import React, { useState } from 'react';
import QRCodeLib from 'qrcode';

const QRCode: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);  // State to store notification message

  const generateQrCode = async () => {
    if (!inputText) {
      alert('Please enter a URL to generate a QR Code');
      return;
    }

    try {
      new URL(inputText); // Validate URL
    } catch (e) {
      alert('Please enter a valid URL');
      return;
    }

    try {
      const qrImage = await QRCodeLib.toDataURL(inputText);
      setQrCodeImage(qrImage);
      setNotification('QR Code generated successfully!');  // Set notification message
      setTimeout(() => {
        setNotification(null);  // Clear notification after 3 seconds
      }, 3000);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '20px',
        fontWeight: '600',
      }}>Generate Website QR Code</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter website URL"
        style={{
          padding: '10px',
          fontSize: '1rem',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          width: '100%',
          maxWidth: '300px',
        }}
      />
      <button
        onClick={generateQrCode}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ef4444',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Generate QR Code
      </button>

      {notification && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          borderRadius: '5px',
        }}>
          {notification}
        </div>
      )}

      {qrCodeImage && (
        <div style={{ marginTop: '20px' }}>
          <img src={qrCodeImage} alt="QR Code" style={{ width: '200px', height: '200px' }} />
          <p style={{ marginTop: '10px', fontSize: '1rem', color: '#555' }}>Scan this QR Code to visit the website!</p>
        </div>
      )}
    </div>
  );
};

export default QRCode;
