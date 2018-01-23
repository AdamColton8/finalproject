<template id="">


        <div class="container fadeIn animated">

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
                            <input type="text"  name="" value="" id="login" required v-model="login"/>
                        </div>
                    </div>

                    <div class="field">
                        <label>Пароль:</label>
                        <div class="input">
                            <input type="password" name="" value="" id="pass" required v-model="password"/>
                        </div>
                    </div>

                    <div class="field">
                        <label>Email:</label>
                        <div class="input">
                            <input type="email" v-model="email" name="" value="" id="email" required/>
                        </div>
                    </div>

                    <div class="submit">
                        <button type="submit">Войти</button>
                        <button type="submit">Зарегистрироваться</button>
                    </div>

                </form>
            </div>


                    <div>
                        <h3>Введенная информация</h3>

                        <p>Логин: {{login}}</p>
                        <p>Пароль: {{password}}</p>
                        <p>Email: {{email}}</p>

                    </div>


        </div>


</template>

<script>

    export default {
        mounted() {


        },
        created() {


        },
        data() {

            return {
                email: '',
                login: '',
                password: '',
                date: '',
                age: 18,
                comment: ''
            }

        },
        methods: {}
    }
</script>