// eslint-disable-next-line import/no-extraneous-dependencies
import { render as rtlRender } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { HashRouter } from 'react-router-dom';
import Providers from '../providers';

// eslint-disable-next-line import/prefer-default-export
export const render = (ui: ReactElement) => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <Providers>
      <HashRouter>{children}</HashRouter>
    </Providers>
  );

  return rtlRender(ui, { wrapper });
};
