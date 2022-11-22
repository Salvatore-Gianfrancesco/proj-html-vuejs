<script>
import ArticleItem from './ArticleItem.vue';
import { store } from '../store.js';

export default {
    name: 'MainArticles',
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
        letter-spacing: 1.5px;
    }

    .title {
        font-family: $font-merriweather;
        font-size: 50px;

        span {
            color: $mt-mountain-meadow;
        }
    }

    .col {
        padding: 1.5rem 1rem;

        .card {
            .card-body {
                .date {
                    color: $mt-corduroy;
                    font-size: 16px;
                }

                .card-title {
                    font-size: 20px;
                    font-weight: 500;
                }

                .card-text {
                    color: $mt-corduroy;
                    font-size: 16px;
                }
            }
        }
    }

    a {
        color: $mt-mountain-meadow;
        font-weight: 500;
        text-decoration: none;
        letter-spacing: 1.5px;
        border-bottom: 3px solid $mt-mountain-meadow;
        transition: 0.3s;

        &:hover {
            color: $btn-hover;
            border-color: $btn-hover;
        }
    }
}
</style>