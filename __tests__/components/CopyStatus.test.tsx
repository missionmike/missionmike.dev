import { CopyStatus } from 'components/CopyStatus';
import React from 'react';
import { render } from '@testing-library/react';

describe('CopyStatus component', () => {
  it('renders the component with default copy text', () => {
    const { container } = render(<CopyStatus copied={true} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the component with custom copy text', () => {
    const { container } = render(<CopyStatus copied={true} copyText="Click to copy!" />);
    expect(container).toMatchSnapshot();
  });

  it('renders the component when copied', () => {
    const { container } = render(<CopyStatus copied={true} copyText="Copied!" />);
    expect(container).toMatchSnapshot();
  });
});
