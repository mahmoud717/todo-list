import '../assets/style/main.scss';
import { loadDefault } from './utils/default';
import createTodo from './utils/todo';
import { createProject, projects, showProjects } from './utils/project';
import { ProjectHover, TodoHover } from './utils/popups';


loadDefault();

TodoHover();


if (JSON.parse(localStorage.getItem('Projects')).length === 0) {
  const DefaultProject = createProject('home', projects);
  createTodo(DefaultProject, 'This is an initial Todo', 'this is a todo', '2020-12-24', 'high');
}


showProjects();
ProjectHover();
