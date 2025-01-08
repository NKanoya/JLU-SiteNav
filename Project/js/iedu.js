/* 教务网站复制链接按钮 */

const copyButtons = document.querySelectorAll('.copy-icon');

copyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        
        // 复制的目标内容为 data-text 属性内容其同名ID元素内的内容
        const targetId = button.getAttribute('data-text');
        const targetText = document.getElementById(targetId).innerText;

        // 将文本内容复制到剪切板
        navigator.clipboard.writeText(targetText).then(function () {
            showFloatingBox();
            // 复制成功出现动画
        }).catch(function (error) {
            alert('复制失败: ' + error);
        });
    });
});