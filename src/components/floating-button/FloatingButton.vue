<script setup>

</script>

<template>
    <div class="floating-button">
        <slot />
    </div>
</template>

<style scoped>
    .floating-button {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: var(--floating-button-bg);
        color: var(--floating-button-content);
        transition: background-color 0.3s ease, color 0.3s ease;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;

        box-shadow: 0 5px var(--floating-button-shadow);
        backdrop-filter: blur(10px);

    }

    .floating-button:hover {
        background-color: var(--floating-button-bg-hover);
        color: var(--floating-button-content-hover);
    }

    .floating-button:active {
        background-color: var(--floating-button-bg-click);
        color: var(--floating-button-content-hover);
    }
</style>