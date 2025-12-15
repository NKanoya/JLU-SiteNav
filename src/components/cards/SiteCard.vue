<script setup lang="ts">
    import Icon from "@/components/icon/Icon.vue";
    import CardContent from "@/components/cards/CardContent.vue";
    import { displayTooltip,
             hideTooltip,
             updateToolTipPosition } from '@/components/tooltip/tooltip-behaviour'
    import { copyLinkToClipboard } from "@/components/copy/copy";

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
<!--        <div-->
<!--            class="card"-->
<!--            @mouseenter="displayTooltip('redirect')"-->
<!--            @mouseleave="hideTooltip"-->
<!--            @mousemove="updateToolTipPosition"-->
<!--        >-->
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
            <div
                class="plus-icon valid-plus-icon"
                @click="accessInNewTab(props.site)"
                @mouseenter="displayTooltip('plusIcon')"
                @mouseleave="hideTooltip"
                @mousemove="updateToolTipPosition"
            >
                <Icon type="plus" />
            </div>
        </div>
    </template>
    <template v-else>
        <div
            class="card"
            style="cursor: default"
            @mouseenter="displayTooltip({ newType: 'redirectDisabled', param : [props.title] })"
            @mouseleave="hideTooltip"
            @mousemove="updateToolTipPosition"
        >
            <!-- 不允许跳转，无点击跳转事件 -->
            <div
                class="inline"
            >
                <CardContent
                    :icon="props.icon"
                    :title="props.title"
                    :description="props.description"
                    :site="site"
                    :accessTag="props.accessTag"
                />
            </div>
            <div class="plus-icon gray-plus-icon" style="cursor: default">
                <Icon type="gray-plus" />
            </div>
            <div
                class="copy-icon"
                @mouseenter="displayTooltip('copyIcon')"
                @mouseleave="hideTooltip"
                @mousemove="updateToolTipPosition"
                @click="copyLinkToClipboard('https://' +props.site)"
            >
                <Icon type="copy" />
            </div>
        </div>
    </template>
</template>

<style scoped>
    @import '@/assets/utility.css';
    @import '@/assets/styles/card/plus-icon.css';
    @import '@/assets/styles/card/card.css';
    @import '@/assets/styles/card/copy-icon.css';
</style>