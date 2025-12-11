'use strict';

interface SiteInfo {
    icon: string | null;
    title: string;
    site: string;
    description: string[] | null;
    accessTag: string | null;
    priority: number;
    redirectDisabled: boolean;
}

const internalSites : SiteInfo[] = [
    {
        title: '网络服务',
        icon: 'wifi',
        description: ['PC校园网注册、充值。'],
        site: 'ip.jlu.edu.cn',
        accessTag: 'card',
        priority: 6,
        redirectDisabled: false
    },
    {
        title: 'WEBVPN',
        icon: 'web',
        description: [
            '经过账号认证后，可在校外网络环境访问图书馆期刊资源及校内网站。',
            '在校园网内访问时，链接至校内网站资源导航。',
        ],
        site: 'vpn.jlu.edu.cn',
        accessTag: 'mail',
        priority: 6,
        redirectDisabled: false,
    },
    {
        icon: 'star',
        title: '教务管理系统',
        site: 'iedu.jlu.edu.cn',
        description: ['查看个人基本信息、课表、专业培养方案、考试安排、成绩查询。'],
        accessTag: 'mail',
        priority: 5,
        redirectDisabled: true
    },
    {
        icon: 'star',
        title: '学习通网页端',
        site: 'jlu.fy.chaoxing.com',
        description: ['无需下载客户端也能在电脑使用。某些计算机作业可能需要在网页端提交。'],
        accessTag: '学习通登录',
        priority: 4,
        redirectDisabled: false
    },
    {
        icon: 'star',
        title: '学在吉大',
        site: 'ilearntec.jlu.edu.cn',
        description: [
            '线下课程录播、回放平台。',
            '课表和考试情况。'
        ],
        accessTag: 'mail',
        priority: 4,
        redirectDisabled: false
    },
    {
        icon: 'star',
        title: '选课系统',
        site: 'icourses.jlu.edu.cn',
        description: [
            '通往校园选课系统。仅用于选课操作。',
            '培养方案及课表请查看教务管理系统。'
        ],
        accessTag: 'num',
        priority: 4,
        redirectDisabled: false
    },
    {
        icon: 'star',
        title: '电子校务平台 (OA)',
        site: 'oa.jlu.edu.cn',
        description: ['吉林大学校内通知网，第一时间发布校务、学术、竞赛及奖学金等官方动态。'],
        accessTag: '教师邮箱登录',
        priority: 4,
        redirectDisabled: false
    },
    {
        icon: 'star',
        title: '智慧树网',
        site: 'zhihuishu.com',
        description: ['心理健康、职业规划、虚拟仿真实验等线上课程学习平台。'],
        accessTag: '平台账号登录',
        priority: 4,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '吉林大学官网',
        site: 'www.jlu.edu.cn',
        description: ['吉林大学校园官网。'],
        accessTag: null,
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '大数据和网络管理中心',
        site: 'nic.jlu.edu.cn',
        description: ['有线网、无线网、WEBVPN指南及入网有关网站连接导航。'],
        accessTag: null,
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '图书馆',
        site: 'lib.jlu.edu.cn',
        description: null,
        accessTag: null,
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '学生邮箱',
        site: 'mails.jlu.edu.cn',
        description: ['学生邮箱入口，可用于接受与发送邮件。'],
        accessTag: 'mail',
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '正版化软件平台',
        site: 'zbhrj1.jlu.edu.cn',
        description: ['Visio、Office、Matlab等软件正版下载。'],
        accessTag: 'card',
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '吉大 DeepSeek',
        site: 'deepseek.jlu.edu.cn',
        description: null,
        accessTag: 'mail',
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '教务处',
        site: 'jwc.jlu.edu.cn',
        description: ['电子教务处。提供成绩公示、成绩证明申请等功能。'],
        accessTag: null,
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '考试中心',
        site: 'kszx.jlu.edu.cn',
        description: ['汉语、外语、计算机、法律及其它等级/证件考试咨询及申请导航。'],
        accessTag: null,
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '网上办事大厅',
        site: 'ehall.jlu.edu.cn',
        description: null,
        accessTag: null,
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '迎新网站',
        site: 'yx.jlu.edu.cn',
        description: ['新生注册、资料上传。查看邮箱账号密码。'],
        accessTag: 'card',
        priority: 1,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '校园卡自助服务平台',
        site: 'dsf.jlu.edu.cn',
        description: ['使用绑定的中国银行卡充值校园卡。'],
        accessTag: 'card',
        priority: 1,
        redirectDisabled: false
    }

];

const allSites = internalSites;
allSites.sort((a, b) => (b.priority - a.priority));

export const topSites : SiteInfo[] = allSites.splice(0, 2);
export const normalSites : SiteInfo[] = allSites;