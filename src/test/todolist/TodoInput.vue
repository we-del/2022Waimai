<template>
    <div>
        <input type="text" id="input" placeholder="请输入事项" ref="input" @keyup.enter="addTodo">
        <hr>
    </div>
</template>

<script>
    import {v4 as uuidv4} from 'uuid';

    export default {
        name: "TodoInput",
        props: ["todos"],
        methods: {
            addTodo() {
                console.log(this);
                let todoContent = this.$refs.input.value.trim();
                if (!todoContent.length > 0) {
                    return
                }
                let todo = {
                    id: uuidv4(),
                    todoState: false,
                    todoContent,
                    isMoved: false,
                    isEdit: false
                };
                this.todos.unshift(todo);
                this.$refs.input.value = "";
            }
        }
    }
</script>

<style scoped>
    #input {
        width: 97%;
        height: 30px;
        border: 1px solid #000;
        padding-left: 10px;
        border-radius: 5px;
        outline: none;
    }
</style>