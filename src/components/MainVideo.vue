<script>
export default {
    name: 'MainVideo'
}
</script>

<template>
    <section class="video">
        <div class="container">
            <div class="row">
                <div class="col">
                    <!-- image -->
                    <div class="image position-relative">
                        <img src="../assets/img/home-movation-video-poster-670x450.jpg" alt="">

                        <!-- youtube icon -->
                        <img src="../assets/img/icon-youtube-play.png" alt="" class="youtube_icon">
                    </div>
                </div>

                <!-- text -->
                <div class="col">
                    <div class="text h-100 d-flex flex-column justify-content-center">
                        <p class="pb-5">
                            "Every morning you have two choices: continue to sleep with your dreams, or wake up and
                            chase them."
                        </p>

                        <img src="../assets/img/home-movation-shape-01.png" alt="">

                        <div class="author py-3">Kaixa Stark</div>

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
            font-family: $font-merriweather;
            font-size: 30px;
        }

        img {
            width: 30px;
        }

        .author {
            font-size: 22px;
            font-weight: 500;
        }

        .wingman {
            color: $mt-corduroy;
            font-size: 15px;
        }
    }
}
</style>