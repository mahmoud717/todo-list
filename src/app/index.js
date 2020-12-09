import '../assets/style/main.scss';
import { loadDefault } from './utils/default';
import    createTodo  from './utils/todo';
import { createProject, projects } from './utils/project';
import {TodoHover} from "./utils/popups"


loadDefault();

TodoHover()

const project1 = createProject('hello', projects);
console.log(project1)
const todo1 = createTodo(project1, 'hello', 'this is a todo', 'today', 'high');


console.log(todo1, project1, projects);