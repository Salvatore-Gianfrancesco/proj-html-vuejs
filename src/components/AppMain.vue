<script>
import RatingsSection from './RatingsSection.vue';
import AboutMeSection from './AboutMeSection.vue';
import VideoSection from './VideoSection.vue';
import LatestSection from './LatestSection.vue';
import BooksSection from './BooksSection.vue';
import LogosSection from './LogosSection.vue';
import StoriesSection from './StoriesSection.vue';
import ArticlesSection from './ArticlesSection.vue';

export default {
    name: 'AppMain',
    components: {
        RatingsSection,
        AboutMeSection,
        VideoSection,
        LatestSection,
        BooksSection,
        LogosSection,
        StoriesSection,
        ArticlesSection
    }
}
</script>

<template>
    <main>
        <!-- ratings -->
        <RatingsSection />

        <!-- about me -->
        <AboutMeSection />

        <!-- video -->
        <VideoSection />

        <!-- latest courses -->
        <LatestSection />

        <!-- books -->
        <BooksSection />

        <!-- logos -->
        <LogosSection />

        <!-- stories -->
        <StoriesSection />

        <!-- articles -->
        <ArticlesSection />
    </main>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $mt-white;
    padding: 7rem 0;
}
</style>