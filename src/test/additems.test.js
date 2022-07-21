const TodoList = require('../modules/task.js');
import TodoList from '../modules/task.js';

const taskstore = new TodoList();
describe('test additem', () => {
    test('todo list1', () => {
        document.body.innerHTML = '<div class="todo-input">';
        taskstore.addTask('go to the mall');
        const list = document.querySelectorAll('.todo-input .todo-div');
        expect(list).toHaveLength(1)
    });

    test('todo list2', () => {
        taskstore.addTask('go to the cinema');
        const list = document.querySelectorAll('.todo-input .todo-div')
        expect(list).toHaveLength(2)
});

test('todo list3', () => {
    taskstore.addTask('doing dishes');
    const list = document.querySelectorAll('.todo-input .todo-div')
    expect(list).toHaveLength(3)
});
})

describe('test remove todo list', () => {
test('remove todo list1', () => {
    taskstore.removeTask(1);
    const list = document.querySelectorAll('.todo-input .todo-div');
    expect(list).toHaveLength(2)
});

    test('remove todo list2', () => {
        taskstore.removeTask(2);
        const list = document.querySelectorAll('.todo-input .todo-div');
        expect(list).toHaveLength(1)
    });

    test('remove todo list3', () => {
        taskstore.removeTask(1);
        const list = document.querySelectorAll('.todo-input .todo-div');
        expect(list).toHaveLength(0)
    });
})
