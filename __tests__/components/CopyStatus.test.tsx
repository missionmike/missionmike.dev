import { CopyStatus } from 'components/CopyStatus/CopyStatus';
import React from 'react';
import { render } from '@testing-library/react';

describe('CopyStatus component', () => {
  it('renders the component with default copy text', () => {
    const { container } = render(<CopyStatus />);
    expect(container).toMatchSnapshot();
  });

  it('renders the component with custom copy text', () => {
    const { container } = render(<CopyStatus copyText="Click to copy!" />);
    expect(container).toMatchSnapshot();
  });
});
