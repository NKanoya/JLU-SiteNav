<script setup lang="ts">
    import Icon from "@/components/icon/Icon.vue";
    import { cardsMouseEvents } from "../cards/site-card";

    const copyIconEvents = cardsMouseEvents.copyIcon;

    const props = defineProps<{
        'site': string;
        'is-card-redirect-disabled' ?: false;
    }>()
</script>

<template>
    <div
        class="copy-icon"
        @mouseenter="copyIconEvents.mouseenter"
        @mouseleave="copyIconEvents.mouseleave(props['is-card-redirect-disabled'], props.site)"
        @mousemove="copyIconEvents.mousemove"
        @click="copyIconEvents.click($event, props.site);"
        @mousedown="copyIconEvents.mousedown"
        @mouseup="copyIconEvents.mouseup"
    >
        <Icon type="copy" />
    </div>
</template>

<style scoped>

</style>