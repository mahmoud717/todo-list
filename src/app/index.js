import '../assets/style/main.scss';
import { loadDefault } from './utils/default';

loadDefault();

class Project {
  constructor(name) {
    this.name = name;
  }

  delete() {

  }
}

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

const firstProject = new Project('My first project');