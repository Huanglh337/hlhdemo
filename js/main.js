// 主要逻辑

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化文章列表
    initPostsList();

    // 初始化移动端菜单（使用公共函数）
    initMobileMenu();
});

// 初始化文章列表
function initPostsList() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    try {
        // 生成文章卡片
        const postsHTML = postsData.map(post => createPostCard(post)).join('');
        postsContainer.innerHTML = postsHTML;

        // 使用事件委托处理点击事件，提升性能
        postsContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.post-card');
            if (card) {
                const postId = card.dataset.id;
                window.location.href = `post.html?id=${postId}`;
            }
        });
    } catch (error) {
        console.error('初始化文章列表失败:', error);
        showError('加载文章列表失败，请稍后重试');
    }
}

// 创建文章卡片 HTML
function createPostCard(post) {
    return `
        <article class="post-card" data-id="${post.id}">
            <h3>${escapeHTML(post.title)}</h3>
            <p>${escapeHTML(post.summary)}</p>
            <div class="post-meta">
                <span>${escapeHTML(post.category)}</span>
                <span>${escapeHTML(post.date)}</span>
            </div>
        </article>
    `;
}

// 转义 HTML 特殊字符，防止 XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
