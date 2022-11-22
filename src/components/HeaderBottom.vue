<script>
export default {
    name: 'HeaderBottom'
}
</script>

<template>
    <section class="header_bottom">
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
                        <button type="button" class="btn text-center rounded-2">
                            <span class="pe-3">Get Started For Free</span>
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
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

    button {
        width: 20rem;
        background-color: $mt-mountain-meadow;
        color: $mt-white;
        font-weight: 500;
        padding: 1rem 0;
        transition: 0.3s;

        &:hover {
            background-color: $btn-hover;
            color: $mt-white;
        }
    }

    .shape {
        height: 100%;
        width: 100%;
        background-image: url('../assets/img/home-movation-shape-face.png');
        background-repeat: no-repeat;
        background-position: right bottom;
    }
}
</style>