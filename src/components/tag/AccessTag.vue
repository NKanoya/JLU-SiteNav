<script setup>
    const props = defineProps({
        type : String
    });
</script>

<template>
    <div v-if="props.type === 'mail'" class="tag mail-tag">邮箱登录</div>
    <div v-else-if="props.type === 'card'" class="tag card-tag">校园卡登录</div>
    <div v-else-if="props.type === 'num'" class="tag num-tag">学号登录</div>
    <div v-else class="tag"><slot /></div>
</template>

<style scoped>
    @import '@/assets/styles/elements/tag.css';
</style>