/* 搜索功能 */

const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.card');

searchBox.addEventListener('input', function () {
    const filter = searchBox.value.toLowerCase();   // 不区分大小写

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();       // 查找标题
        const description = card.querySelector('p').textContent.toLowerCase();  // 查找描述
        const site = card.querySelector('.site').textContent.toLowerCase();     // 查找网址

        // 不符合条件的隐藏
        const match = title.includes(filter) || description.includes(filter) || site.includes(filter);
        card.style.display = match ? 'flex' : 'none';
    });
});