export interface DescriptionLine {
    tag: { sign: string } | null;
    content: string | null;
}

export interface TopSiteInfo {
    title: string;
    icon: string;
    description: [DescriptionLine | null, DescriptionLine | null];
    site: string;
    accessTag: string | null;
}

export const topSites : TopSiteInfo[] = [
    {
        title: '网络服务',
        icon: 'wifi',
        description: [
            {
                tag: null,
                content: 'PC校园网注册、充值。'
            },
            null
        ],
        site: 'ip.jlu.edu.cn',
        accessTag: 'card'
    },
    {
        title: 'WEBVPN',
        icon: 'web',
        description: [
            {
                tag: { sign: '校园网访问' },
                content: '链接至校内网站资源导航。'
            },
            {
                tag: { sign: '公共网访问' },
                content: '认证后可在校外访问图书馆期刊资源及校内网站。'
            }
        ],
        site: 'vpn.jlu.edu.cn',
        accessTag: 'mail'
    }
];