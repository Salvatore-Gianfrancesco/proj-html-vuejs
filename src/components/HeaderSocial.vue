<script>
export default {
    name: 'HeaderSocial'
}
</script>

<template>
    <div class="header_social">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
    </div>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.header_social {
    i {
        padding: 0 0.7rem;
        cursor: pointer;

        &:hover {
            color: $mt-primary;
        }
    }
}
</style>