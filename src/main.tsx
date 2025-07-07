import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Temporarily use test app to debug
import TestApp from './TestApp';
// import App from './App.tsx';
import './index.css';

console.log('Starting app initialization...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  throw new Error('Root element not found');
}

console.log('Root element found, creating React root...');

try {
  const root = createRoot(rootElement);
  console.log('React root created, rendering app...');
  
  root.render(
    <StrictMode>
      <TestApp />
    </StrictMode>
  );
  
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial;">
      <h2>Render Error</h2>
      <p>${error}</p>
    </div>
  `;
}