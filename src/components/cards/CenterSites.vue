<script setup>
import { normalSites } from "@/data/sites.ts";
import SiteCard from "@/components/cards/SiteCard.vue";
</script>

<template>
    <template v-for="site in normalSites">
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

</style>