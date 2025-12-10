<script setup>
    // 图标组件
    import Icon from './Icon.vue';

    // 标签组件
    import AccessTag from '@/components/AccessTag.vue';
</script>

<template>
    <!-- 头部 -->
    <div class="header">
        <div class="search-container">
            <div class="title-box">
                <h1>吉大校内常用网址</h1>
            </div>
            <input autocomplete="off" type="text" id="searchBox" class="search-box" placeholder="搜索...">
        </div>
    </div>
    <div class="top">
        <div id="floatingBox" class="floating-box">链接复制成功！</div>

        <div class="top-content">







            <div class="card">
                <div class="inline">
                    <h3>
                        <Icon type="web"/> WEBVPN
                    </h3>
                    <AccessTag>校园网访问</AccessTag>
                    <p style="display: inline-block;">链接至校内网站资源导航。</p><br />

                    <span class="site">vpn.jlu.edu.cn</span>
                    <AccessTag type="mail" />
                </div>
                <div class="plus-icon site-vpn-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>

        </div>
    </div>

    <!-- 主体内容 -->
    <div class="container">
        <div class="container-content">
            <!-- 网站卡片 -->



            <div class="card need-copy need-copy-1" data-tooltip="tip-1">
                <div class="inline">
                    <h3>
                        <Icon type="star" />
                        教务管理系统</h3>
                    <p>查看个人基本信息、课表、专业培养方案、考试安排、成绩查询。</p>
                    <span class="site">iedu.jlu.edu.cn</span>
                    <AccessTag type="mail" />
                </div>
                <div>
                    <span id="text-1" class="copy-text">https://iedu.jlu.edu.cn</span>
                    <div class="copy-icon">
                        <Icon type="copy" />
                    </div>
                </div>
                <div class="need-copy invalid-plus-icon">
                    <Icon type="gray-plus" />
                </div>

            </div>



            <div class="card site-chaoxing">
                <div class="inline">
                    <h3>
                        <Icon type="star" />
                        学习通网页端</h3>
                    <p>无需下载客户端也能在电脑使用。某些计算机作业可能需要在网页端提交。</p>
                    <span class="site">jlu.fy.chaoxing.com</span>
                    <AccessTag>学习通登录</AccessTag>
                </div>
                <div class="plus-icon site-chaoxing-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-ilearntec">
                <div class="inline">
                    <h3>
                        <Icon type="star" />
                        学在吉大</h3>
                    <p>线下课程录播、回放平台。<br />课表和考试情况。</p>
                    <span class="site">ilearntec.jlu.edu.cn</span>
                    <AccessTag type="mail" />
                </div>
                <div class="plus-icon site-ilearntec-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-icourses">
                <div class="inline">
                    <h3>
                        <Icon type="star" />
                        选课系统</h3>
                    <p>通往校园选课系统。仅用于选课操作。<br />培养方案及课表请查看教务管理系统。</p>
                    <span class="site">icourses.jlu.edu.cn</span>
                    <AccessTag type="num" />
                </div>
                <div class="plus-icon site-icourses-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-nic">
                <div class="inline">
                    <h3>
                        <Icon type="star" />
                        大数据和网络管理中心</h3>
                    <p>有线网、无线网、WEBVPN指南及入网有关网站连接导航。</p>
                    <span class="site">nic.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-nic-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-oa">
                <div class="inline">
                    <h3>
                        <Icon type="star" />
                        电子校务平台</h3>
                    <p>吉林大学校内通知网。发布</p>
                    <div class="site">oa.jlu.edu.cn</div>
                </div>
                <div class="plus-icon site-oa-new">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-www">
                <div class="inline">
                    <h3>吉林大学官网</h3>
                    <p>吉林大学校园官网。</p>
                    <span class="site">www.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-www-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-lib">
                <div class="inline">
                    <h3>图书馆</h3>
                    <p>暂未添加描述。</p>
                    <span class="site">lib.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-lib-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-ehall">
                <div class="inline">
                    <h3>网上办事大厅</h3>
                    <p>暂未添加描述。</p>
                    <span class="site">ehall.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-ehall-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-jwc">
                <div class="inline">
                    <h3>教务处</h3>
                    <p>电子教务处。提供成绩公示、成绩证明申请等功能。</p>
                    <span class="site">jwc.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-jwc-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-kszx">
                <div class="inline">
                    <h3>考试中心</h3>
                    <p>汉语、外语、计算机、法律及其它等级/证件考试咨询及申请导航。</p>
                    <span class="site">kszx.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-kszx-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-mails">
                <div class="inline">
                    <h3>学生邮箱</h3>
                    <p>学生邮箱入口，可用于接受与发送邮件。</p>
                    <span class="site">mails.jlu.edu.cn</span>
                    <AccessTag type="mail" />
                </div>
                <div class="plus-icon site-mails-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-yx">
                <div class="inline">
                    <h3>迎新网站</h3>
                    <p>新生注册、资料上传。查看邮箱账号密码。</p>
                    <span class="site">yx.jlu.edu.cn</span>
                    <AccessTag type="card" />
                </div>
                <div class="plus-icon site-yx-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-dsf">
                <div class="inline">
                    <h3>校园卡自助服务平台</h3>
                    <p>使用绑定的中国银行卡充值校园卡。</p>
                    <span class="site">dsf.jlu.edu.cn</span>
                    <AccessTag type="card" />
                </div>
                <div class="plus-icon site-dsf-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>



            <div class="card site-zbhrj1">
                <div class="inline">
                    <h3>正版化软件平台</h3>
                    <p>Visio、Office、Matlab等软件正版下载。</p>
                    <span class="site">zbhrj1.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-zbhrj1-new" data-tooltip="new-page">
                    <Icon type="plus" />
                </div>
            </div>
        </div>
    </div>

    <!-- 悬浮框内容 -->
    <div class="tooltip new-page" style="width:10em;">点击在新标签页内打开</div>
    <div class="tooltip tip-1">提示：由于学校教务系统访问要求，<br />请单击本框目右上角复制图标复制链接，<br />在地址栏中粘贴回车访问。</div>

</template>

<style scoped>

</style>