<template>
    <div class="container">

        <main>
            <div class="breadcrumb_wrap">
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>Login</li>
                </ul>
            </div>


            <div class="slideshow-container fadeIn animated">

                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="img/crm-img.png">
                    <!-- <div class="text">Caption Text</div> -->
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="img/epam.jpg">
                    <!-- <div class="text">Caption Two</div> -->
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="img/crm-img1.png">
                    <!-- <div class="text">Caption Three</div> -->
                </div>

                <a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
                <a class="next" v-on:click="plusSlides(1)">&#10095;</a>

                <div class="dots">
                    <span class="dot" v-for="slide in slidesCount" v-on:click="currentSlide(slide + 1)"></span>

                </div>
            </div>

            <div class="fadeIn animated">
                <section class="auth jc_center">
                    <div class="auth-container">
                        <h2 class="auth-title ">Добро пожаловать!</h2>
                        <p class="auth-text jc_center">Войдите, чтобы получить доступ к панели Администратора</p>
                        <span class="btn-link" name="auth-btn">
                            <a href="#" class="btn-link-i">Войти в&nbsp;личный кабинет</a>
                        </span>
                        <div class="auth-reg">
                            <a href="#" class="auth-reg-user">Регистрация</a> нового пользователя
                        </div>
                    </div>
                </section>
            </div>


        </main>
    </div>
</template>


<style>
    .auth-reg-user{
        color: #3e77aa;
    }
    .auth-reg-user:hover{
        color: #fb3f4c;
        text-decoration: underline;
    }
    .slideshow-container{
        margin-bottom: 50px;
    }
    .auth-container{
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        margin-bottom: 30px;
        padding: 20px;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        text-align: center;
        width: 100%;
    }

    .auth-title {
        font-weight: 400;
        margin-bottom: 20px;
        font-size: 22px;
        line-height: 28px;

    }
    .auth-text {
        margin-bottom: 13px;
        font-size: 14px;
    }
    .auth{

    }
    .btn-link-i{
        color: #ffffff;
        padding: 10px 20px 10px 20px;
        border: 0;
        cursor: pointer;
        display: inline-block;
        position: relative;
        z-index: 1;
        outline: 0;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        font-size: 16px;
        background-color: #3e77aa;
        border-radius: 8px;
        box-shadow: 3px 3px 7px 0 rgba(64,121,171,.5), inset 0 -3px 0 0 #326089;
        margin-bottom: 20px;
    }
    .btn-link-i:hover{
        background: #2083dc;
        background: -webkit-linear-gradient(top,#4faafa,#2083dc);
        background: -ms-linear-gradient(top,#4faafa,#2083dc);
        background: -moz-linear-gradient(top,#4faafa,#2083dc);
        box-shadow: 3px 3px 7px 0 rgba(64,121,171,.5), inset 0 -3px 0 0 #1a6ab0;
    }

</style>

<script>


    export default {
        mounted() {


            let slides = document.getElementsByClassName("mySlides");
            let slidesCount = slides.length;
            this.slidesCount = [...Array(slidesCount).keys()];

            this.$nextTick(function () {
                this.showSlides(this.slideIndex);
            })


            //dropdown


        },
        created() {


        },
        data() {

            return {
                slideIndex: 1,
                slidesCount: []

            }

        },
        methods: {
            currentSlide(n) {
                this.showSlides(this.slideIndex = n);
            },
            plusSlides(n) {
                this.showSlides(this.slideIndex += n);
            },
            showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("mySlides");

                let dots = document.getElementsByClassName("dot");


                if (n > slides.length) {
                    this.slideIndex = 1
                }
                if (n < 1) {
                    this.slideIndex = slides.length
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[this.slideIndex - 1].style.display = "block";
                dots[this.slideIndex - 1].className += " active";
            },
        }
    }
</script>