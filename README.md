这是一个基于 React18、NextJS、 Ant-Design、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案

## 运行项目

```bash
npm run dev
# or
yarn dev
```

输入 [http://localhost:3000](http://localhost:3000) 可在浏览器中显示结果

## 环境要求

```bash
"node": ">=18.17.0"
```

## 基础组件

- [NextJS](https://nextjs.org/docs)是一个用于构建全栈 Web 应用程序的 React 框架
- [Ant Design](https://ant-design.antgroup.com/components/overview-cn?from=msidevs.net) UI组件库
- [Tailwindcss](https://www.tailwindcss.cn/docs/installation) 原子化 css 组件库（可选择使用，但是强烈推荐使用）
- [ZUSTAND](https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand) 状态管理
- [ahooks](https://ahooks.js.org/zh-CN)一套高质量可靠的 React Hooks 库

## 线上地址

https://react-next-admin.pages.dev/login

## 部署

### 静态部署 [deploying](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#deploying)

要启用静态导出，请更改其中 next.config.js 的输出模式：

```javascript
/**
* @type {import('next').NextConfig}
  */
  const nextConfig = {
  output: 'export',
}

module.exports = nextConfig
```

运行 next build 后，Next.js 将生成一个 out 文件夹，其中包含应用程序的 HTML/CSS/JS

> 注意：APP路使用next/router是会出现 router 未挂载的问题，需要使用next/navigation这个钩子函数

### Docker部署

#### 构建 docker 镜像

```docker
 docker image build -t react-next-admin .
 
 docker image ls
```

#### 运行镜像

```docker
docker container run -d -p 8080:4000 -it react-next-admin
```

### NodeJS环境部署

> 注意
> 运行 npm run start 来构建你的应用时，next.config.js 中 output: 'export' 需要去掉

```shell
npm run build
```

运行 npm run start 启动 Node.js 服务器

```shell
npm run start
```
