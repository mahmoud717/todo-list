class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  todoDelete(project, todo) {
    project.projectStore.splice((project.projectStore.indexOf(todo)), 1);
  }

  switchPriority() {
    console.log(this);
  }
}


export default (project, title, description, dueDate, priority) => {
  const todo = new Todo(title, description, dueDate, priority);
  project.projectStore.push(todo);
  return todo;
};