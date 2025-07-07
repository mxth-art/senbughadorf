import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CloudWatchProvider } from './components/CloudWatchProvider';
import { ToastContainer, useToast } from './components/ToastNotification';
import './index.css';

console.log('Starting VoiceInsight app...');

const AppWithProviders: React.FC = () => {
  const { toasts, removeToast } = useToast();
  
  return (
    <CloudWatchProvider>
      <App />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </CloudWatchProvider>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  throw new Error('Root element not found');
}

console.log('Root element found, creating React root...');

try {
  const root = createRoot(rootElement);
  console.log('React root created, rendering VoiceInsight...');
  
  root.render(
    <StrictMode>
      <AppWithProviders />
    </StrictMode>
  );
  
  console.log('VoiceInsight rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial; text-align: center;">
      <h2>🚨 VoiceInsight Loading Error</h2>
      <p style="margin: 20px 0;">${error}</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
        🔄 Reload App
      </button>
    </div>
  `;
}