// 文章详情页逻辑

document.addEventListener('DOMContentLoaded', () => {
    initPostDetail();

    // 初始化移动端菜单（使用公共函数）
    initMobileMenu();
});

function initPostDetail() {
    try {
        // 从 URL 获取文章 ID
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));

        if (!postId) {
            window.location.href = 'index.html';
            return;
        }

        // 查找文章
        const post = postsData.find(p => p.id === postId);

        if (!post) {
            showError('文章不存在');
            return;
        }

        // 更新页面内容
        document.title = `${post.title} - TechBlog`;
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-date').textContent = post.date;
        document.getElementById('post-category').textContent = post.category;

        // 使用安全函数设置 HTML 内容
        safeSetHTML(document.getElementById('post-content'), post.content);
    } catch (error) {
        console.error('加载文章详情失败:', error);
        showError('加载文章详情失败，请稍后重试');
    }
}
