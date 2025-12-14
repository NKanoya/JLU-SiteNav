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
        description: [
            'PC校园网账号注册、入网申请、网费充值服务网站。',
            '网费充值请进入后点击右下方「自助服务平台」进行登录。'
        ],
        site: 'ip.jlu.edu.cn',
        accessTag: 'card',
        priority: 6,
        redirectDisabled: false
    },
    {
        title: 'WEBVPN',
        icon: 'web',
        description: [
            '用于在非校园网环境中登录访问校内网站，或在校外浏览图书馆期刊、文献资源。'
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
            '线下课程录播、回放平台。可以观看已选课程和全校的公开课程录直播。'
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
        description: ['吉林大学校内通知网，第一时间发布活动、竞赛及奖学金等官方校务动态。'],
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
        title: '图书馆',
        site: 'lib.jlu.edu.cn',
        description: ['馆藏图书资料及校外付费数据库文献资源的搜索查找索引。'],
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
        title: '智慧学工',
        site: 'zhxg.jlu.edu.cn',
        description: ['在线处理学生事务，如离返校申请、助评优申请、综合素质评价等。'],
        accessTag: 'mail',
        priority: 3,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '教务处',
        site: 'jwc.jlu.edu.cn',
        description: ['电子教务处。提供本科教学信息、考试安排通知等。'],
        accessTag: null,
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '实践教学信息化系统',
        site: 'oep.jlu.edu.cn',
        description: ['开放性创新实验项目和科研训练项目的预览和申请网站。'],
        accessTag: 'mail',
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '大数据和网络管理中心',
        site: 'nic.jlu.edu.cn',
        description: ['有线网、无线网、WEBVPN指南及入网有关网站连接导航。'],
        accessTag: null,
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '正版化软件平台',
        site: 'zbhrj.jlu.edu.cn',
        description: ['Windows、腾讯会议、Visio、Office、Matlab 等教育正版软件的安装与激活。'],
        accessTag: 'mail',
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '吉大 DeepSeek',
        site: 'deepseek.jlu.edu.cn',
        description: ['吉大本地化部署的 AI 工具。'],
        accessTag: 'mail',
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '考试中心',
        site: 'kszx.jlu.edu.cn',
        description: ['汉语、外语、计算机、法律及其它等级/证件考试资讯导航。'],
        accessTag: null,
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '网上办事大厅',
        site: 'ehall.jlu.edu.cn',
        description: ['校印使用、离长申请、社团信息变更等报备事务办理。'],
        accessTag: 'mail',
        priority: 2,
        redirectDisabled: false
    },
    {
        icon: null,
        title: '迎新网站',
        site: 'yx.jlu.edu.cn',
        description: ['用于新生账号注册、资料上传，并查看邮箱账号密码。'],
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