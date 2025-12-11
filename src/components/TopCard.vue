<script setup>
    import Icon from './Icon.vue';
    import AccessTag from "./AccessTag.vue";

    const props = defineProps({
        icon: String,
        siteName: String,
        site: String,
        accessTag: String
    })
</script>

<template>
    <div class="card inline">
        <!-- 右下角加号 -->
        <div class="plus-icon">
            <Icon type="plus" />
        </div>

        <h3>
            <!-- 标题栏：由图标和标题构成 -->
            <Icon :type="props.icon" />
            {{ props.siteName }}
        </h3>

        <!-- 介绍的正文内容 -->
        <slot />

        <!-- 网址名称 -->
        <span class="site">{{ props.site }}</span>

        <!-- 标签 -->
        <AccessTag :type="props.accessTag" />
    </div>
</template>

<style scoped>

</style>