/**
 * 项目配置文件
 */

const CONFIG = {
    // 网站信息
    site: {
        title: 'TechBlog - 个人技术博客',
        description: '分享前端开发、后端架构、编程心得',
        author: 'TechBlog',
        url: 'https://github.com/Huanglh337/hlhdemo'
    },

    // SEO 配置
    seo: {
        keywords: ['JavaScript', 'CSS', 'HTML', '前端开发', '后端开发', 'React', 'Vue', 'Node.js'],
        ogImage: 'https://via.placeholder.com/1200x630?text=TechBlog'
    },

    // 文章配置
    posts: {
        postsPerPage: 6,
        summaryLength: 150
    },

    // 主题配置
    theme: {
        primaryColor: '#2563eb',
        darkMode: false
    },

    // 联系方式
    contact: {
        github: 'https://github.com',
        email: 'your@email.com'
    }
};

// 导出配置（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
