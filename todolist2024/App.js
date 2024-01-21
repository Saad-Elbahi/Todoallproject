import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://ea67-160-179-99-184.ngrok-free.app' }}
      style={{ flex: 1 }}
      originWhitelist={['*']}  // Update this to be more restrictive in production
    />
  );
}
