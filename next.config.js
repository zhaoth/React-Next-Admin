/** @type {import('next').NextConfig} */
// 判断环境
const isProd = ['production'].includes(process.env.NODE_ENV);
// 转发
const rewrites = () => {
  if (!isProd) {
    return [
      {
        source: '/api/:slug*',
        destination: process.env.PROXY,
      },
    ];
  } else {
    return [];
  }
};
const nextConfig = {
  rewrites,
  output: 'export',
  reactStrictMode: false,
};

module.exports = nextConfig;
