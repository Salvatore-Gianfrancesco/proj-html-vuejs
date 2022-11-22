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
            <span class="dropdown_icon ms-1"></span>
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
        transition: 0.3s;

        .dropdown_icon {
            width: 6px;
            aspect-ratio: 1/1;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            rotate: 45deg;
            display: inline-block;
            transform: translate(-50%, -50%);
            transition: 0.3s;
        }

        &:hover {
            color: $mt-mountain-meadow;
            border-bottom: 1px solid $mt-mountain-meadow;
        }

        &:hover .dropdown_icon {
            border-color: $mt-mountain-meadow;
        }
    }
}
</style>