<script setup lang="ts">
    import Icon from "@/components/Icon.vue";
    import CardContent from "@/components/cards/CardContent.vue";

    const props = defineProps<{
        icon: string | null;
        title: string;
        description: string[];
        site: string;
        accessTag: string | null;
        redirectDisabled: boolean;
    }>();

    const accessInThisTab = (site: string) : void => {
        window.location.href = 'http://' + site;
    }

    const accessInNewTab = (site: string) : void => {
        window.open('http://' + site, '_blank');
    }

</script>

<template>
    <template v-if="!props.redirectDisabled">
        <div class="card">
            <!-- 允许跳转 -->
            <div class="inline" @click="accessInThisTab(props.site)">
                <CardContent
                    :icon="props.icon"
                    :title="props.title"
                    :description="props.description"
                    :site="site"
                    :accessTag="props.accessTag"
                />
            </div>
            <div class="plus-icon valid-plus-icon" @click="accessInNewTab(props.site)">
                <Icon type="plus" />
            </div>
        </div>
    </template>
    <template v-else>
        <div class="card">
            <!-- 不允许跳转，无点击跳转事件 -->
            <div class="inline" style="cursor: default">
                <CardContent
                    :icon="props.icon"
                    :title="props.title"
                    :description="props.description"
                    :site="site"
                    :accessTag="props.accessTag"
                />
            </div>
            <div class="need-copy plus-icon">
                <Icon type="gray-plus" />
            </div>
            <div class="copy-icon">
                <Icon type="copy" />
            </div>
        </div>
    </template>
</template>

<style scoped>
    @import '@/assets/plus-icon.css';
    @import '@/assets/card.css';
</style>