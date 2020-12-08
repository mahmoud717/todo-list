import '../assets/style/main.scss';
import { loadDefault } from './utils/default';
import    createTodo  from './utils/todo';
import { createProject, projects } from './utils/project';


loadDefault();

(function changesHover() {
  const hoveringPopup = document.querySelector(".hovering-popup")
  const createTodoBtn = document.querySelector(".create-todo-btn")
  const elMain = document.querySelector("main")

  createTodoBtn.addEventListener("click", () => {
    if (hoveringPopup.classList.contains("d-none")){
      hoveringPopup.classList.remove("d-none")
      hoveringPopup.classList.add("d-flex")
      elMain.classList.add("dimmed")
    }
    else {
      hoveringPopup.classList.remove("d-flex")
      hoveringPopup.classList.add("d-none")
      elMain.classList.remove("dimmed")
    }
    
  })
}());

const project1 = createProject('hello', projects);
console.log(project1)
const todo1 = createTodo(project1, 'hello', 'this is a todo', 'today', 'high');


console.log(todo1, project1, projects);