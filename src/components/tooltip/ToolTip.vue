<script setup lang="ts">
    import { toolTipContent } from '@/data/tooltip';
    import {
        currentRedirectDisabled,
        toolTipContentType,
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
        <!-- 显示无法直接跳转页面、需要拷贝链接访问的提示 -->
        <template v-if="toolTipContentType === 'redirectDisabled'">
            {{ toolTipContent.format('redirectDisabled', [currentRedirectDisabled]) }}
        </template>
        <!-- 其它悬浮框提示 -->
        <template v-else>
            {{ toolTipContent[toolTipContentType] }}
        </template>
    </div>
</template>

<style scoped>
    @import '@/assets/tooltip.css';    /* 悬浮框主要样式 */
    @import '@/assets/utility.css';    /* .hidden 样式 */

    .text {
        white-space: pre-wrap;
    }
</style>