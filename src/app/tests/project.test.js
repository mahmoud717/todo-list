const projectFile = require('../utils/project');

beforeEach(() => {
  localStorage.setItem('Projects', JSON.stringify([]));
});


afterEach(() => {
  localStorage.setItem('Projects', JSON.stringify([]));
});

test('create a project', () => {
  const allProjects = JSON.parse(localStorage.getItem('Projects'));
  expect(projectFile.createProject('hello', allProjects)).toEqual({ name: 'hello', projectStore: [] });
});