// 文章详情页逻辑

document.addEventListener('DOMContentLoaded', () => {
    initPostDetail();
});

function initPostDetail() {
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
        window.location.href = 'index.html';
        return;
    }

    // 更新页面内容
    document.title = `${post.title} - TechBlog`;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-category').textContent = post.category;
    document.getElementById('post-content').innerHTML = post.content;

    // 初始化移动端菜单
    initMobileMenu();
}

// 初始化移动端菜单
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}
