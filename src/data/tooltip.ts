export class Formatted {
    private base : string;

    public constructor(baseString: string) {
        this.base = baseString
    };

    public format(...args: any[]): string {
        return this.base.replace(/\{(\d+)\}/g, (match, index) => {
            const i = parseInt(index, 10);
            return args[i] !== undefined ? args[i] : match;
        });
    };
}

interface StringDictionary {
    [key: string]: string | Formatted;
}

export const toolTipContentList : StringDictionary = {
    copyIcon : '点击复制链接',
    plusIcon: '点击在新标签页内打开',
    redirect: '点击跳转',
    redirectDisabled : new Formatted('提示：由于{0}访问要求，\n请单击本框目右上角复制图标复制链接，\n在地址栏中粘贴回车访问。'),
    // 悬浮按钮的悬浮框显示文本
    github: '项目 Github 仓库',
    brightness: new Formatted('切换到{0}模式')

};
