interface TooltipContent {
    copyIcon: string;
    plusIcon: string;
    redirect: string;
    redirectDisabled: string;
    format: (arg0: string, arg1: any[]) => string;
}

export const toolTipContent : TooltipContent = {
    copyIcon : '点击复制链接',
    plusIcon: '点击在新标签页内打开',
    redirect: '点击跳转',
    redirectDisabled : '提示：由于{0}访问要求，\n请单击本框目右上角复制图标复制链接，\n在地址栏中粘贴回车访问。',

    format: function(key: string, ...args: any[]): string {
        return this[key].replace(/\{(\d+)\}/g, (match, index) => {
            const i = parseInt(index, 10);
            return args[i] !== undefined ? args[i] : match;
        });
    }
};
