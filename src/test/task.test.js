/**
 * @jest-environment jsdom
 */

import { TestEnvironment } from 'jest-environment-jsdom';
import TodoList from '../modules/task.js';

// test a function for updating an item's 'completed' status.
let taskstore = new TodoList();
describe('test for edit task/ completed status', () => {
  test('test if the task was edited', () => {
    document.body.innerHTML = '<div class="todo-input">';
    taskstore.taskArr = [
        {
          description: 'wash the dishes',
          completed: false,
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
        }
      ];
      taskstore.displayTask();
      taskstore.updateDescription(2, 'go to the grocery store');
      expect(taskstore.taskArr[1].description).toEqual('go to the grocery store');
  })


  test ('updating an items \'completed\' status', () => {
    document.body.innerHTML = '<div class="todo-input">';
    taskstore.taskArr = [
        {
          description: 'wash the dishes',
          completed: false,
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
        }
      ];
    taskstore.displayTask();
    taskstore.markCompleted(0);
    expect(taskstore.taskArr[0].completed).toBeTruthy;
    expect(taskstore.taskArr[2].completed).toBeFalsy;
  });
});