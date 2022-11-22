<script>
import FooterAddress from './FooterAddress.vue';
import FooterInfo from './FooterInfo.vue'
import { store } from '../store.js';

export default {
    name: 'AppFooter',
    components: {
        FooterAddress,
        FooterInfo
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer class="position-relative">
        <div class="container">
            <div class="row row-cols-2">
                <div class="col">
                    <FooterAddress />
                </div>

                <div class="col">
                    <FooterInfo />
                </div>
            </div>
        </div>

        <div class="copy text-center pt-5">&copy; 2020 Maxcoach. All Right Reserved</div>

        <a href="#go_up" class="go_up d-flex justify-content-center align-items-center rounded-circle">
            <i class="fa-solid fa-arrow-up-long"></i>
        </a>
    </footer>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

footer {
    background-color: $mt-cinder;
    color: $mt-white;
    padding: 5rem 0;

    .copy {
        color: $mt-silver-sand;
        font-size: 16px;
    }

    .go_up {
        width: 60px;
        aspect-ratio: 1/1;
        background-color: $mt-mountain-meadow;
        color: $mt-white;
        text-decoration: none;
        display: inline-block;
        position: absolute;
        bottom: 30px;
        right: 30px;
        transition: 0.3s;

        &:hover {
            background-color: $btn-hover;
        }
    }
}
</style>