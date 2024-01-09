/** @type {import('next').NextConfig} */
// 判断环境
const isProd = ['production'].includes(process.env.NODE_ENV);
// 重定向
// const redirects=()=> {
//   return [
//     {
//       source: '/',
//       destination: '/login',
//       permanent: true,
//     },
//   ]
// }
// 转发
const rewrites = () => {
  return [
    {
      source: '/api/:slug*',
      destination: process.env.PROXY,
    },
  ];
};
const nextConfig = {
  rewrites,
};

module.exports = nextConfig;
