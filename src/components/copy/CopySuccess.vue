<script setup lang="ts">
    import { copySuccess } from './copy';
</script>

<template>
    <div
        id="floatingBox"
        :class="{
            'floating-box': true,
            'show': copySuccess
        }"
    >链接复制成功！</div>
</template>

<style scoped>
    @import '@/assets/styles/elements/copy-floating-box.css';
</style>
