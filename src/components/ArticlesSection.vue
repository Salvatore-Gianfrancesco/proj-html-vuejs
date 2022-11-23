<script>
import ArticleItem from './ArticleItem.vue';
import { store } from '../store.js';

export default {
    name: 'ArticlesSection',
    components: {
        ArticleItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="articles">
        <!-- grid -->
        <div class="container">
            <!-- begin your journey at maxcoach -->
            <div class="blog_updated text-uppercase pb-4">blog updated</div>

            <!-- title -->
            <h2 class="title pb-4">Interesting <span>articles updated</span> daily</h2>

            <div class="row row-cols-4">
                <!-- article -->
                <ArticleItem v-for="article in store.articles" :article="article" />
            </div>
        </div>

        <!-- button -->
        <div class="text-center">
            <a href="#" class="text-center text-uppercase">view all posts</a>
        </div>

    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.articles {
    .blog_updated {
        font-size: 15px;
        letter-spacing: 2px;
    }

    .title {
        font-family: $font-serif;
        font-size: 40px;

        span {
            color: $mt-primary;
        }
    }

    .col {
        padding: 1.5rem 1rem;

        .card {
            transition: 0.3s;

            .card-body {
                .date {
                    color: $mt-gray;
                    font-size: 14px;
                }

                .card-title {
                    font-size: 20px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: 0.3s;

                    &:hover {
                        color: $mt-primary;
                    }
                }

                .card-text {
                    color: $mt-gray;
                    font-size: 15px;
                }
            }

            &:hover {
                box-shadow: 0px 0px 40px -25px $mt-gray;
            }
        }
    }

    a {
        color: $mt-primary;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        letter-spacing: 2px;
        border-bottom: 3px solid $mt-primary;

        &:hover {
            color: $mt-secondary;
            border-color: $mt-secondary;
        }
    }
}
</style>