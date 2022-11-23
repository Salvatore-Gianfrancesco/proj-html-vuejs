<script>
import { store } from '../store.js';

export default {
    name: 'FooterInfo',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="footer_info">
        <div class="container-fluid">
            <div class="row row-cols-2">
                <div class="col" v-for="links in store.footerLinks">
                    <h5 class="pb-1">{{ links.title }}</h5>

                    <ul class="p-0" :class="(links.title === 'Explore') ? 'column-count-2' : ''">
                        <li class="py-1" v-for="link in links.links">
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.footer_info {
    h5 {
        font-size: 18px;
    }

    ul {
        list-style: none;

        li {
            a {
                color: $mt-light-gray;
                font-size: 14px;
                text-decoration: none;

                &:hover {
                    color: $mt-primary;
                }
            }
        }

        &.column-count-2 {
            column-count: 2;
        }
    }
}
</style>