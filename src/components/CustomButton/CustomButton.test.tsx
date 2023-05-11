import { render } from '@testing-library/react';
import CustomButton from '.';

describe('CustomButton', () => {
  it('should render', () => {
    const { asFragment } = render(<CustomButton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
