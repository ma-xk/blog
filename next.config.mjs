/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fhqkfry3rq.us-east-1.awsapprunner.com', 'parrot-seo.s3.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/fsa-eligible-products/:slug*',
        destination: '/market/fsa-eligible-products',
        permanent: true,
      },
      {
        source: '/fsa-eligible-product-categories/:slug*',
        destination: '/market/categories',
        permanent: true,
      },
      {
        source: '/market/products/:slug*',
        destination: '/market/fsa-eligible-products/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
