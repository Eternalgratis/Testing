class TodoList {
  constructor() {
    this.taskArr = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

    addTask = (item) => {
      this.taskArr.push({ description: item, completed: false, index: this.taskArr.length + 1 });
      this.populateLocalStorage();
      this.displayTask();
    }

    removeTask = (index) => {
      this.taskArr = this.taskArr.filter((task) => task.index !== index);
      this.updateIndex();
      this.populateLocalStorage();
      this.displayTask();
    }

    updateIndex = () => {
      this.taskArr = this.taskArr.map((task, index) => {
        task.index = index + 1;
        return task;
      });
    }

   displayTask = () => {
     const todo = document.querySelector('.todo-input ');
     todo.innerHTML = '';
     for (let i = 0; i < this.taskArr.length; i += 1) {
       todo.innerHTML += `
          <div class="todo-div">
          <div class="todos">
          <input type="checkbox" name="" id="${i}">
          <p contenteditable=>${this.taskArr[i].description}</p>
          </div>
          <div class="icons">
          <i class="fa-solid fa-ellipsis-vertical" id='elipsi'></i>
          <i class="fa-solid fa-trash-can d-none" data-index=${i + 1}></i>
          </div>
          </div>
          `;
     }
     const deleteBtn = document.querySelectorAll('.fa-trash-can');
     deleteBtn.forEach((button) => {
       button.addEventListener('click', (event) => {
         const id = parseInt(event.target.getAttribute('data-index'), 10);
         this.removeTask(id);
       });
     });

     const checkboxes = document.querySelectorAll('input[type=checkbox]');
     checkboxes.forEach((checkbox) => {
       checkbox.addEventListener('change', (event) => {
         const inputField = event.target.parentNode.querySelector('p');
         const ellipsis = event.target.parentNode.parentNode.querySelector('.fa-ellipsis-vertical');
         const trashCan = event.target.parentNode.parentNode.querySelector('.fa-trash-can');
         inputField.classList.toggle('line-through');
         trashCan.classList.toggle('d-none');
         ellipsis.classList.toggle('d-none');
         this.markCompleted(parseInt(event.target.id, 10));
       });
     });
   }

  markCompleted = (list) => {
    this.taskArr[list].completed = !this.taskArr[list].completed;
    this.populateLocalStorage();
  }

  populateLocalStorage = () => {
    localStorage.setItem('taskstore', JSON.stringify(this.taskArr));
  }
}

export default TodoList;