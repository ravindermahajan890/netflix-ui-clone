import { render } from '../../utils/test-utils';
import Input from '.';

describe('Input', () => {
  it('should render', () => {
    const { asFragment } = render(<Input label="test-label" icon={<>Icon</>} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
