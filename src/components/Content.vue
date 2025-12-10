<script setup>
    import PlusIcon from './icon/Plus.vue';
    import StarIcon from './icon/Star.vue'
    import WifiIcon from "@/components/icon/Wifi.vue";
    import WebIcon from "@/components/icon/Web.vue";
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



            <div class="card site-ip">
                <div class="inline">
                    <div class="plus-icon site-ip-new">
                        <PlusIcon/>
                    </div>
                    <h3>
                        <WifiIcon/>
                        网络服务</h3>
                    <p>PC校园网注册、充值。</p>
                    <p style="height: 1em;"></p>
                    <span class="site">ip.jlu.edu.cn</span>
                    <div class="card-tag">校园卡登录</div>
                </div>
            </div>



            <div class="card site-vpn">
                <div class="inline">
                    <h3>
                        <WebIcon/> WEBVPN
                    </h3>
                    <p>
                        <div class="tag">校园网访问</div>
                        <p style="display: inline-block;">链接至校内网站资源导航。</p><br />
                        <div class="tag">公共网访问</div>
                        <p style="display: inline-block;">认证后可在校外访问图书馆期刊资源及校内网站。</p>
                        <span class="site">vpn.jlu.edu.cn</span>
                        <div class="mail-tag">邮箱登录</div>
                    </p>
                </div>
                <div class="plus-icon site-vpn-new" data-tooltip="new-page">
                    <PlusIcon />
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
                        <StarIcon />
                        教务管理系统</h3>
                    <p>查看个人基本信息、课表、专业培养方案、考试安排、成绩查询。</p>
                    <span class="site">iedu.jlu.edu.cn</span>
                    <div class="mail-tag">邮箱登录</div>
                </div>
                <div>
                    <span id="text-1" class="copy-text">https://iedu.jlu.edu.cn</span>
                    <div class="copy-icon" data-text="text-1">
                        <!-- 复制图标 -->
                        <svg t="1726318094525" class="icon" width="25" height="25" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1472" >
                            <path
                                d="M672 832 224 832c-52.928 0-96-43.072-96-96L128 160c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 576C768 788.928 724.928 832 672 832zM224 128C206.368 128 192 142.368 192 160l0 576c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L704 160c0-17.632-14.336-32-32-32L224 128z"
                                fill="#000" p-id="1473"></path>
                            <path
                                d="M800 960 320 960c-17.664 0-32-14.304-32-32s14.336-32 32-32l480 0c17.664 0 32-14.336 32-32L832 256c0-17.664 14.304-32 32-32s32 14.336 32 32l0 608C896 916.928 852.928 960 800 960z"
                                fill="#000" p-id="1474"></path>
                            <path
                                d="M544 320 288 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S561.696 320 544 320z"
                                fill="#000" p-id="1475"></path>
                            <path
                                d="M608 480 288.032 480c-17.664 0-32-14.336-32-32s14.336-32 32-32L608 416c17.696 0 32 14.336 32 32S625.696 480 608 480z"
                                fill="#000" p-id="1476"></path>
                            <path
                                d="M608 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S625.696 640 608 640z"
                                fill="#000" p-id="1477"></path>
                        </svg>
                    </div>
                </div>
                <div class="need-copy invalid-plus-icon">
                    <!-- 灰色加号标志 无动画 -->
                    <svg t="1726537979931" class="icon" viewBox="0 0 1024 1024"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4197" width="25" height="25">
                        <path
                            d="M512 42.666667C251.733333 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667z m0 853.333333c-213.333333 0-384-170.666667-384-384s170.666667-384 384-384 384 170.666667 384 384-170.666667 384-384 384z m170.666667-426.666667h-128V341.333333c0-25.6-17.066667-42.666667-42.666667-42.666666s-42.666667 17.066667-42.666667 42.666666v128H341.333333c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666667h128v128c0 25.6 17.066667 42.666667 42.666667 42.666666s42.666667-17.066667 42.666667-42.666666v-128h128c25.6 0 42.666667-17.066667 42.666666-42.666667s-17.066667-42.666667-42.666666-42.666667z"
                            p-id="4198" fill="#bbb"></path>
                    </svg>
                </div>

            </div>



            <div class="card site-chaoxing">
                <div class="inline">
                    <h3>
                        <StarIcon />
                        学习通网页端</h3>
                    <p>无需下载客户端也能在电脑使用。某些计算机作业可能需要在网页端提交。</p>
                    <span class="site">jlu.fy.chaoxing.com</span>
                    <div class="tag">学习通登录</div>
                </div>
                <div class="plus-icon site-chaoxing-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-ilearntec">
                <div class="inline">
                    <h3>
                        <StarIcon />
                        学在吉大</h3>
                    <p>线下课程录播、回放平台。<br />课表和考试情况。</p>
                    <span class="site">ilearntec.jlu.edu.cn</span>
                    <div class="mail-tag">邮箱登录</div>
                </div>
                <div class="plus-icon site-ilearntec-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-icourses">
                <div class="inline">
                    <h3>
                        <StarIcon />
                        选课系统</h3>
                    <p>通往校园选课系统。仅用于选课操作。<br />培养方案及课表请查看教务管理系统。</p>
                    <span class="site">icourses.jlu.edu.cn</span>
                    <div class="num-tag">学号登录</div>
                </div>
                <div class="plus-icon site-icourses-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-nic">
                <div class="inline">
                    <h3>
                        <StarIcon />
                        大数据和网络管理中心</h3>
                    <p>有线网、无线网、WEBVPN指南及入网有关网站连接导航。</p>
                    <span class="site">nic.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-nic-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-oa">
                <div class="inline">
                    <h3>
                        <StarIcon />
                        电子校务平台</h3>
                    <p>吉林大学校内通知网。发布</p>
                    <div class="site">oa.jlu.edu.cn</div>
                </div>
                <div class="plus-icon site-oa-new">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-www">
                <div class="inline">
                    <h3>吉林大学官网</h3>
                    <p>吉林大学校园官网。</p>
                    <span class="site">www.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-www-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-lib">
                <div class="inline">
                    <h3>图书馆</h3>
                    <p>暂未添加描述。</p>
                    <span class="site">lib.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-lib-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-ehall">
                <div class="inline">
                    <h3>网上办事大厅</h3>
                    <p>暂未添加描述。</p>
                    <span class="site">ehall.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-ehall-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-jwc">
                <div class="inline">
                    <h3>教务处</h3>
                    <p>电子教务处。提供成绩公示、成绩证明申请等功能。</p>
                    <span class="site">jwc.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-jwc-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-kszx">
                <div class="inline">
                    <h3>考试中心</h3>
                    <p>汉语、外语、计算机、法律及其它等级/证件考试咨询及申请导航。</p>
                    <span class="site">kszx.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-kszx-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-mails">
                <div class="inline">
                    <h3>学生邮箱</h3>
                    <p>学生邮箱入口，可用于接受与发送邮件。</p>
                    <span class="site">mails.jlu.edu.cn</span>
                    <div class="mail-tag">邮箱登录</div>
                </div>
                <div class="plus-icon site-mails-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-yx">
                <div class="inline">
                    <h3>迎新网站</h3>
                    <p>新生注册、资料上传。查看邮箱账号密码。</p>
                    <span class="site">yx.jlu.edu.cn</span>
                    <div class="card-tag">校园卡登录</div>
                </div>
                <div class="plus-icon site-yx-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-dsf">
                <div class="inline">
                    <h3>校园卡自助服务平台</h3>
                    <p>使用绑定的中国银行卡充值校园卡。</p>
                    <span class="site">dsf.jlu.edu.cn</span>
                    <div class="card-tag">校园卡登录</div>
                </div>
                <div class="plus-icon site-dsf-new" data-tooltip="new-page">
                    <PlusIcon />
                </div>
            </div>



            <div class="card site-zbhrj1">
                <div class="inline">
                    <h3>正版化软件平台</h3>
                    <p>Visio、Office、Matlab等软件正版下载。</p>
                    <span class="site">zbhrj1.jlu.edu.cn</span>
                </div>
                <div class="plus-icon site-zbhrj1-new" data-tooltip="new-page">
                    <PlusIcon />
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