<script>
import { store } from '../store.js';

export default {
    name: 'StoriesSection',
    data() {
        return {
            store
        }
    },
    methods: {
        prev_story() {
            if (store.activeStory === 0) {
                store.activeStory = store.stories.length - 1;
            } else {
                store.activeStory--;
            }
        },

        next_story() {
            if (store.activeStory === store.stories.length - 1) {
                store.activeStory = 0;
            } else {
                store.activeStory++;
            }
        }
    }
}
</script>

<template>
    <section class="stories position-relative">
        <div class="container-fluid">
            <div class="row row-cols-2">
                <div class="col p-0">
                    <div class="text d-flex flex-column justify-content-center align-items-center gap-3">
                        <!-- real stories -->
                        <div class="real_stories text-uppercase">real stories</div>

                        <!-- text -->
                        <p class="text-center py-3">{{ store.stories[store.activeStory].text }}</p>

                        <!-- image -->
                        <img :src="`../src/assets/img/testimonial-avata-${store.stories[store.activeStory].src}.jpg`"
                            alt="test_1" class="rounded-circle">

                        <!-- name -->
                        <h5 class="pt-3">{{ store.stories[store.activeStory].name }}</h5>

                        <!-- role -->
                        <div class="role">/ {{ store.stories[store.activeStory].role }}</div>
                    </div>
                </div>

                <div class="col p-0">
                    <div class="testimonial">
                        <img src="../assets/img/home-movation-testimonial-image.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="carousel d-flex flex-column justify-content-center align-items-center gap-2 rounded-circle">
            <img src="../assets/img/arrow-up.png" alt="up" @click="prev_story()">
            <div>{{ store.activeStory + 1 }}/{{ store.stories.length }}</div>
            <img src="../assets/img/arrow-down.png" alt="down" @click="next_story()">
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.stories {
    padding-bottom: 7rem;

    .text {
        height: 100%;
        background-color: $bg-header;
        background-image: url('../assets/img/background-pattern-wavify.png');

        .real_stories {
            color: $mt-primary;
            font-size: 15px;
            letter-spacing: 2px;
        }

        p {
            font-size: 24px;
            padding: 0 8rem;
        }

        img {
            width: 80px;
            aspect-ratio: 1/1;
        }

        h5 {
            font-size: 20px;
        }

        .role {
            color: $mt-gray;
            font-size: 14px;
        }
    }

    .testimonial {
        img {
            width: 100%;
        }
    }

    .carousel {
        background-color: $mt-white;
        padding: 1rem 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            cursor: pointer;
        }
    }
}
</style>