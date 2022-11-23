<script>
import { store } from '../store.js';

export default {
    name: 'DemoItem',
    data() {
        return {
            store
        }
    },
    methods: {
        ShowDemo() {
            store.isShowedDemo = !store.isShowedDemo;
        }
    }
}
</script>

<template>
    <section class="demo">
        <div class="demo_button d-flex justify-content-center align-items-center flex-column rounded-2"
            v-if="!store.isShowedDemo">
            <i class="fa-solid fa-ruler" @click="ShowDemo()"></i>
            <i class="fa-solid fa-life-ring"></i>
            <i class="fa-solid fa-book"></i>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>

        <div class="demo_sidebar d-flex flex-column align-items-center gap-4 py-5 px-4" v-if="store.isShowedDemo">
            <h5 class="text-center text-uppercase">MaxCoach - Online Learning and Education WordPress Theme</h5>

            <button type="button" class="btn text-center rounded-2">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="ps-3">Buy Now</span>
            </button>

            <div class="row row-cols-2 g-3">
                <div class="col" v-for="preview in store.previews">
                    <div>
                        <img :src="`../src/assets/img/home-${preview}-preview.jpg`" :alt="preview"
                            class="preview w-100">
                    </div>
                </div>
            </div>

            <i class="fa-solid fa-xmark" @click="ShowDemo()"></i>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.demo {
    .demo_button {
        background-color: $mt-light;
        position: fixed;
        right: 0;
        top: 30vh;

        i {
            width: 40px;
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    .demo_sidebar {
        height: 100vh;
        width: 20rem;
        background-color: $mt-light;
        position: fixed;
        top: 0;
        right: 0;
        overflow-y: auto;

        h5 {
            font-size: 15px;
            font-weight: 600;
            line-height: 1.4;
        }

        i.fa-xmark {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;

            &:hover {
                color: $mt-primary;
            }
        }

        button {
            width: 55%;
            background-color: $mt-primary;
            color: $mt-light;
            font-weight: 500;
            padding: 0.6rem 0;

            &:hover {
                background-color: $mt-secondary;
                color: $mt-light;
            }
        }

        .preview {
            box-shadow: 0px 0px 40px -25px $mt-gray;
            cursor: pointer;

            &:hover {
                box-shadow: 0px 0px 40px -25px $bg-footer;
            }
        }

        &::-webkit-scrollbar {
            width: 0px;
        }
    }
}
</style>