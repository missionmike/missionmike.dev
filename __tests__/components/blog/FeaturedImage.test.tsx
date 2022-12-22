import { FeaturedImage } from 'components/blog/FeaturedImage/FeaturedImage';
import { Post } from 'types/post';
import React from 'react';
import { render } from '@testing-library/react';

describe('FeaturedImage component', () => {
  it('renders the component', () => {
    const post: Post = {
      href: '#',
      frontMatter: {
        featuredImage: 'javascript:;',
      },
    };
    const { container } = render(<FeaturedImage post={post} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the component with priority', () => {
    const post: Post = {
      href: '#',
      frontMatter: {
        featuredImage: 'javascript:;',
      },
    };
    const { container } = render(<FeaturedImage post={post} priority={true} />);
    expect(container).toMatchSnapshot();
  });
});
