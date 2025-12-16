<script setup lang="ts">
    import {
        toolTipContent,
        display
    } from './tooltip-behaviour';
</script>

<template>
    <div
        id="tooltip"
        :class="{
            tooltip: true,
            text: true,
            hidden: !display
        }"
    >
        {{ toolTipContent }}
    </div>
</template>

<style scoped>
    @import '@/assets/styles/elements/tooltip.css';    /* 悬浮框主要样式 */
    @import '@/assets/utility.css';    /* .hidden 样式 */

    .text {
        white-space: pre-wrap;
    }
</style>