<script setup>
    import TopContents from "./cards/TopContents.vue";           // 顶部内容
    import CenterSites from "./cards/CenterSites.vue";           // 中间卡片
    import ToolTip from './tooltip/ToolTip.vue';                 // 悬浮框
    import CopySuccess from "@/components/copy/CopySuccess.vue"; // 链接复制成功提示栏

    import '../assets/top.css'
</script>

<template>
    <!-- 头部 -->
    <div class="header">
        <div class="search-container">
            <div class="title-box">
                <h1>吉大校内常用网址</h1>
            </div>

        </div>
    </div>
    <CopySuccess />


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

    <ToolTip />


</template>

<style scoped>

</style>