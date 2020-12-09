import '../assets/style/main.scss';
import { loadDefault } from './utils/default';
import createTodo from './utils/todo';
import { createProject, projects, showProjects } from './utils/project';
import { TodoHover } from './utils/popups';


loadDefault();

TodoHover();

const project1 = createProject('hello', projects);
const project2 = createProject('there', projects);
const todo1 = createTodo(project1, 'hello', 'this is a todo', 'today', 'high');

showProjects();
