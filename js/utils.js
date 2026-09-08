/**
 * 公共工具函数
 */

/**
 * 初始化移动端菜单
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            // 更新 ARIA 属性
            hamburger.setAttribute('aria-expanded', isActive);
        });

        // 键盘导航支持
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburger.click();
            }
        });

        // ESC 键关闭菜单
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });
    }
}

/**
 * 安全地设置 HTML 内容（防止 XSS）
 * @param {HTMLElement} element - 目标元素
 * @param {string} html - HTML 字符串
 */
function safeSetHTML(element, html) {
    if (!element) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    element.innerHTML = '';

    Array.from(doc.body.childNodes).forEach(node => {
        element.appendChild(document.importNode(node, true));
    });
}

/**
 * 显示错误提示
 * @param {string} message - 错误信息
 */
function showError(message) {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h2 style="color: #ef4444;">出错了</h2>
                <p style="color: #64748b;">${message}</p>
                <a href="index.html" style="color: #2563eb; margin-top: 1rem; display: inline-block;">返回首页</a>
            </div>
        `;
    }
}

/**
 * 格式化日期
 * @param {string} dateString - 日期字符串
 * @returns {string} 格式化后的日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
