<script>
import { store } from '../store.js';

export default {
    name: 'CourseItem',
    props: {
        course: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card border-0">
            <!-- image -->
            <img :src="`../src/assets/img/motivation-course-${course.id}.jpg`" alt="">

            <div class="card-body p-4">
                <!-- course price -->
                <h5 class="card-title">
                    ${{ course.price.substring(0, 2) }}<span>{{ course.price.substring(2) }}</span></h5>

                <!-- course name -->
                <p class="card-text">
                    {{ course.title }}
                </p>

                <div class="d-flex gap-4 pt-4">
                    <!-- course lessons -->
                    <div class="lessons">
                        <i class="fa-regular fa-file-lines"></i>
                        <span class="ps-2" v-if="course.lessons === 1">{{ course.lessons }} Lesson</span>
                        <span class="ps-2" v-else>{{ course.lessons }} Lessons</span>
                    </div>

                    <!-- course students -->
                    <div class="students">
                        <i class="fa-regular fa-user"></i>
                        <span class="ps-2">{{ course.students }} students</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.col {
    padding: 1.5rem 1rem;
}

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
</style>