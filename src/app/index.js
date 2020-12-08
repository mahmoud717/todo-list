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
      // const submitBtn = querySelector("button.todo-submit")
      // const cancelBtn = querySelector("button.todo-cancel")
      const todoActionBtns = document.querySelector(".todo-action-btns")
      todoActionBtns.addEventListener("click", (e)=> {

        if (e.target.classList.contains("todo-submit")){  
          

          hoveringPopup.classList.remove("d-flex")
          hoveringPopup.classList.add("d-none")
          elMain.classList.remove("dimmed")
          var new_element = todoActionBtns.cloneNode(true);
          todoActionBtns.parentNode.replaceChild(new_element, todoActionBtns);
        }
        else if( e.target.classList.contains("todo-cancel") ){
          hoveringPopup.classList.remove("d-flex")
          hoveringPopup.classList.add("d-none")
          elMain.classList.remove("dimmed")
          var new_element = todoActionBtns.cloneNode(true);
          todoActionBtns.parentNode.replaceChild(new_element, todoActionBtns);
        }
      })
    }
    
  })
}());

const project1 = createProject('hello', projects);
console.log(project1)
const todo1 = createTodo(project1, 'hello', 'this is a todo', 'today', 'high');


console.log(todo1, project1, projects);