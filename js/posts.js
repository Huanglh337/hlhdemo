// 示例文章数据
const postsData = [
    {
        id: 1,
        title: "JavaScript 异步编程详解",
        category: "前端开发",
        date: "2026-09-01",
        summary: "深入理解 Promise、async/await 以及异步编程的核心概念，掌握现代 JavaScript 的异步处理方式。",
        content: `
            <h2>什么是异步编程？</h2>
            <p>异步编程是现代 JavaScript 开发中不可或缺的一部分。它允许程序在等待某些操作完成时继续执行其他任务，而不是阻塞整个程序的运行。</p>

            <h2>Promise 基础</h2>
            <p>Promise 是异步编程的一种解决方案，它代表一个异步操作的最终完成或失败。</p>
            <pre><code>const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'success' });
        }, 1000);
    });
};</code></pre>

            <h2>async/await</h2>
            <p>async/await 是 Promise 的语法糖，让异步代码看起来像同步代码一样。</p>
            <pre><code>async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}</code></pre>

            <h2>错误处理</h2>
            <p>在异步编程中，正确处理错误非常重要。使用 try-catch 块或 .catch() 方法来捕获可能的异常。</p>
        `
    },
    {
        id: 2,
        title: "CSS Grid 布局完全指南",
        category: "前端开发",
        date: "2026-08-25",
        summary: "全面了解 CSS Grid 布局系统，从基础概念到高级用法，轻松创建复杂的网页布局。",
        content: `
            <h2>Grid 布局简介</h2>
            <p>CSS Grid 是一个二维布局系统，可以同时处理行和列，是创建复杂网页布局的强大工具。</p>

            <h2>基本属性</h2>
            <p>使用 display: grid 创建网格容器，然后定义网格结构。</p>
            <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}</code></pre>

            <h2>网格项目定位</h2>
            <p>使用 grid-column 和 grid-row 精确控制项目在网格中的位置。</p>
            <pre><code>.item {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}</code></pre>

            <h2>响应式设计</h2>
            <p>结合 minmax() 和 auto-fit/auto-fill，可以轻松实现响应式布局。</p>
        `
    },
    {
        id: 3,
        title: "Node.js 后端开发入门",
        category: "后端开发",
        date: "2026-08-18",
        summary: "从零开始学习 Node.js 后端开发，搭建服务器、处理请求、连接数据库。",
        content: `
            <h2>Node.js 简介</h2>
            <p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，让 JavaScript 可以在服务器端运行。</p>

            <h2>创建服务器</h2>
            <p>使用内置的 http 模块可以快速创建一个简单的服务器。</p>
            <pre><code>const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

server.listen(3000);</code></pre>

            <h2>Express 框架</h2>
            <p>Express 是 Node.js 最流行的 Web 框架，简化了路由和中间件的处理。</p>
            <pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);</code></pre>

            <h2>中间件</h2>
            <p>中间件是 Express 的核心概念，用于处理请求、响应和应用程序生命周期中的各种任务。</p>
        `
    },
    {
        id: 4,
        title: "Git 工作流最佳实践",
        category: "工具与效率",
        date: "2026-08-10",
        summary: "掌握 Git 的核心概念和最佳工作流程，提升团队协作效率。",
        content: `
            <h2>Git 基础概念</h2>
            <p>Git 是一个分布式版本控制系统，理解其核心概念是高效使用它的关键。</p>

            <h2>分支策略</h2>
            <p>合理的分支策略可以让团队协作更加顺畅。常见的有 Git Flow、GitHub Flow 等。</p>

            <h2>提交规范</h2>
            <p>编写清晰的提交信息是良好的开发习惯。</p>
            <pre><code>feat: 添加用户登录功能
fix: 修复购物车计算错误
docs: 更新 API 文档</code></pre>

            <h2>合并与变基</h2>
            <p>理解 merge 和 rebase 的区别，根据场景选择合适的合并方式。</p>
        `
    },
    {
        id: 5,
        title: "React Hooks 实战技巧",
        category: "前端开发",
        date: "2026-08-05",
        summary: "深入理解 React Hooks 的工作原理，掌握 useState、useEffect 等常用 Hook 的最佳用法。",
        content: `
            <h2>Hooks 是什么？</h2>
            <p>Hooks 让你在不编写 class 的情况下使用 state 以及其他 React 特性。</p>

            <h2>useState</h2>
            <p>useState 是最基础的 Hook，用于在函数组件中添加状态。</p>
            <pre><code>const [count, setCount] = useState(0);</code></pre>

            <h2>useEffect</h2>
            <p>useEffect 用于处理副作用，如数据获取、订阅等。</p>
            <pre><code>useEffect(() => {
    document.title = \`Count: \${count}\`;
}, [count]);</code></pre>

            <h2>自定义 Hook</h2>
            <p>可以创建自定义 Hook 来复用状态逻辑，提高代码的可维护性。</p>
        `
    },
    {
        id: 6,
        title: "Docker 容器化部署指南",
        category: "DevOps",
        date: "2026-07-28",
        summary: "学习如何使用 Docker 容器化应用程序，实现快速部署和环境一致性。",
        content: `
            <h2>Docker 基础</h2>
            <p>Docker 是一个开源的容器化平台，可以将应用程序及其依赖打包成标准化的单元。</p>

            <h2>Dockerfile</h2>
            <p>Dockerfile 定义了如何构建 Docker 镜像。</p>
            <pre><code>FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]</code></pre>

            <h2>Docker Compose</h2>
            <p>使用 Docker Compose 可以轻松管理多容器应用。</p>

            <h2>最佳实践</h2>
            <p>了解如何优化镜像大小、处理数据持久化和网络安全。</p>
        `
    }
];
