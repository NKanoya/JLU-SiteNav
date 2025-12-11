<script setup>

import { topSites } from "@/data/top-sites.ts";
import TopCard from "./TopCard.vue";
import AccessTag from "./AccessTag.vue";
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
                    <template v-if="line === null">
                        <p style="display: inline-block"></p><br />
                    </template>
                    <template v-else>
                        <AccessTag v-if="line.tag !== null">{{ line.tag.sign }}</AccessTag>
                        <p style="display: inline-block;">{{ line.content }}</p><br />
                    </template>
                </template>
            </TopCard>

        </div>
    </div>
</template>
<style scoped>
    /* 主体容器 */
    .top {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .top-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        width: 1000px;
        margin-bottom: 30px;
    }
</style>
