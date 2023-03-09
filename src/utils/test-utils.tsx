// eslint-disable-next-line import/no-extraneous-dependencies
import { render as rtlRender } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import Theme from '../providers/Theme';

// eslint-disable-next-line import/prefer-default-export
export const render = (ui: ReactElement) => {
  const wrapper = ({ children }: PropsWithChildren) => <Theme>{children}</Theme>;

  return rtlRender(ui, { wrapper });
};
