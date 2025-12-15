import { ref, Ref } from 'vue';
import { toolTipContentList, Formatted } from '@/data/tooltip'

export const toolTipContent = ref('');
export const display : Ref<boolean, boolean> = ref(false);

/**
 * @brief 按照显示内容的类型，更改悬浮框中的显示内容，并显示新的悬浮框
 *
 * @param newType 可选值如下
 * - 作为 string 时，可以使toolTipContent 中的键名
 * - 作为 { newType: string, param: any[] } 时： newType 为键名； param 为要替换占位符的内容
 *
 * @note 该函数会被暴露给 'SiteCard.vue' 使用，在需要显示隐藏悬浮框时调用
 */
export const displayTooltip = (newType: string | { newType: string, param: any[] } ) => {
    // 单一字符串参数
    if(typeof newType === 'string') {
        // 内容列表中查找是否存在该字符串键
        if(toolTipContentList.hasOwnProperty(newType)) {
            const content = toolTipContentList[newType];
            // 如果字符串键对应的也是单一字符串文本值
            if(typeof content === 'string') {
                //
                toolTipContent.value = content;
                display.value = true;                   // 显示文本
            } else {
                // 字符串键存在，但对应的不是单一文本值
                console.error('Argument \'' + newType + '\' of function displayToolTip() needs an array param!');
            }
            return;
        }

    }

    // { newType: string, param: any[] } 参数
    // 不必判断：判断 newType 字段是否在内容列表的键中存在
    // else if(toolTipContentList.hasOwnProperty(newType.newType)) {
        const content = toolTipContentList[newType.newType];
        // 判断字段对应的是否为 Formatted 对象
        if(content instanceof Formatted) {
            // 显示 format() 后的字符串
            toolTipContent.value = content.format(newType.param);
            display.value = true;                   // 显示文本
            return;
        }
    //     else {
    //         // 字符串键存在
    //         console.error('Argument \'' + newType + '\' of function displayToolTip() does not need an array param!');
    //     }
    // }

    // 参数错误，该键不存在
    console.error('Incorrect argument \'' + newType + '\' of function displayToolTip()!');



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
    const mouseX: number = event.clientX;
    const mouseY: number = event.clientY;

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