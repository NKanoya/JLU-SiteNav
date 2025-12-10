<script setup>

import { topSites } from "@/data/top-sites.js";
import TopCard from "@/components/TopCard.vue";
import AccessTag from "@/components/AccessTag.vue";
</script>
<template>
    <div class="top">
        <div class="top-content">
            <TopCard
                v-for="item in topSites"
                :icon="item.icon"
                :siteName="item.title"
                :site="item.site"
                :accessTag="item.accessTag"
            >
                <template v-for="line in item.description">
                    <AccessTag v-if="line.tag !== null">{{ line.tag.sign }}</AccessTag>
                    <p style="display: inline-block;">{{ line.content }}</p><br />
                </template>
            </TopCard>

        </div>
    </div>
</template>
