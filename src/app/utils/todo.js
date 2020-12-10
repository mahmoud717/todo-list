import { projects, showProjects } from './project';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = false;
  }

  todoDelete(project) {
    project.projectStore.splice((project.projectStore.indexOf(this)), 1);
    localStorage.setItem('Projects', JSON.stringify(projects));
    showProjects();
  }
}


export default (project, title, description, dueDate, priority) => {
  const todo = new Todo(title, description, dueDate, priority);
  project.projectStore.push(todo);

  localStorage.setItem('Projects', JSON.stringify(projects));
  console.log(projects, JSON.parse(localStorage.getItem('Projects')));
  return todo;
};

export const todoEventListeners = (newTodo) => {

};