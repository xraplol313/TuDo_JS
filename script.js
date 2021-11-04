const List = function() {

    this.data = [];
    this.completed = [];

    this.add = function(event) {
        // console.log(event);
        if (event.code != 'Enter') return;

        let value = event.target.value;

        // console.dir(event.target);
        // console.log(value);

        if (value.length == 0) return;

        // console.log(this);

        this.data.push(value);
        event.target.value = '';

        this.updateList();
    }

    this.save = function(event) {
        if (event.code != 'Enter') return;

        let index = event.target.dataset.index;

        if (index == undefined) return;

        this.data[index] = event.target.value;

        event.target.removeAttribute('data-action');
        event.target.removeAttribute('data-index');
        event.target.value = '';
        
        this.updateList();
    }

    this.edit = function(event) {
        let li = event.target.closest('li[data-index]');
        if (!li) return;

        let index = li.dataset.index;

        if (index == undefined) return;

        this.formInput.value = this.data[index];
        this.formInput.dataset.action = 'save';
        this.formInput.dataset.index = index;
    }

    this.edit2 = function(event) {
        let li = event.target.closest('li[data-index]');
        if (!li) return;

        let index = li.dataset.index;

        if (index == undefined) return;

        let newTask = prompt('Edit task', this.data[index]);

        if (!newTask) return;

        this.data[index] = newTask;

        this.updateList();
    }

    this.edit3 = function(event) {
        let li = event.target.closest('li[data-index]');
        if (!li) return;

        let index = li.dataset.index;

        if (index == undefined) return;

        let span = li.querySelector('span');
        
        if (!span) return;

        span.setAttribute('contenteditable', true);
        span.focus();

        span.addEventListener('keyup', event => {
            if (!event.ctrlKey || event.code != 'Enter') return;

            this.data[index] = event.target.innerText;

            this.updateList();
        });  
    }

    this.remove = function(event) {
        let li = event.target.closest('li');
        
        if (!li) return;

        let index = li.dataset.index;

        this.data.splice(index, 1);

        this.updateList();
    }

    this.complete = function(event) {
        let li = event.target.closest('li');
        
        if (!li) return;

        let index = li.dataset.index;

        let task = this.data[index];
        let indexCompletedTask = this.completed.indexOf(task);

        if (indexCompletedTask == -1) this.completed.push(task);
        else this.completed.splice(indexCompletedTask, 1);
    }

    this.sort = function() {
        if (this.data.length == 0) return;

        this.data.sort();
        this.updateList();
    }

    this.updateList = function() {
        this.list.innerHTML = '';

        this.completed = this.completed.filter(elem => {
            return this.data.indexOf(elem) != -1;
        });

        this.data.forEach((elem, index) => {
            const li = document.createElement('li');
            // li.innerHTML = '<span>' + elem + '</span>';
            li.innerHTML = `<input type="checkbox"><span>${elem}</span>`;

            li.dataset.index = index;

            const checkbox = li.querySelector('input[type="checkbox"]');
            if (this.completed.indexOf(elem) != -1) checkbox.checked = true;

            const btnEdit = document.createElement('button');
            btnEdit.innerHTML = 'Edit';

            const btnRemove = document.createElement('button');
            btnRemove.innerHTML = 'X';

            li.append(btnEdit, btnRemove);
            this.list.append(li);

            btnEdit.addEventListener('click', event => {
                // this.edit(event);

                // this.edit2(event);

                this.edit3(event);
            });

            btnRemove.addEventListener('click', event => {
                this.remove(event);
            });

            // if (checkbox) checkbox.addEventListener('click', event => {
            //     this.complete(event);
            // });  
            
            li.addEventListener('click', event => {
                if (event.target.nodeName == 'INPUT') {
                    let type = event.target.getAttribute('type');
                    
                    if (type != 'checkbox') return;

                    this.complete(event);
                }
            });
        });
    }

    this.init = function() {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        const h2 = document.createElement('h2');
        h2.classList.add('todo__title');
        h2.innerHTML = 'ToDo';

        const form = document.createElement('div');
        form.classList.add('todo__form');

        this.formInput = document.createElement('input');
        this.formInput.setAttribute('type', 'text');

        const btnSort = document.createElement('button');
        btnSort.innerHTML = 'Sort';

        this.list = document.createElement('ul');
        this.list.classList.add('todo__list');

        
        form.append(this.formInput);
        form.append(btnSort);
        todo.append(h2, form, this.list)
        document.body.append(todo);

        // formInput.addEventListener('keyup', this.add);

        // formInput.addEventListener('keyup', function(event) {
            // code

            // console.log(this);
            // console.log(event);

            // toDoList.add();
        // });

        // const self = this;
        // formInput.addEventListener('keyup', function(event) {
        //     self.add();
        // });

        this.formInput.addEventListener('keyup', (event) => {
            // if (event.target.dataset.action != 'save') this.add(event);
            // else this.save(event);

            this.add(event);
        });

        btnSort.addEventListener('click', event => {
            this.sort();
        });
    };

    this.init();

};

const toDoList = new List();
// const myTodo = new List();


















function f1() {
    // code
}

const f2 = function() {
    // code
}

const f3 = _ => {
    // code
}




const f4 = function(param1, param2) {
    // code

    return true;
}

const f5 = (param1, param2) => {
    // code

    return true;
}




const summ = function(a, b) {
    return a + b;
}

const summ2 = (a, b) => a + b;




const pow = function(a) {
    return a**a;
}

const pow2 = a => a**a;