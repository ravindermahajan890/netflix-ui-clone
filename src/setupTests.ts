// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

jest.mock('./env', () => ({
  default: {
    VITE_APP_NAME: 'Test App Name',
  },
}));
