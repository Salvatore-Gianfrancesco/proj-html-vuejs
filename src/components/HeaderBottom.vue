<script>
export default {
    name: 'HeaderBottom'
}
</script>

<template>
    <section class="header_bottom">
        <div class="container">
            <div class="row row-cols-2 align-items-center">
                <div class="col">
                    <div class="text d-flex flex-column gap-3">
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
                        <button type="button" class="btn text-center rounded-2">
                            <span class="pe-3">Get Started For Free</span>
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>

                <div class="col">
                    <!-- hero image -->
                    <div class="image d-flex justify-content-center">
                        <img src="../assets/img/home-movation-hero-image.png" alt="" class="mt-5 pt-5">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.header_bottom {
    .text {
        padding-right: 11rem;

        .wingman {
            font-size: 17px;
            letter-spacing: 2px;
        }

        h1 {
            font-family: $font-serif;
            font-size: 56px;
            line-height: 1.3;
        }

        p {
            color: $mt-gray;
            line-height: 1.8;
        }

        button {
            width: 18rem;
            background-color: $mt-primary;
            color: $mt-light;
            font-weight: 500;
            padding: 1rem 0;
            transition: 0.3s;

            &:hover,
            &:active {
                background-color: $mt-secondary !important;
                color: $mt-light !important;
            }
        }
    }

    .image {
        height: 100%;
        width: 100%;
        background-image: url('../assets/img/home-movation-shape-face.png');
        background-repeat: no-repeat;
        background-position: right bottom;
    }
}
</style>