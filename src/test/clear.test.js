/**
 * @jest-environment jsdom
 */

import TodoList from '../modules/task.js';
import { cleartodos } from '../modules/clear.js';

const taskstore = new TodoList();
describe('test the \'clear all completed\' function', () => {
  test('delete html for the completed tasks', () => {
    document.body.innerHTML = '<div class="todo-input">';
    taskstore.taskArr = [
      {
        description: 'wash the dishes',
        completed: true,
        index: 1,
      },
      {
        description: 'do the laundry',
        completed: false,
        index: 2,
      },
      {
        description: 'take the dog to the vet',
        completed: false,
        index: 3,
      },
    ];
    taskstore.displayTask();

    cleartodos(taskstore);
    expect(taskstore.taskArr).toHaveLength(2);
  });
});