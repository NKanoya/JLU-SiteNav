// dist/background.js
// 监听扩展程序图标的点击事件
chrome.action.onClicked.addListener(() => {

    // 获取当前扩展程序的 URL，指向 index.html
    const extensionUrl = chrome.runtime.getURL("index.html");

    // 在一个新的标签页中打开这个 URL
    chrome.tabs.create({ url: extensionUrl });
});