<script>
export default {
    name: 'AboutMeSection'
}
</script>

<template>
    <section class="about_me">
        <div class="container">
            <div class="about text-uppercase pb-3">about me</div>

            <div class="row row-cols-2">
                <div class="col">
                    <div class="how_to_title">How to Be an Alpha Male: The 15 Habits of True Alphas</div>
                </div>

                <div class="col">
                    <p class="how_to_question">
                        Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man
                        you've always
                        wanted to be?
                    </p>

                    <p class="how_to_answer">
                        Your goal is to show the consistency of business, core values, and customer care. Punctuality,
                        responsibility, individuality, accuracy, enthusiasm - you have to clearly explain how these
                        qualities are applicable to your work. And the important thing is you do love what you do.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.about_me {
    padding-bottom: 7rem;

    .about {
        color: $mt-primary;
        font-size: 15px;
        letter-spacing: 2px;
    }

    .how_to_title {
        font-family: $font-serif;
        font-size: 40px;
        line-height: 1.5;
        padding-right: 15rem;
    }

    .how_to_question {
        font-weight: 500;
        line-height: 1.7;

        span {
            color: $mt-primary;
        }
    }

    .how_to_answer {
        color: $mt-gray;
        font-size: 15px;
    }
}
</style>