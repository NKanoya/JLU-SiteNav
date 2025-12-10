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
    <div class="card">
        <div class="inline">
            <div class="plus-icon site-vpn-new">
                <Icon type="plus" />
            </div>
            <h3>
                <Icon :type="props.icon" />
                {{ props.siteName }}</h3>

            <slot />
            <span class="site">{{ props.site }}</span>
            <AccessTag :type="props.accessTag" />
        </div>
    </div>
</template>

<style scoped>

</style>