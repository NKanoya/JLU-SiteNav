<script setup lang="ts">
    import Icon from "@/components/Icon.vue";
    import CardContent from "@/components/cards/CardContent.vue";
    import { ref } from 'vue';

    const props = defineProps<{
        icon: string | null;
        title: string;
        description: string[];
        site: string;
        accessTag: string | null;
        redirectDisabled: boolean;
    }>();

    const accessInThisTab = (site: string) : void => {
        window.location.href = 'http://' + site;
    }

    const accessInNewTab = (site: string) : void => {
        window.open('http://' + site, '_blank');
    }

    const hoverOnCopy = ref(false);
    const hoverOnRedirectDisabled = ref(false);
    const hoveredSiteTitle = ref('');

    const startHoveringOnCopy = () : void => {
        hoverOnCopy.value = true;
    }

    const endHoveringOnCopy = () : void => {
        hoverOnCopy.value = false;
    }

    const startHoveringOnRedirectDisabled = (site: string) : void => {
        hoverOnRedirectDisabled.value = true;
        hoveredSiteTitle.value = site;
    }

    const endHoveringOnRedirectDisabled = () : void => {
        hoverOnRedirectDisabled.value = false;
    }

    const toolTipPosition = ref({
        pageX: 0,
        pageY: 0
    });

    const updateToolTipPosition = (event) : void => {
        toolTipPosition.value.pageX = (event.pageX + 15) + 'px';
        toolTipPosition.value.pageY = (event.pageY + 15) + 'px';
    }

</script>

<template>
    <template v-if="!props.redirectDisabled">
        <div class="card">
            <!-- 允许跳转 -->
            <div class="inline" @click="accessInThisTab(props.site)">
                <CardContent
                    :icon="props.icon"
                    :title="props.title"
                    :description="props.description"
                    :site="site"
                    :accessTag="props.accessTag"
                />
            </div>
            <div class="plus-icon valid-plus-icon" @click="accessInNewTab(props.site)">
                <Icon type="plus" />
            </div>
        </div>
    </template>
    <template v-else>
        <div
            class="card"
            style="cursor: default"
            @mouseenter="startHoveringOnRedirectDisabled(props.title)"
            @mouseleave="endHoveringOnRedirectDisabled()"
            @mousemove="updateToolTipPosition"
        >
            <!-- 不允许跳转，无点击跳转事件 -->
            <div
                class="inline"
            >
                <CardContent
                    :icon="props.icon"
                    :title="props.title"
                    :description="props.description"
                    :site="site"
                    :accessTag="props.accessTag"
                />
            </div>
            <div class="need-copy plus-icon" style="cursor: default">
                <Icon type="gray-plus" />
            </div>
            <div
                class="copy-icon"
                @mouseenter="startHoveringOnCopy"
                @mouseleave="endHoveringOnCopy"
                @mousemove="updateToolTipPosition"
            >
                <Icon type="copy" />
            </div>
        </div>
    </template>
    <div
        :class="{
            tooltip: true,
            hidden: !hoverOnCopy
        }"
        :style="{
            width: '10em',
            left: toolTipPosition.pageX,
            top: toolTipPosition.pageY
        }"
    >点击在新标签页内打开</div>
    <div
        :class="{
            tooltip: true,
            hidden: !hoverOnRedirectDisabled
        }"
        :style="{
            left: toolTipPosition.pageX,
            top: toolTipPosition.pageY
        }"
    >提示：由于{{ hoveredSiteTitle }}访问要求，<br />请单击本框目右上角复制图标复制链接，<br />在地址栏中粘贴回车访问。</div>
</template>

<style scoped>
    @import '@/assets/plus-icon.css';
    @import '@/assets/card.css';
    @import '@/assets/utility.css';
    @import '@/assets/tooltip.css';
</style>