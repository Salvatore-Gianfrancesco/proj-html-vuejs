<script>
export default {
    name: 'RatingsSection'
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

    .row {
        background-image: linear-gradient(#20ac9730 70%, $mt-light 0%);
        background-size: 1.2px 7px;
        background-position: right;
        background-repeat: repeat-y;

        .col {
            background-image: linear-gradient(#20ac9730 70%, $mt-light 0%);
            background-size: 1.2px 7px;
            background-position: left;
            background-repeat: repeat-y;

            .number {
                color: $mt-primary;
                font-size: 38px;
                font-weight: 500;
                padding-top: 1rem;
            }

            .description {
                font-size: 17px;
                letter-spacing: 2px;
                padding-bottom: 1rem;
            }
        }
    }

}
</style>