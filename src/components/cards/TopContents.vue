<script setup>

import { topSites } from "@/data/top-sites.ts";
import TopCard from "./TopCard.vue";
import AccessTag from "../tag/AccessTag.vue";
</script>
<template>
        <TopCard
            v-for="item in topSites"
            :icon="item.icon"
            :siteName="item.title"
            :site="item.site"
            :accessTag="item.accessTag"
        >
            <template v-for="line in item.description">
                <template v-if="line === null">
                    <p class="inline-block"></p><br />
                </template>
                <template v-else>
                    <AccessTag v-if="line.tag !== null">{{ line.tag.sign }}</AccessTag>
                    <p class="inline-block">{{ line.content }}</p><br />
                </template>
            </template>
        </TopCard>
</template>
<style scoped>
    @import '@/assets/plus-icon.css';
    @import '@/assets/card.css';
    @import '@/assets/utility.css';
</style>
