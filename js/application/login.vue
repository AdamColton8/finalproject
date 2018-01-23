<template id="">

    <main>
        <div class="container">

            <div class="breadcrumb_wrap">
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>Login</li>
                </ul>
            </div>

            <div class="login_wrap fadeIn animated">
                <form class="slideDown" id="loginForm" action="" method="post">

                    <div class="field">
                        <label>Имя пользователя:</label>
                        <div class="input">
                            <input type="text" name="" value="" id="login" />
                        </div>
                    </div>

                    <div class="field">
                        <a href="#" id="forgot">Забыли пароль?</a>
                        <label>Пароль:</label>
                        <div class="input">
                            <input type="password" name="" value="" id="pass" />
                        </div>
                    </div>

                    <div class="submit">
                        <button type="submit">Войти</button>
                        <label id="remember">
                            <input name="" type="checkbox" value="" /> Запомнить меня</label>
                    </div>

                </form>
            </div>
        </div>
    </main>


</template>

<script>

    export default {
        mounted() {



        },
        created(){

        },
        data() {

            return {
                faqList: [
                    {

                    },
                    {

                    }
                ],
                loginData: {
                    username: '',
                    password: '',
                },

            }

        },
        methods: {
            login() {
                console.log('login')
            }
        }
    }
</script>