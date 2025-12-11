<script setup>
import SiteCard from "@/components/cards/SiteCard.vue";
import {sites} from "@/data/sites.js";

const topSites = sites.slice(0,2);
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
    @import '@/assets/plus-icon.css';
    @import '@/assets/card.css';
    @import '@/assets/utility.css';
</style>
