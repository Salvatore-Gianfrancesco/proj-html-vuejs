<script>
import { store } from '../store.js';

export default {
    name: 'HeaderLinks',
    data() {
        return {
            store
        }
    },
    methods: {
        showDropdown(i) {
            // store.headerLinks[i].visible = !store.headerLinks[i].visible;

            /* for (let j = 0; j < store.headerLinks.length; j++) {
                store.headerLinks[j].visible = false
            } */

            if (store.headerLinks[i].visible) {
                store.headerLinks[i].visible = false;
            } else {
                store.headerLinks.forEach(link => {
                    link.visible = false;
                });

                store.headerLinks[i].visible = true;
            }

        }
    }
}
</script>

<template>
    <nav class="header_links">
        <a href="#" v-for="(link, i) in store.headerLinks" class="position-relative" @click="showDropdown(i)">
            {{ link.name }}
            <span class="dropdown_icon ms-1"></span>

            <div class="dropdown_menu" v-if="link.visible">
                <ul class="m-0 p-3">
                    <li class="pb-2" v-for="dropdown in link.dropdown">{{ dropdown }}</li>
                </ul>
            </div>
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

        .dropdown_menu {
            width: 200px;
            background-color: $mt-light;
            padding: 0.5rem;
            box-shadow: 0px 0px 40px -25px $mt-gray;
            position: absolute;
            bottom: -1rem;
            left: 0;
            transform: translate(0, 100%);

            ul {
                color: $mt-gray;
                list-style: none;

                li {
                    transition: 0.3s;

                    &:hover {
                        color: $mt-dark;
                    }
                }
            }
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