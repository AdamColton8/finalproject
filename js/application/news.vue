<template>
    <div>
        <form id="login-form" class="">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="Введите email" required class="form-control"/>
            <label>Логин</label>
            <input type="text" v-model="login" placeholder="Введите логин" required class="form-control"/>
            <label>Пароль</label>
            <input type="password" v-model="password" placeholder="Введите пароль" required class="form-control"/>
            <label>Возраст</label>
            <input type="number" v-model="age" min="18" placeholder="Введите возраст" required class="form-control"/>
            <label>Дата рождения</label>
            <input type="date" v-model="date" placeholder="Введите дату" required class="form-control"/>
            <label>О себе</label>
            <textarea v-model="comment" class="form-control"></textarea>

            <div>
                <h3>Введенная информация</h3>
                <p>Email: {{email}}</p>
                <p>Логин: {{login}}</p>
                <p>Пароль: {{password}}</p>
                <p>Возраст: {{age}}</p>
                <p>Дата рождения: {{date}}</p>
            </div>
            <div>
                <h3>О себе</h3>
                <p style="white-space: pre-line">{{comment}}</p>
            </div>
            <button type="submit">Accept</button>
        </form>
    </div>
</template>
<style>

</style>


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
                comment:''
            }

        },
        methods: {}
    }
    // var app = new Vue({
    //     el: '#app',
    //     data: {
    //         login:'',
    //         password:'',
    //         date: '',
    //         age: 22
    //     }
    // });
</script>