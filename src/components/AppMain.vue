<script>
import MainRatings from './MainRatings.vue';
import MainAboutMe from './MainAboutMe.vue';
import MainVideo from './MainVideo.vue';
import MainLatest from './MainLatest.vue';
import MainBooks from './MainBooks.vue';
import MainLogos from './MainLogos.vue';

export default {
    name: 'AppMain',
    components: {
        MainRatings,
        MainAboutMe,
        MainVideo,
        MainLatest,
        MainBooks,
        MainLogos
    }
}
</script>

<template>
    <main>
        <!-- ratings -->
        <MainRatings />

        <!-- about me -->
        <MainAboutMe />

        <!-- video -->
        <MainVideo />

        <!-- latest courses -->
        <MainLatest />

        <!-- books -->
        <MainBooks />

        <!-- logos -->
        <MainLogos />
    </main>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $mt-white;
    padding: 7rem 0;
}
</style>