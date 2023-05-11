import { render } from '../../utils/test-utils';
import SignUp from '.';

describe('CustomButton', () => {
  it('should render', () => {
    const { asFragment } = render(<SignUp />);

    expect(asFragment()).toMatchSnapshot();
  });
});
