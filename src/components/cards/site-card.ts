import {displayTooltip, hideTooltip, updateToolTipPosition} from "@/components/tooltip/tooltip-behaviour";
import { copyLinkToClipboard }  from "@/components/copy/copy";
import { safeRedirect as accessSite } from "@/components/cards/safe-redirect";

// 鼠标事件类型
interface ElementMouseEvent {
    // 事件对应函数
    mousedown?: (... any) => void;    // 鼠标按下
    mouseup?: (... any) => void;      // 鼠标抬起
    click?: (... any) => void;       // 鼠标完整单击过程后的逻辑

    mouseenter?: (... any) => void;
    mouseleave?: (... any) => void;
    mousemove?: (... any) => void;
}

export interface MouseEvents {
    [key: string]: ElementMouseEvent;
}

export const cardsMouseEvents : MouseEvents = {

    // 拷贝按钮的 对应函数
    copyIcon: {
        // 鼠标点击时
        mousedown: function(event) : void {
            event.currentTarget.classList.add("copy-icon-active");
            event.stopPropagation();        // 阻止事件冒泡
        },

        // 鼠标抬起时
        mouseup: function(event) : void {
            event.currentTarget.classList.remove("copy-icon-active");
            event.stopPropagation();
        },

        click: (event: any, site: string) : void => {
            copyLinkToClipboard('https://' + site);
            event.stopPropagation();       // 阻止向上冒泡
        },
        mouseenter: () : void => {
            displayTooltip('copyIcon');     // 显示状态
        },
        mouseleave: (title: string) : void => {
            hideTooltip();
        },
        mousemove: (event: any): void => {
            updateToolTipPosition(event);
        }
    },

    plusIcon: {
        mouseenter: (): void => {
            displayTooltip('plusIcon');
        },

        mouseleave: () : void => {
            hideTooltip();
        },

        click: (event: any, site: string): void => {
            accessSite.inNewTab('https://' + site);
            event.stopPropagation();       // 阻止向上冒泡
        },
        mousemove: (event: any): void => {
            updateToolTipPosition(event);
        }
    },

    card: {
        // 鼠标点击时
        mousedown: (event : any) : void => {
            event.currentTarget.classList.add("card-active");
        },
        // 鼠标抬起时
        mouseup: (event : any) : void => {
            // 更新 isActive 状态
            event.currentTarget.classList.remove("card-active");
        },

        click: (event: any, site: string) : void => {
            accessSite.inCurrentTab('https://' + site);
        }
    }
};


