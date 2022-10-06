import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';

// @see https://blog.logrocket.com/create-next-js-mdx-blog/
const config = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
};

export default config;
