import { CarouselHome } from 'components/pages/home/CarouselHome/CarouselHome';
import React from 'react';
import { render } from '@testing-library/react';

describe('SocialBar component', () => {
  it('renders the component', () => {
    const { container } = render(<CarouselHome />);
    expect(container).toMatchSnapshot();
  });
});
