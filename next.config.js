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
      source: "/api/:slug*",
      destination: "http://localhost:7000/api/:slug*",
    },
  ];
};
const nextConfig = {
  isProd,
  rewrites,
  redirects
}

module.exports = nextConfig
