<script>
export default {
    name: 'HeaderBottom'
}
</script>

<template>
    <section class="header_bottom position-relative">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4">
                    <div class="d-flex flex-column gap-3">
                        <!-- I'M WINGMAN -->
                        <div class="wingman text-uppercase">i'm wingman</div>

                        <!-- title -->
                        <h1>Peace On Earth A Wonderful Wish But No Way</h1>

                        <!-- paragraph -->
                        <p>
                            Success isn't overnight. It's when everyday you get a little better than the day before. It
                            all adds up.
                        </p>

                        <!-- button -->
                        <a href="#" class="text-center rounded-2">
                            <span class="pe-3">Get Started For Free</span>
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

                <div class="col-8">
                    <!-- hero image -->
                    <div class="shape d-flex justify-content-center">
                        <img src="../assets/img/home-movation-hero-image.png" alt="" class="mt-5 pt-5">
                    </div>
                </div>
            </div>
        </div>

        <div class="right_icons d-flex justify-content-center align-items-center flex-column gap-4 py-3">
            <img src="../assets/img/ruler-triangle-icon.svg" alt="">
            <img src="../assets/img/circle-stop-icon.svg" alt="">
            <img src="../assets/img/book-icon.svg" alt="">
            <img src="../assets/img/cart-icon.svg" alt="">
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.header_bottom {
    .wingman {
        font-size: 17px;
        letter-spacing: 1.5px;
    }

    h1 {
        font-family: $font-merriweather;
        font-size: 54px;
        letter-spacing: -1.5px;
    }

    p {
        color: $mt-corduroy;
    }

    a {
        width: 20rem;
        background-color: $mt-mountain-meadow;
        color: $mt-white;
        font-weight: 500;
        text-decoration: none;
        padding: 1rem 0;
        transition: 0.3s;

        &:hover {
            background-color: $btn-hover;
        }
    }

    .shape {
        height: 100%;
        width: 100%;
        background-image: url('../assets/img/home-movation-shape-face.png');
        background-repeat: no-repeat;
        background-position: right bottom;
    }

    .right_icons {
        width: 40px;
        background-color: $mt-white;
        box-shadow: 0 0px 5px -2px;
        position: absolute;
        right: 0;
        top: 10rem;

        img {
            width: 50%;
        }
    }
}
</style>