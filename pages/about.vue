под participant должно быть написано его имя
<script lang="ts" setup>
    import Header from '~/components/widgets/Header.vue';
</script>

<template>
    <Header />
    <main>
        <div class="relative pt-20 pl-5 w-full h-full">
            <div class="participant"><p class="name">Participant 1</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 2</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 3</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 4</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 5</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 6</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 7</p><p class="description">Front-end</p></div>
            <div class="participant"><p class="name">Participant 8</p><p class="description">Front-end</p></div>
        </div>
    </main>
</template>

<style scoped>
    .heart-shape {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .participant {
        position: absolute;
        width: 8vw;
        height: 8vw;
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
    }

    .participant:nth-child(1) {
        margin-top: 10em;
    }

    .participant:nth-child(2) {
        margin-top: 10em;
        margin-left: 45em;
    }

    .participant:nth-child(3) {
        margin-top: 10em;
        margin-left: 90em;
    }

    .participant:nth-child(4) {
        margin-left: 25em;
    }

    .participant:nth-child(5) {
        margin-left: 65em;
    }

    .participant:nth-child(6) {
        margin-left: 25em;
        margin-top: 25em;
    }

    .participant:nth-child(7) {
        margin-left: 65em;
        margin-top: 25em;
    }

    .participant:nth-child(8) {
        margin-left: 45em;
        margin-top:35em;
    }

    .name {
        padding-top: 170px;
        padding-left: 28px;
        font-weight: bold;
    }

    .description {
        padding-left: 38px;
    }
</style>