const app = Vue.createApp({
    data() {
        return {
            newTodo: "",
            inputError: false,
            todos: [
                {
                   text:"fare i compiti",
                   done: false

                },
                {
                    text:"fare la spesa",
                    done: true
 
                 },
                 {
                    text:"fare il bucato",
                    done: false
 
                 },
                
            ],
        };
    },
    methods: {
        addTodo() {
            let CleanedTodo =this.newTodo.trim();
            if (CleanedTodo.legth >= 5) {
                this.todos.unshift(CleanedTodo);
                this.newTodo = "";
                this.inputError = false;
            } else {
                this.inputError = true;
            }
        },
        deleteItem(index) {
            this.todos.splice(index, 1);
        },
    },
});

app.mount("#root");