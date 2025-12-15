<script setup>
    import FloatingButton from './FloatingButton.vue'
    import Github from "@/components/icon/Github.vue";
    import Brightness from "@/components/icon/Brightness.vue";

    const toGithub = () => {
        window.open('https://github.com/NKanoya/JLU-SiteNav', '_blank');
    }

    import { toggleTheme } from './brightness.js';
</script>

<template>
    <div class="floating-button-box">
        <FloatingButton @click="toGithub">
            <Github />
        </FloatingButton>
        <FloatingButton @click="toggleTheme">
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