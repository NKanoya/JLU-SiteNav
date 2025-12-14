import { ref, Ref } from 'vue';

export const currentRedirectDisabled = ref('');
export const toolTipContentType = ref('');
export const display : Ref<boolean, boolean> = ref(false);

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
 * 更新悬浮框位置，防止其超出屏幕右侧边界。
 * @param event 鼠标事件对象 (MouseEvent)
 */
export const updateToolTipPosition = (event: MouseEvent): void => {
    const tooltipEl = document.getElementById('tooltip');
    if (!tooltipEl) return;

    // 获取关键尺寸
    // 悬浮框的完整宽度 (offsetWidth 包含 padding 和 border)
    const tooltipWidth: number = tooltipEl.offsetWidth;
    // 浏览器视口的宽度
    const viewportWidth: number = window.innerWidth;

    // 鼠标当前位置
    const mouseX: number = event.pageX;
    const mouseY: number = event.pageY;

    // 默认的偏移量 (用于在鼠标和悬浮框之间留出空间)
    const OFFSET_X: number = 15;
    const OFFSET_Y: number = 15;

    // 计算水平位置 (Left)
    // 默认放置位置的右边缘距离屏幕右边缘的距离
    const overflowDistance = mouseX + OFFSET_X + tooltipWidth;

    if (overflowDistance > viewportWidth) {
        // 溢出情况：悬浮框需要左移到鼠标的左侧

        // 贴着鼠标左侧
        const newLeft = mouseX - tooltipWidth - OFFSET_X;

        // 进一步检查左侧是否溢出 (防止在最左边缘时左侧溢出)
        if (newLeft < 0) {
            // 极端情况：悬浮框比屏幕宽或鼠标在最左侧。让它从 0px 开始。
            tooltipEl.style.left = `0px`;
        } else {
            tooltipEl.style.left = `${newLeft}px`;
        }

    } else {
        // 正常情况：悬浮框放置在鼠标右侧
        tooltipEl.style.left = `${mouseX + OFFSET_X}px`;
    }

    tooltipEl.style.top = `${mouseY + OFFSET_Y}px`;
};