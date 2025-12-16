<script setup lang="ts">
    import Icon from "@/components/icon/Icon.vue";
    import CardContent from "@/components/cards/CardContent.vue";
    import { displayTooltip,
             hideTooltip,
             updateToolTipPosition } from '@/components/tooltip/tooltip-behaviour'

    const props = defineProps<{
        icon: string | null;
        title: string;
        description: string[];
        site: string;
        accessTag: string | null;
        redirectDisabled: boolean;
    }>();

    import { cardsMouseEvents } from './site-card';
    import CopyButton from "@/components/copy/CopyButton.vue";
    import {safeRedirect} from "@/components/cards/safe-redirect";

    const cardEvents = cardsMouseEvents.card;
    const plusIconEvents = cardsMouseEvents.plusIcon;


</script>

<template>
<!--        <div-->
<!--            class="card"-->
<!--            @mouseenter="displayTooltip('redirect')"-->
<!--            @mouseleave="hideTooltip"-->
<!--            @mousemove="updateToolTipPosition"-->
<!--        >-->
    <div
        class="card"
        @mousedown="cardEvents.mousedown($event)"
        @mouseup="cardEvents.mouseup"
        @click="cardEvents.click($event, props.site)"
    >
        <!-- 允许跳转 -->
        <div class="inline">
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
            @click="plusIconEvents.click($event, props.site)"
            @mouseenter="plusIconEvents.mouseenter"
            @mouseleave="plusIconEvents.mouseleave"
            @mousemove="plusIconEvents.mousemove"
        >
            <Icon type="plus" />
        </div>
        <CopyButton :site="props.site" />
    </div>
</template>

<style scoped>
    @import '@/assets/utility.css';
    @import '@/assets/styles/card/plus-icon.css';
    @import '@/assets/styles/card/card.css';
    @import '@/assets/styles/card/copy-icon.css';
</style>