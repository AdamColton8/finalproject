<template>
    <div class="container fadeIn animated">
        <div>
            <input type="checkbox" id="nav-toggle" hidden>

            <div class="nav">
                <label for="nav-toggle" class="nav-toggle" onclick></label>
                <ul>
                    <li>
                        <a href="#1">Один</a>
                    </li>
                    <li>
                        <a href="#2">Два</a>
                    </li>
                    <li>
                        <a href="#3">Три</a>
                    </li>
                    <li>
                        <a href="#4">Четыре</a>
                    </li>
                    <li>
                        <a href="#5">Пять</a>
                    </li>
                    <li>
                        <a href="#6">Шесть</a>
                    </li>
                    <li>
                        <a href="#7">Семь</a>
                    </li>
                    <li>
                        <div class="spoiler">
                            <label>
                                <input type="checkbox">
                                <span class="btn_check"><i class="fa fa-arrow-down space_between" aria-hidden="true"></i>Восемь</span>
                                <div class="text">Lorem ipsum</div>
                                <div class="text">Lorem ipsum</div>
                                <div class="text">Lorem ipsum</div>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div class="breadcrumb_wrap">
            <ul class="breadcrumb">
                <li>
                    <a href="#">Admin Panel</a>
                </li>
                <li>Login</li>
            </ul>
        </div>
        <div class="row">
            <div class="col-1-3">
                <div class="form_wrap">
                    <form v-on:submit.prevent="addRow">
                        <div>
                            <label for="task_name">Название задачи:</label>
                            <input id="task_name" class="value_task-name" type="text" v-model="newTask.taskName" placeholder="New task" required maxlength="40">
                        </div>
                        <div>
                            <label for="task_description">Описание задачи:</label>
                            <textarea id="task_description" rows="4" cols="50" v-model="newTask.taskDescr" placeholder="Task description" required  maxlength="500"></textarea>
                        </div>
                        <div class="status">
                            <p>Выберите статус:</p>
                            <select v-model="newTask.taskStatus">
                                <option disabled value="">Выберите один из вариантов</option>
                                <option value="dev">В разработке (30%)</option>
                                <option value="test">Тестирование (50%)</option>
                                <option value="pause">Приостановлено (10%)</option>
                                <option value="done">Завершено (100%)</option>
                                <option value="del">Удалено (0%)</option>
                            </select>

                        </div>

                        <div>
                            <button type="submit" class="button button_prime">Добавить новое задание</button>
                        </div>

                    </form>
                </div>
            </div>
            <div class="col-2-3">
                <div class="table_wrap">
                    <table class="table_main">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Задание</th>
                            <th>Статус задания</th>
                            <th>Процент выполнения</th>
                            <th>Править</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="(row, index) in paginated">
                            <th>{{ row.id }} </th>
                            <td>{{ row.taskName }}<br><div class="table_description">Описание задания:</div><br>{{ row.taskDescr }}</td>
                            <td>{{ getHumanStatus(row.taskStatus) }}</td>

                            <td> {{ getPercent(row.taskStatus)}} </td>
                            <td>
                                <button type="submit" class="button_alert" v-on:click="removeRow(index)">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>

                        </tbody>

                    </table>
                   <div class="pagination_wrap">
                    <ul class="pagination">
                        <li v-for="(pageNumber , index) in totalPages" v-if="Math.abs(index - currentPage) < 3 || index === totalPages - 1 || index === 0">
                            <a href="#" v-on:click="setPage(index)"  :class="{current: currentPage === index, last: (index === totalPages - 1 && Math.abs(index - currentPage) > 3), first:(index == 0 && Math.abs(index - currentPage) > 3)}">{{ pageNumber }}</a>
                        </li>
                    </ul>
                   </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>




    export default {
        mounted() {


        },
        created() {
            for(let i = 1; i < 9; i++){
                this.rows.push({id: i , taskName: "Изучить HTML/CSS" , taskDescr: "Нужно постараться", taskStatus: "dev" }, )
            }

        },
        computed: {
            totalPages: function() {
                return Math.ceil(this.resultCount / this.itemsPerPage)
            },
            paginated: function() {
                let list = Object.assign(this.rows);

                if (this.currentPage >= this.totalPages) {
                    this.currentPage = this.totalPages - 1
                }
                let index = this.currentPage * this.itemsPerPage;

                return list.slice(index, index + this.itemsPerPage)
            },
            resultCount: function () {
                return this.rows.length;
            }
        },
        data() {

            return {

                rows: [],
                newTask: {
                    taskName: '',
                    taskDescr: '',
                    taskStatus: '',
                    taskPercent: ''
                },
                currentPage: 0,
                itemsPerPage: 10,

            }

        },
        methods: {
            addRow: function () {
                if(this.newTask.taskStatus.length === 0) {
                    alert('Set task status');
                    return false;
                }

                this.rows.push(Object.assign({
                    id: this.rows.length+1
                }, this.newTask));
                this.newTask = {
                    taskName: '',
                    taskDescr: '',
                    taskStatus: '',
                };

                let transport = nodemailer.createTransport({
                    host: "smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                        user: "2bfebfdc2ad624",
                        pass: "b414a70c5b0a00"
                    }
                });

            },
            removeRow: function (index) {
                console.log("Removing", index);
                this.rows.splice(index, 1);
            },
            getHumanStatus(status) {
                let humanStatus = {
                    dev: 'В разработке',
                    pause: 'Приостановлено',
                    test: 'Тестирование',
                    done: 'Завершено',
                    del: 'Удалено',
                };

                return (humanStatus[status] !== undefined) ? humanStatus[status] : '';

            },
            getPercent(status) {
                let Percent = {
                    dev: '30%',
                    pause: '10%',
                    test: '50%',
                    done: '100%',
                    del: '0%',
                };

                return (Percent[status] !== undefined) ? Percent[status] : '';

            },
            setPage: function(pageNumber) {
                this.currentPage = pageNumber
                console.log(this.currentPage , pageNumber)
            }

        },

    }



</script>
<style>
    .value_task-name {
        width: 180px;
        font-size: 16px;
        padding: 7px 0 4px 10px;
        border: 1px solid #cecece;
        background: #F6F6f6;
        border-radius: 8px;
    }

    .status {
        margin: 0 0 15px 0;
    }
    .table_description{
        margin: 10px 0 0 0;
        font-weight: 700;
        text-decoration: underline;
    }
    .pagination {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .pagination_wrap {
        margin: 30px;
    }

    .pagination li a{
        color: #3c8dbc;
        display: inline;
        margin: 5px;
        padding: 5px;
        border: 1px solid #cccccc;
        border-radius: 5px;
    }

    .pagination li a:hover{
        color: red;
        border: 1px solid red;
    }



</style>
