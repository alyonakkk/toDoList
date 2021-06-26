Vue.createApp({
    data() {
        return {
            inputValue: '',
            needToDo: [],
            wellDone: [],
            displayValue: 'none'
        };
    },
    methods: {
        handleInput(event) {
            this.inputValue = event.target.value;
        },

        formOpen() {
            this.displayValue = 'block';
        },

        formClose() {
            this.displayValue = 'none';
        },

        addTask() {
            if (this.inputValue === '') { return };
            this.needToDo.push({
                task: this.inputValue,
                id: Math.random()
            });
            this.inputValue = '';
            this.displayValue = 'none';
        },

        check(i, type) {
            if (type === 'todo') {
                let complete = this.needToDo.splice(i, 1);
                this.wellDone.push(...complete);
            } else {
                let notComplete = this.wellDone.splice(i, 1);
                this.needToDo.push(...notComplete);
            }
        },

        removeTask(i, type) {
            if (type === 'todo') {
                this.needToDo.splice(i, 1);
            }
            else {
                this.wellDone.splice(i, 1);
            }
        }

    }
}).mount('#app');