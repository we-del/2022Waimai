<template>
    <div class="todo-show">
        <div v-for="(i,j) in todos">
            <TodoItem :todo="i" :todos="todos"/>
        </div>
        <div class="operate-region" :style="{marginTop:'10px'}">
            <div class="current-done">
                <input type="checkbox" @change="handlerChange">
                已完成
                <span class="done-number">{{curDone}}</span>
                / 全部
                <span class="all-todo">{{todos.length}}</span>
                <span class="removeAllDone" @click="clearAllDone">
                清除所有已完成的任务
                </span>
            </div>

        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "TodoShow",
        components: {TodoItem},
        data() {
            return {
                flag: false
            };
        },
        props: ["todos"],
        methods: {
            handlerChange(e) {
                this.flag = !this.flag;
                if (this.flag) {
                    this.todos.forEach(todo => {
                        todo.todoState = true;
                    })
                } else {
                    this.todos.forEach(todo => {
                        todo.todoState = false;
                    })
                }
                console.log(e, 1);
            },
            clearAllDone() {
               while(true){
                   let index = this.todos.findIndex(todo=> todo.todoState === true);
                   if(index ===-1){
                       return;
                   }
                   this.todos.splice(index,1);
               }
            }
        },
        computed: {
            curDone() {
                let doneNumber = 0;
                this.todos.forEach(todo => {
                    console.log(todo);
                    if (todo.todoState) {
                        doneNumber++;
                    }
                })
                return doneNumber;
            }
        }
    }
</script>

<style scoped>
    .removeAllDone{
        float:right;
        width: 200px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-right: 20px;
        background-color: #cf1322;
        color:white;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
