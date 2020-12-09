class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  todoDelete(project) {
    project.projectStore.splice((project.projectStore.indexOf(this)), 1);
  }

  todoDone() {

  }
}


export default (project, title, description, dueDate, priority) => {
  const todo = new Todo(title, description, dueDate, priority);
  project.projectStore.push(todo);
  return todo;
};