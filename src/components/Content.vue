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


</template>

<style scoped>

</style>