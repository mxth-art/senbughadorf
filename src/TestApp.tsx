import React from 'react';

const TestApp: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>
        🎤 VoiceInsight Test
      </h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        If you can see this, React is working!
      </p>
      <div style={{
        padding: '15px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        ✅ Frontend is loading correctly
      </div>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Test Interaction
      </button>
    </div>
  );
};

export default TestApp;