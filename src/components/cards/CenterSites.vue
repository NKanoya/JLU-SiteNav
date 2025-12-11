<script setup>

import {sites} from "@/data/sites.ts";
import SiteCard from "@/components/cards/SiteCard.vue";
</script>

<template>
    <template v-for="site in sites">
        <SiteCard
            :title="site.title"
            :star="site.star"
            :description="site.description"
            :site="site.site"
            :access-tag="site.accessTag"
            :redirect-disabled="site.redirectDisabled"
        />
    </template>
</template>

<style scoped>

</style>