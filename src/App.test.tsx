import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should increase count', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText('Count is 0'));

    expect(getByText('Count is 1')).toBeInTheDocument();
  });

  it('should reset the count', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText('Count is 0'));
    fireEvent.click(getByText('Reset the count'));

    expect(getByText('Count is 0')).toBeInTheDocument();
  });
});
