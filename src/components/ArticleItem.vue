<script>
export default {
    name: 'ArticleItem',
    props: {
        article: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="card border-0">
            <!-- image -->
            <img :src="`../src/assets/img/motivation-blog-${article.src}-480x325.jpg`" :alt="article.src"
                class="rounded-2">

            <div class="card-body p-4">
                <!-- date -->
                <div class="date">
                    <i class="fa-regular fa-calendar"></i>
                    <span class="ps-2">{{ article.date }}</span>
                </div>

                <!-- article title -->
                <h5 class="card-title py-3">
                    {{ article.title }}
                </h5>

                <!-- article text -->
                <p class="card-text">
                    {{ article.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>

</style>