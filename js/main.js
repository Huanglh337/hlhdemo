// 主要逻辑

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化文章列表
    initPostsList();

    // 初始化移动端菜单
    initMobileMenu();
});

// 初始化文章列表
function initPostsList() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    // 生成文章卡片
    const postsHTML = postsData.map(post => createPostCard(post)).join('');
    postsContainer.innerHTML = postsHTML;

    // 为每个卡片添加点击事件
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', () => {
            const postId = card.dataset.id;
            window.location.href = `post.html?id=${postId}`;
        });
    });
}

// 创建文章卡片 HTML
function createPostCard(post) {
    return `
        <article class="post-card" data-id="${post.id}">
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <div class="post-meta">
                <span>${post.category}</span>
                <span>${post.date}</span>
            </div>
        </article>
    `;
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
