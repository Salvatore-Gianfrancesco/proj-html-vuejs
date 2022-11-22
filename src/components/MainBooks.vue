<script>
export default {
    name: 'MainBooks'
}
</script>

<template>
    <section class="books">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <!-- text -->
                    <div class="text d-flex flex-column gap-3">
                        <!-- book store online -->
                        <div class="text-uppercase">book store online</div>

                        <!-- title -->
                        <h2>Be Alpha With <span>Wingman's Book</span></h2>

                        <!-- list -->
                        <ul>
                            <li class="py-2">
                                <i class="fa-solid fa-check"></i>
                                <span class="ps-2">Help you understand yourself better</span>
                            </li>

                            <li class="py-2">
                                <i class="fa-solid fa-check"></i>
                                <span class="ps-2">Revealing mature tips</span>
                            </li>

                            <li class="py-2">
                                <i class="fa-solid fa-check"></i>
                                <span class="ps-2">Give the right advice</span>
                            </li>

                            <li class="py-2">
                                <i class="fa-solid fa-check"></i>
                                <span class="ps-2">Fascinating examples of alpha man</span>
                            </li>
                        </ul>

                        <!-- button -->
                        <a href="#" class="text-center rounded-2">Get Free Ebook</a>
                    </div>
                </div>

                <div class="col-7 d-flex justify-content-between gap-4">
                    <div class="card text-center border-0">
                        <!-- image -->
                        <div class="position-relative">
                            <img src="../assets/img/product-book-10-400x400.jpg" alt="">
                            <div class="card_hover d-flex flex-column gap-2">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-signal"></i>
                            </div>
                        </div>

                        <div class="card-body p-4">
                            <!-- book name -->
                            <h5 class="card-title">Alpha man by Maxcoach</h5>

                            <!-- book price -->
                            <p class="card-text">$29<span>.00</span></p>
                        </div>
                    </div>

                    <div class="card text-center border-0">
                        <!-- image -->
                        <div class="position-relative">
                            <img src="../assets/img/product-book-11-400x400.jpg" alt="">
                            <div class="card_hover d-flex flex-column gap-2">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-signal"></i>
                            </div>
                        </div>

                        <div class="card-body p-4">
                            <!-- book name -->
                            <h5 class="card-title">Real man 4.0 by Maxcoach</h5>

                            <!-- book price -->
                            <p class="card-text">$39<span>.00</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.books {
    padding-bottom: 7rem;

    .text {
        padding-right: 7rem;

        div {
            color: $mt-corduroy;
            letter-spacing: 1.5px;
        }

        h2 {
            font-family: $font-merriweather;
            font-size: 48px;

            span {
                color: $mt-mountain-meadow;
            }
        }

        ul {
            list-style: none;
            font-size: 17px;
            padding-left: 0.5rem;

            li {
                i {
                    color: $mt-mountain-meadow;
                }
            }
        }

        a {
            width: 15rem;
            background-color: #20ac97;
            color: #ffffff;
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

    .card {
        .card_hover {
            position: absolute;
            top: 50%;
            right: 35px;
            transform: translate(0, -50%);
            visibility: hidden;

            i {
                width: 45px;
                aspect-ratio: 1/1;
                background-color: $mt-white;
                color: $mt-corduroy;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }

        .card-body {
            .card-title {
                font-size: 24px;
                font-weight: 500;
            }

            .card-text {
                color: $mt-mountain-meadow;
                font-size: 26px;
                font-weight: 500;

                span {
                    font-size: 22px;
                }
            }
        }

        &:hover .card_hover {
            visibility: visible;
        }
    }
}
</style>