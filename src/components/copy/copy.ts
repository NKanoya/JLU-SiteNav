import { ref } from 'vue';

export const copySuccess = ref(false);

/**
 * 将给定的文本内容写入用户的剪贴板。
 * @param text 要复制的文本内容。
 */
const copyToClipboard = (text: string, success: Function, fail: Function) => {
    // 1. 检查浏览器是否支持 Clipboard API
    if (!navigator.clipboard) {
        console.error("当前浏览器不支持 Clipboard API");
        return;
    }

    try {
        // 写入文本
        navigator.clipboard.writeText(text)
            .then(success());
    } catch (err) {
        console.error("无法写入剪贴板:", err);
        fail();
    }
};

export const copyLinkToClipboard = (link: string) => {
    copyToClipboard(
        link,
        ()=> {
            copySuccess.value = true;
            setTimeout(() => {
                copySuccess.value = false;
            },2000)
        },
        ()=> {});
};
