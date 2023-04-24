import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutingManagement from './router'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutingManagement />
  </React.StrictMode>
);