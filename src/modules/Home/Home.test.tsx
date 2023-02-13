import { fireEvent } from '@testing-library/react';
import { render } from '../../utils/test-utils';
import Home from '.';

describe('Home', () => {
  it('should render', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should increase count', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Count is 0')).toBeInTheDocument();
    fireEvent.click(getByText('Increment'));

    expect(getByText('Count is 1')).toBeInTheDocument();
  });

  it('should reset the count', () => {
    const { getByText } = render(<Home />);

    fireEvent.click(getByText('Increment'));
    fireEvent.click(getByText('Reset the count'));

    expect(getByText('Count is 0')).toBeInTheDocument();
  });
});
