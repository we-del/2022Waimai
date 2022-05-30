<template>
    <div class="text-show" @mouseover="todo.isMoved=true" @mouseout="todo.isMoved=false">
        <input type="checkbox" v-model="todo.todoState">
        <span class="text" v-if="!todo.isEdit">{{todo.todoContent}}</span>
        <input class="text" id="change-content" @change="todo.isEdit=!todo.isEdit"
               v-model="todo.todoContent" v-else>
        <span class="todo-remove" @click="removeTodo" v-show="todo.isMoved">删除</span>
        <span class="todo-edit" @click="todo.isEdit=!todo.isEdit" v-show="todo.isMoved">编辑</span>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ["todo","todos"],
        mounted() {
            console.log(this);
        },
        methods:{
            removeTodo(){
                this.todos.forEach((todo,index)=>{
                    if(todo.id === this.todo.id){
                        this.todos.splice(index,1);
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .text-show {
        height: 30px;
        width: 100%;
        border: 1px solid #ccc;
        margin: -1px 0;
        line-height: 30px;

        .text {
            margin-left: 10px;
        }
        .todo-ope(@bg-color: #cf1322){
            float:right;
            width: 50px;
            text-align: center;
            margin-right: 10px;
            background-color:@bg-color;
            color:white;
            border-radius: 10px;
            cursor: pointer;
        }
        .todo-remove{
            .todo-ope();
        }
        .todo-edit{
            .todo-ope(#bae637);
        }
        #change-content{
            width: 50%;
            height: 50%;
            outline: none;
        }
    }

</style>