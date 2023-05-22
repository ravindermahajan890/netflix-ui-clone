import { PropsWithChildren } from 'react';
import AuthProvider from './Auth';
import ThemeProvider from './Theme';

const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);

export default Providers;
