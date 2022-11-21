<script>
import MainRatings from './MainRatings.vue';
import MainAboutMe from './MainAboutMe.vue';
import MainVideo from './MainVideo.vue';

export default {
    name: 'AppMain',
    components: {
        MainRatings,
        MainAboutMe,
        MainVideo
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
    </main>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $mt-white;
    padding: 7rem 0;
}
</style>