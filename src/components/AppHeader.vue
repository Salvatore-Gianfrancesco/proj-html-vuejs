<script>
import HeaderTop from './HeaderTop.vue';
import HeaderBottom from './HeaderBottom.vue';

export default {
    name: 'AppHeader',
    components: {
        HeaderTop,
        HeaderBottom
    }
}
</script>

<template>
    <header class="pt-4">
        <!-- header top -->
        <HeaderTop />

        <!-- header bottom -->
        <HeaderBottom />
    </header>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $bg-header;
    background-image: url('../assets/img/background-pattern-wavify.png');
}
</style>