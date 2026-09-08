# 个人技术博客

一个使用纯 HTML5+CSS+JavaScript 构建的个人技术博客。

## 功能特性

- 首页文章列表展示
- 文章详情页（支持代码高亮）
- 关于页面
- 响应式设计（支持手机、平板、电脑）
- 移动端菜单导航

## 使用方式

### 方法 1：直接打开
在浏览器中打开 `index.html` 文件即可。

### 方法 2：使用本地服务器
```bash
# 使用 Python
cd tech-blog
python -m http.server 8000

# 或使用 Node.js
npx serve tech-blog
```

然后访问 http://localhost:8000

## 自定义

### 添加新文章
编辑 `js/posts.js` 文件，按照现有格式添加新文章：

```javascript
{
    id: 7,
    title: "文章标题",
    category: "分类",
    date: "2026-09-08",
    summary: "文章摘要",
    content: `
        <h2>章节标题</h2>
        <p>文章内容...</p>
    `
}
```

### 修改个人信息
编辑 `about.html` 文件更新个人信息。

### 修改样式
编辑 `css/style.css` 文件调整样式。

## 项目结构

```
tech-blog/
├── index.html          # 首页
├── post.html           # 文章详情页
├── about.html          # 关于页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── posts.js        # 文章数据
│   ├── main.js         # 主页逻辑
│   └── post.js         # 文章详情页逻辑
├── images/             # 图片目录
└── posts/              # 文章目录
```

## 技术栈

- HTML5
- CSS3（支持 CSS Grid、Flexbox、CSS 变量）
- JavaScript（ES6+）
