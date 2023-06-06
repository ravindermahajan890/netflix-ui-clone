import { render } from '../../utils/test-utils';
import Header from '.';

describe('Header', () => {
  it('should render', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
