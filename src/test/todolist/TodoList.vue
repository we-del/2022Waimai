<template>
    <div class="todoView">
        <div class="todo-container">
            <TodoInput :todos="todos"/>
            <TodoShow :todos="todos"/>
        </div>
    </div>
</template>

<script>
    import TodoInput from "./TodoInput.vue";
    import TodoShow from "./TodoShow.vue";
    import { v4 as uuidv4 } from 'uuid';
    export default {
        name: "TodoList",
        components: {
            TodoInput, TodoShow
        },
        data() {
            return {
                todos: [
                    {
                        todoContent: "我来完成",
                        todoState: false,
                        id:uuidv4(),
                        isMoved: false,
                        isEdit: false
                    },
                    {
                        todoContent: "明天吃鸡",
                        todoState: false,
                        id:uuidv4(),
                        isMoved:false,
                        isEdit:false
                    },
                ],
            };
        }
    }
</script>

<style scoped lang="less">
    .todoView{
        width: 600px;
        border: 2px solid #fa541c;
        border-radius: 3px;
        margin: 100px auto;
        padding: 20px;
        .todo-container{
            border:1px solid #ccc;
            padding: 20px;
        }
    }
</style>