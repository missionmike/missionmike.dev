import React from 'react';
import { SocialBar } from 'components/SocialBar/SocialBar';
import { render } from '@testing-library/react';

describe('SocialBar component', () => {
  it('renders the component', () => {
    const { container } = render(<SocialBar />);
    expect(container).toMatchSnapshot();
  });
});
