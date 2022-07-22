/**
 * @jest-environment jsdom
 */

 import { TestEnvironment } from 'jest-environment-jsdom';
 import TodoList from '../modules/task.js';
 import {cleartodos} from '../modules/clear';
 
 let taskstore = new TodoList();
 describe('test the \'clear all completed\' function', () => {
   test ('delete html for the completed tasks', () => {
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