import { PropsWithChildren } from 'react';
import AuthProvider from './Auth';
import Theme from './Theme';

const Providers = ({ children }: PropsWithChildren) => (
  <Theme>
    <AuthProvider>{children}</AuthProvider>
  </Theme>
);

export default Providers;
