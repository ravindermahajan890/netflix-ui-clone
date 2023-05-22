import { render } from '../../utils/test-utils';
import Authenticate from '.';

jest.mock('./auth_background.jpg', () => 'mock_image');

describe('CustomButton', () => {
  it('should render', () => {
    const { asFragment } = render(<Authenticate />);

    expect(asFragment()).toMatchSnapshot();
  });
});
