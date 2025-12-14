<script setup lang="ts">
    import ToolTip from "@/components/tooltip/ToolTip.vue";
    import CopySuccess from "@/components/copy/CopySuccess.vue";
    import Header from "@/components/Header.vue";
    import TopCards from "@/components/TopCards.vue";
    import MainCards from "@/components/MainCards.vue";
    import Background from "@/components/background/background.vue";
</script>

<template>
    <div>
        <Background />
        <Header />
        <TopCards />
        <MainCards />
        <ToolTip />         <!-- 悬浮框 -->
        <CopySuccess />     <!-- 拷贝成功提示栏 -->
    </div>
</template>

<style scoped>
</style>
