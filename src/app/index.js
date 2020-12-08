import '../assets/style/main.scss';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  switchPriority() {
    console.log('hello');
  }

  done() {

  }
}

const firstTodo = new Todo('asd', 'asd', 'ad', 'asd');
firstTodo.switchPriority();