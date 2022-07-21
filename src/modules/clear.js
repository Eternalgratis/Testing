const clearAll = document.querySelector('.clear');

const cleartodos = (taskstore) => {
  taskstore.taskArr = taskstore.taskArr.filter((task) => task.completed === false);
  taskstore.updateIndex();
  taskstore.populateLocalStorage();
  taskstore.displayTask();
};

export { clearAll, cleartodos };
