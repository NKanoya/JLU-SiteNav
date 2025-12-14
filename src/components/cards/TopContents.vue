<script setup>
    import SiteCard from "@/components/cards/SiteCard.vue";
    import {topSites} from "@/data/sites.js";
</script>
<template>
    <template v-for="site in topSites">
        <SiteCard
            :title="site.title"
            :icon="site.icon"
            :description="site.description"
            :site="site.site"
            :access-tag="site.accessTag"
            :redirect-disabled="site.redirectDisabled"
        />
    </template>
</template>
<style scoped>
    @import '@/assets/styles/card/plus-icon.css';
    @import '@/assets/styles/card/card.css';
    @import '@/assets/utility.css';
</style>
