import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './modules/SignUp';
import Theme from './providers/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <CssBaseline />
      <SignUp />
    </Theme>
  </React.StrictMode>,
);
