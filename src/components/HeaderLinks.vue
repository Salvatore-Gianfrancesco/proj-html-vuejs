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
        color: $mt-secondary;
        text-decoration: none;
        padding: 0 1.2rem;

        .dropdown_icon {
            width: 5px;
            aspect-ratio: 1/1;
            border-bottom: 1px solid $mt-secondary;
            border-right: 1px solid $mt-secondary;
            rotate: 45deg;
            display: inline-block;
            transform: translate(-50%, -50%);
            transition: 0.3s;
        }

        &:hover {
            color: $mt-primary;
            border-bottom: 1px solid $mt-primary;
        }

        &:hover .dropdown_icon {
            border-color: $mt-primary;
        }
    }
}
</style>