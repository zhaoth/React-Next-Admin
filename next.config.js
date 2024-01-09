/** @type {import('next').NextConfig} */
// 判断环境
  const isProd = ['production'].includes(process.env.NODE_ENV)
// 重定向
const redirects=()=> {
  return [
    {
      source: '/',
      destination: '/login',
      permanent: true,
    },
  ]
}
// 转发
const rewrites = () => {
  return [
    {
      source: "/:slug*",
      destination: process.env.PROXY,
    },
  ];
};
console.log(process.env);
const nextConfig = {
  isProd,
  rewrites,
  redirects
}

module.exports = nextConfig
