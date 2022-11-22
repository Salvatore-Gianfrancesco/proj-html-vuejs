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
        <p>{{ store.address }}</p>
        <p>{{ store.contact }}</p>
        <p>{{ store.email }}</p>

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
        font-weight: 500;
    }

    p {
        color: $mt-silver-sand;
        font-size: 16px;
    }

    .footer_social {
        i {
            color: $mt-silver-sand;
            font-size: 26px;
        }
    }
}
</style>