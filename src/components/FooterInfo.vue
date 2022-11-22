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
            <div class="row justify-content-start">
                <div class="col-3" v-for="links in store.footerLinks">
                    <h5 class="pb-1">{{ links.title }}</h5>

                    <ul class="p-0">
                        <li class="py-2" v-for="link in links.links">
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
        min-height: 28px;
    }

    ul {
        list-style: none;

        li {
            a {
                color: $mt-silver-sand;
                font-size: 16px;
                text-decoration: none;
                transition: 0.3s;

                &:hover {
                    color: $mt-mountain-meadow;
                }
            }
        }
    }
}
</style>