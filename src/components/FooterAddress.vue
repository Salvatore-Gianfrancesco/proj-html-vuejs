<script>
import { store } from '../store.js';

export default {
    name: 'FooterAddress',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="footer_address d-flex flex-column gap-1">
        <h5>Address</h5>

        <!-- address -->
        <p>{{ store.address }}</p>

        <!-- contact -->
        <p>{{ store.contact }}</p>

        <!-- email -->
        <a href="#" class="pb-4">{{ store.email }}</a>

        <!-- social -->
        <div class="footer_social d-flex gap-4">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.footer_address {
    h5 {
        font-size: 18px;
        font-weight: 500;
    }

    p {
        color: $mt-light-gray;
        font-size: 14px;
    }

    a {
        color: $mt-light-gray;
        font-size: 14px;
        text-decoration: none;
        display: inline-block;

        &:hover {
            color: $mt-primary;
        }
    }

    .footer_social {
        i {
            color: $mt-light-gray;
            font-size: 24px;
            cursor: pointer;

            &:hover {
                color: $mt-light;
            }
        }
    }
}
</style>