<script>
import CourseItem from './CourseItem.vue';
import { store } from '../store.js';

export default {
    name: 'MainLatest',
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
            <a href="#" class="text-center rounded-2">
                <span class="pe-3">View all courses</span>
                <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>

    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.latest_courses {
    padding-bottom: 7rem;

    .begin {
        color: $mt-corduroy;
        letter-spacing: 1.5px;
    }

    .title {
        font-family: $font-merriweather;
        font-size: 58px;

        span {
            color: $mt-mountain-meadow;
        }
    }

    .col {
        padding: 1.5rem 1rem;

        .card {
            .card-body {
                .card-title {
                    color: $mt-mountain-meadow;
                    font-size: 30px;
                    font-weight: 500;

                    span {
                        font-size: 24px;
                    }
                }

                .card-text {
                    font-size: 24px;
                    font-weight: 500;
                }

                .lessons,
                .students {
                    color: $mt-corduroy;
                    font-size: 18px;
                }
            }
        }
    }

    a {
        width: 20rem;
        background-color: $mt-mountain-meadow;
        color: $mt-white;
        font-weight: 500;
        text-decoration: none;
        padding: 1rem 0;
        display: inline-block;
        transition: 0.3s;

        &:hover {
            background-color: $btn-hover;
        }
    }
}
</style>