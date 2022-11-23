<script>
export default {
    name: 'VideoSection'
}
</script>

<template>
    <section class="video">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <!-- image -->
                    <div class="image position-relative">
                        <img src="../assets/img/home-movation-video-poster-670x450.jpg" alt="testimonial"
                            class="shadow w-100">

                        <!-- youtube icon -->
                        <img src="../assets/img/icon-youtube-play.png" alt="youtube_logo" class="youtube_icon">
                    </div>
                </div>

                <!-- text -->
                <div class="col-5">
                    <div class="text h-100 d-flex flex-column justify-content-center">
                        <!-- quote -->
                        <p class="pb-5">
                            "Every morning you have two choices: continue to sleep with your dreams, or wake up and
                            chase them."
                        </p>

                        <!-- photo -->
                        <img src="../assets/img/home-movation-shape-01.png" alt="">

                        <!-- name -->
                        <div class="author py-3">Kaixa Stark</div>

                        <!-- wingman -->
                        <div class="text-uppercase wingman">wingman</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.video {
    padding-bottom: 7rem;

    .image {
        .shadow {
            box-shadow: 0px 80px 170px -110px $mt-dark !important;
        }

        .youtube_icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .text {
        padding: 0 7rem;

        p {
            font-family: $font-serif;
            font-size: 24px;
        }

        img {
            width: 30px;
        }

        .author {
            font-size: 22px;
            font-weight: 500;
        }

        .wingman {
            color: $mt-gray;
            font-size: 12px;
            letter-spacing: 1.5px;
        }
    }
}
</style>