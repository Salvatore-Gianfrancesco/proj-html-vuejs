<script>
import CourseItem from './CourseItem.vue';
import { store } from '../store.js';

export default {
    name: 'LatestSection',
    components: {
        CourseItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="latest_courses">
        <!-- begin your journey at maxcoach -->
        <div class="begin text-center text-uppercase pb-4">begin your journey at maxcoach</div>

        <!-- grid -->
        <div class="container">
            <h2 class="title text-center pb-4">Latest <span>Online Courses</span></h2>

            <div class="row row-cols-3">
                <!-- course item -->
                <CourseItem v-for="course in store.courses" :course="course" />
            </div>
        </div>

        <!-- button -->
        <div class="text-center">
            <button type="button" class="btn text-center rounded-2">
                <span class="pe-3">View all courses</span>
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>

    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.latest_courses {
    padding-bottom: 7rem;

    .begin {
        color: $mt-gray;
        font-size: 15px;
        letter-spacing: 2px;
    }

    .title {
        font-family: $font-serif;
        font-size: 48px;

        span {
            color: $mt-primary;
        }
    }

    .col {
        padding: 1.5rem 1rem;

        .card {
            transition: 0.3s;

            .card-body {
                .card-title {
                    color: $mt-primary;
                    font-size: 24px;
                    font-weight: 500;

                    span {
                        font-size: 18px;
                    }
                }

                .card-text {
                    font-size: 20px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: 0.3s;

                    &:hover {
                        color: $mt-primary;
                    }
                }

                .lessons,
                .students {
                    color: $mt-gray;
                    font-size: 14px;
                }
            }

            &:hover {
                box-shadow: 0px 0px 40px -25px $mt-gray;
            }
        }
    }

    button {
        width: 16rem;
        background-color: $mt-primary;
        color: $mt-light;
        font-weight: 500;
        padding: 1rem 0;

        &:hover,
        &:active {
            background-color: $mt-secondary !important;
            color: $mt-light !important;
        }
    }
}
</style>