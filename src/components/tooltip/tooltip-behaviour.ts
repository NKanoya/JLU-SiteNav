import { ref, Ref } from 'vue';

export const currentRedirectDisabled = ref('');
export const toolTipContentType = ref('');
export const display : Ref<boolean, boolean> = ref(true);

interface pageAxis {
    pageX: string,
    pageY: string
}

export const toolTipPosition : Ref<pageAxis, pageAxis> = ref({
    pageX: '0',
    pageY: '0'
});

/**
 * @brief 按照显示内容的类型，更改悬浮框中的显示内容，并显示新的悬浮框
 *
 * @param newType 可选值如下
 * - 作为 string 时，可以使toolTipContent 中的键名
 * - 作为 [string, string] 时：可以是 ['redirectDisabled', (当前导航块的名称)]
 *
 * @note 该函数会被暴露给 'SiteCard.vue' 使用，在需要显示隐藏悬浮框时调用
 */
export const displayTooltip = (newType: string | [string, string]) => {
    if(typeof newType === 'string') {
        toolTipContentType.value = newType;
        display.value = true;                   // 显示文本
        return;
    }

    // ['redirectDisabled', (当前导航块的名称)]
    if(newType[0] === 'redirectDisabled') {
        toolTipContentType.value = 'redirectDisabled';
        if(typeof newType[1] === 'string') {
            currentRedirectDisabled.value = newType[1];
        }
        display.value = true;
        return;
    }

    {
        console.error('Incorrect argument \'' + newType + '\' of function displayToolTip()!');
    }

};

/**
 * @brief 隐藏悬浮框
 * @note 该函数会被暴露给 'SiteCard.vue' 使用，在需要隐藏悬浮框时调用
 */
export const hideTooltip = () => {
    display.value = false;
};

/**
 * @brief 追踪鼠标的位置，更新悬浮框的位置
 * @note 该函数会被暴露给 'SiteCard.vue' 使用，在需要显示悬浮框且鼠标移动时调用
 */
export const updateToolTipPosition = (event) : void => {
    // 悬浮框位置按鼠标位置右下 15px 偏移
    toolTipPosition.value.pageX = (event.pageX + 15) + 'px';
    toolTipPosition.value.pageY = (event.pageY + 15) + 'px';
};