<script>
import HeaderLinks from './HeaderLinks.vue';
import HeaderSocial from './HeaderSocial.vue';

export default {
    name: 'HeaderTop',
    components: {
        HeaderLinks,
        HeaderSocial
    }
}
</script>

<template>
    <section class="header_top">
        <div class="container d-flex justify-content-between align-items-center">
            <!-- logo -->
            <div class="logo">
                <img src="../assets/img/dark-logo.png" alt="logo">
            </div>

            <!-- header links -->
            <HeaderLinks />

            <!-- header social -->
            <HeaderSocial />
        </div>
    </section>

</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.header_top {
    .logo {
        img {
            height: 30px;
        }
    }
}
</style>