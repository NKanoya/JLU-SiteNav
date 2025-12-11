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

    /* 登录标签 */
    .tag {
        display: inline-block;
        background-color: #e0e0e0;
        color: #333;
        font-size: 0.5em;
        padding: 3px 5px 3px 5px;
        border-radius: 5px;
        margin-right: 5px;
    }

    /* 邮箱登录标签 */
    .mail-tag {
        background-color: #e0e0f0;
        color: #113;
    }

    .num-tag {
        background-color: #ddf0dd;
        color: #030;
    }

    .card-tag {
        background-color: #f0e0e0;
        color: #311;
    }

</style>