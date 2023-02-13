import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './modules/Home';
import Theme from './providers/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <CssBaseline />
      <Home />
    </Theme>
  </React.StrictMode>,
);
