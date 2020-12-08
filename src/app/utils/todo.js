class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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