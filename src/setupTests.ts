// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

jest.mock('./env', () => ({
  default: {
    APP_NAME: 'Test App Name',
    API_ENDPOINT: 'http://unit-test.com',
    RECAPTCHA_SITE_KEY: 'test key',
  },
}));
