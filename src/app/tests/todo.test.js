const todoFile = require('../utils/todo');

beforeEach(() => {
  localStorage.setItem('Projects', JSON.stringify([{ name: 'hello', projectStore: [] }]));
});


afterEach(() => {
  localStorage.setItem('Projects', JSON.stringify([]));
});

test('it creates a new project and pushes it into the local storage', () => {
  const projects = JSON.parse(localStorage.getItem('Projects'));
  const project = projects[0];
  expect(todoFile.createTodo(project, 'testTodo', 'this is a test', '12/12', 'High')).toEqual(project.projectStore[0]);
});

test('it checks if a todo is deleted after it has been created by mocking the original function', () => {
  const projects = JSON.parse(localStorage.getItem('Projects'));
  const project = projects[0];
  project.projectStore.splice((project.projectStore[0]), 1);
  localStorage.setItem('Projects', JSON.stringify(projects));
  expect(project.projectStore).toEqual([]);
});

test('it changes the state of the "checked" key inside the todo', () => {
  const projects = JSON.parse(localStorage.getItem('Projects'));
  const project = projects[0];
  todoFile.createTodo(project, 'testTodo', 'this is a test', '12/12', 'High');
  todoFile.todoChecked(project.projectStore[0], true);
  expect(project.projectStore[0].checked).toEqual(true);
});