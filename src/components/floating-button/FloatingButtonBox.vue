<script setup lang="ts">
    import FloatingButton from './FloatingButton.vue'
    import Github from "@/components/icon/Github.vue";
    import Brightness from "@/components/icon/Brightness.vue";

    const toGithub = () => {
        window.open('https://github.com/NKanoya/JLU-SiteNav', '_blank');
    };

    import { toggleTheme } from './brightness.js';
    import {displayTooltip, hideTooltip, updateToolTipPosition} from '@/components/tooltip/tooltip-behaviour';

    const tooltipSwitchTheme = () => {
        const html = document.documentElement;
        if(html.getAttribute('data-theme') == 'dark') {
            displayTooltip({ newType: 'brightness', param: ['亮色']})
        } else {
            displayTooltip({ newType: 'brightness', param: ['暗色']})
        }

    };
</script>

<template>
    <div class="floating-button-box">
        <FloatingButton
            @click="toGithub"
            @mouseenter="displayTooltip('github')"
            @mouseleave="hideTooltip"
            @mousemove="updateToolTipPosition"
        >
            <Github />
        </FloatingButton>
        <FloatingButton
            @click="toggleTheme(); tooltipSwitchTheme();"
            @mouseenter="tooltipSwitchTheme"
            @mouseleave="hideTooltip"
            @mousemove="updateToolTipPosition"
        >
            <Brightness />
        </FloatingButton>
    </div>
</template>

<style scoped>
    .floating-button-box {
        position: fixed;
        right:35px;
        bottom:35px;

        z-index:999;
    }
</style>