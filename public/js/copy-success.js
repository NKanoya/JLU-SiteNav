/* 复制成功的动画 */

const floatingBox = document.getElementById('floatingBox');

function showFloatingBox() {
    // 添加 class 触发动画
    floatingBox.classList.add('show');

    setTimeout(() => {
        floatingBox.classList.remove('show');
    }, 2000);
}