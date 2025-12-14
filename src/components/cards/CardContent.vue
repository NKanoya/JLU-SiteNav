<script setup lang="ts">
    import Icon from "@/components/icon/Icon.vue";
    import AccessTag from "@/components/tag/AccessTag.vue";

    const props = defineProps<{
        icon: string | null;
        title: string;
        description: string[];
        site: string;
        accessTag: string | null;
    }>();
</script>

<template>
    <h3>
        <Icon v-if="props.icon !== null" :type="props.icon" />
        {{ props.title }}</h3>
    <p class="description-content">
        <template v-if="description === null || description.length === 0">
            暂未添加描述。
        </template>
        <template v-else v-for="(line, count) in description">
            {{ line }}
            <template v-if="count + 1 != description.length">
                <br/>
            </template>
        </template>
    </p>
    <div class="site-box">
        <span class="site">{{ props.site }}</span>
        <template v-if="props.accessTag !== null">
            <AccessTag :type="props.accessTag" >{{ props.accessTag }}</AccessTag>
        </template>
    </div>
</template>

<style scoped>
    @import '@/assets/styles/card/card.css';
</style>