<script>
import { store } from '../store.js';

export default {
    name: 'HeaderLinks',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <nav class="header_links">
        <a href="#" v-for="link in store.headerLinks">{{ link }}
            <img src="../assets/img/arrow-down.png" alt="">
        </a>
    </nav>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.header_links {
    a {
        color: $mt-cinder;
        text-decoration: none;
        padding: 0 1.2rem;
    }
}
</style>