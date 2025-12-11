<script setup>
    import TopContents from "./cards/TopContents.vue";   // 顶部内容
    import CenterSites from "./cards/CenterSites.vue";   // 中间卡片

    import '../assets/top.css'
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

    <div id="floatingBox" class="floating-box">链接复制成功！</div>

    <!-- 顶部卡片 -->
    <div class="top">
        <div class="top-content">
            <TopContents />
        </div>
    </div>

    <!-- 主体内容 -->
    <div class="container">
        <div class="container-content">
            <CenterSites />
        </div>
    </div>

    <!-- 悬浮框内容 -->
    <div class="tooltip new-page" style="width:10em;">点击在新标签页内打开</div>
    <div class="tooltip tip-1">提示：由于学校教务系统访问要求，<br />请单击本框目右上角复制图标复制链接，<br />在地址栏中粘贴回车访问。</div>

</template>

<style scoped>

</style>