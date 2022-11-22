<script>
export default {
    name: 'MainRatings'
}
</script>

<template>
    <section class="ratings">
        <div class="container">
            <div class="row row-cols-4">
                <div class="col">
                    <div class="text-center text-uppercase">
                        <div class="number">1.926</div>
                        <div class="description">finished sessions</div>
                    </div>

                </div>

                <div class="col">
                    <div class="text-center text-uppercase">
                        <div class="number">100%</div>
                        <div class="description">satisfaction rate</div>
                    </div>
                </div>

                <div class="col">
                    <div class="text-center text-uppercase">
                        <div class="number">3092+</div>
                        <div class="description">enrolled learners</div>
                    </div>
                </div>

                <div class="col">
                    <div class="text-center text-uppercase">
                        <div class="number">200</div>
                        <div class="description">online instructors</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.ratings {
    padding-bottom: 7rem;

    .col {
        border: 1px solid;
        border-image-source: url('../assets/img/background-pattern-grid-line-06.png');
        border-image-slice: 0 1;

        .number {
            color: $mt-mountain-meadow;
            font-size: 36px;
            font-weight: 500;
            padding-top: 1rem;
        }

        .description {
            font-size: 15px;
            letter-spacing: 2px;
            padding-bottom: 1rem;
        }
    }
}
</style>