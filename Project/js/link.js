/* 处理点击事件：打开对应的链接 */

const siteLinks = {
    "site-www": "https://www.jlu.edu.cn",
    "site-icourses": "https://icourses.jlu.edu.cn",
    "site-iedu": "https://iedu.jlu.edu.cn",
    "site-ip": "https://ip.jlu.edu.cn",
    "site-vpn": "https://vpn.jlu.edu.cn",
    "site-nic": "https://nic.jlu.edu.cn",
    "site-oa": "https://oa.jlu.edu.cn",
    "site-lib": "https://lib.jlu.edu.cn",
    "site-ehall": "https://ehall.jlu.edu.cn",
    "site-jwc": "https://jwc.jlu.edu.cn",
    "site-kszx": "https://kszx.jlu.edu.cn",
    "site-mails": "https://mails.jlu.edu.cn",
    "site-dsf": "https://dsf.jlu.edu.cn",
    "site-yx": "https://yx.jlu.edu.cn",
    "site-zbhrj1": "https://zbhrj1.jlu.edu.cn",
    "site-chaoxing": "https://jlu.fy.chaoxing.com",
    "site-ilearntec": "https://ilearntec.jlu.edu.cn"
};

const NewsiteLinks = {
    "site-www-new": "https://www.jlu.edu.cn",
    "site-icourses-new": "https://icourses.jlu.edu.cn",
    "site-iedu-new": "https://iedu.jlu.edu.cn",
    "site-ip-new": "https://ip.jlu.edu.cn",
    "site-vpn-new": "https://vpn.jlu.edu.cn",
    "site-nic-new": "https://nic.jlu.edu.cn",
    "site-oa-new": "https://oa.jlu.edu.cn",
    "site-lib-new": "https://lib.jlu.edu.cn",
    "site-ehall-new": "https://ehall.jlu.edu.cn",
    "site-jwc-new": "https://jwc.jlu.edu.cn",
    "site-kszx-new": "https://kszx.jlu.edu.cn",
    "site-mails-new": "https://mails.jlu.edu.cn",
    "site-dsf-new": "https://dsf.jlu.edu.cn",
    "site-yx-new": "https://yx.jlu.edu.cn",
    "site-zbhrj1-new": "https://zbhrj1.jlu.edu.cn",
    "site-chaoxing-new": "https://jlu.fy.chaoxing.com",
    "site-ilearntec-new": "https://ilearntec.jlu.edu.cn"
};

Object.keys(siteLinks).forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach(element => {
        element.addEventListener('click', function () {
            // 点击元素框时在本标签页中打开对应的网站
            window.location.href = siteLinks[className];
        });
    });
});

Object.keys(NewsiteLinks).forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach(element => {
        element.addEventListener('click', function (event) {
            event.stopPropagation();

            // 点击加号标志时在新标签页中打开对应的网站
            window.open(NewsiteLinks[className], '_blank');
        });
    });
});