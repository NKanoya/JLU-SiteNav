<script setup>
    import StarIcon from "@/components/icon/Star.vue";
    import WebIcon from "@/components/icon/Web.vue";
    import WifiIcon from "@/components/icon/Wifi.vue";
    import PlusIcon from "@/components/icon/Plus.vue";
    import CopyIcon from "@/components/icon/Copy.vue";
    import GrayPlusIcon from "@/components/icon/GrayPlus.vue";

    const props = defineProps({
        type : String
    });
</script>

<template>
    <PlusIcon v-if="props.type === 'plus'" />
    <StarIcon v-else-if="props.type === 'star'" />
    <WebIcon v-else-if="props.type === 'web'" />
    <WifiIcon v-else-if="props.type === 'wifi'" />
    <CopyIcon v-else-if="props.type === 'copy'" />
    <GrayPlusIcon v-else-if="props.type === 'gray-plus'" />
    <span v-else></span>
</template>
