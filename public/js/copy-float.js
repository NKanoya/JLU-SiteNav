/* 为 .need-copy 添加复制提示悬浮框 */

const needCopyElements = document.querySelectorAll('.need-copy, .plus-icon');

needCopyElements.forEach(function (element) {
    const tooltipClass = element.getAttribute('data-tooltip');
    const tooltip = document.querySelector(`.${tooltipClass}`);

    // 鼠标进入
    element.addEventListener('mouseenter', function (event) {
        tooltip.style.display = 'block';
    });

    // 鼠标移动
    element.addEventListener('mousemove', function (event) {
        tooltip.style.left = (event.pageX + 10) + 'px';  
        tooltip.style.top = (event.pageY + 10) + 'px';   
    });

    // 鼠标移出
    element.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none';
    });
});