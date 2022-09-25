import { CopyStatus, CopyText } from 'components/CopyStatus';

import React from 'react';
import { render } from '@testing-library/react';

describe('CopyStatus component', () => {
  it('renders the component', () => {
    const { container } = render(<CopyStatus copied={true} copyText="Copied!" />);
    expect(container).toMatchSnapshot();
  });
});
