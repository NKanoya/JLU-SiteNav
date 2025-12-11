<script setup lang="ts">
    import Icon from "@/components/Icon.vue";
    import AccessTag from "@/components/tag/AccessTag.vue";

    const props = defineProps<{
        star: boolean,
        title: string,
        description: string[],
        site: string
        accessTag: string | null;
        redirectDisabled: boolean;
    }>();
</script>

<template>
    <div class="card">
        <div class="inline">
            <h3>
                <Icon type="star" v-if="props.star" />
                {{ props.title }}</h3>
            <p>
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
            <span class="site">{{ props.site }}</span>
            <template v-if="props.accessTag !== null">
                <AccessTag :type="props.accessTag" >{{ props.accessTag }}</AccessTag>
            </template>
        </div>

        <!-- 加号标志 -->
        <template v-if="!props.redirectDisabled">
            <div class="plus-icon valid-plus-icon">
                <Icon type="plus" />
            </div>
        </template>
        <template v-else>
            <div class="need-copy plus-icon">
                <Icon type="gray-plus" />
            </div>
            <div class="copy-icon">
                <Icon type="copy" />
            </div>
        </template>
    </div>
</template>

<style scoped>
    @import '@/assets/plus-icon.css';
    @import '@/assets/card.css';
</style>