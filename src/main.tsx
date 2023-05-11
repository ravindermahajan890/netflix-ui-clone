import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from './providers';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <CssBaseline />
      <Router />
    </Providers>
  </React.StrictMode>,
);
