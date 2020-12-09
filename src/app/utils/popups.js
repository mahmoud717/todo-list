import { projects } from './project';
import createTodo from './todo';

export function createTodoPopup(projects) {
  const body = document.querySelector('body');
  const hoveringPopup = document.createElement('div');
  hoveringPopup.className = 'hovering-popup-container p-5 d-flex';
  const hover = document.createElement('div');
  hover.className = 'hover shadow p-5';
  const todoForm = document.createElement('form');


  const formInput1 = document.createElement('div');
  formInput1.className = 'mb-3';
  const todoInputLabel = document.createElement('label');
  todoInputLabel.className = 'form-label';
  todoInputLabel.innerHTML = 'Todo Title';
  todoInputLabel.setAttribute('for', 'todo-input');
  const todoInput = document.createElement('input');
  todoInput.className = 'form-control';
  todoInput.type = 'text';
  todoInput.id = 'todo-input';
  formInput1.appendChild(todoInputLabel);
  formInput1.appendChild(todoInput);

  const formInput2 = document.createElement('div');
  formInput2.className = 'mb-3';
  const todoDateLabel = document.createElement('label');
  todoDateLabel.className = 'form-label';
  todoDateLabel.innerHTML = 'Due Date';
  todoDateLabel.setAttribute('for', 'due-date-input');
  const todoDate = document.createElement('input');
  todoDate.className = 'form-control';
  todoDate.type = 'date';
  todoDate.id = 'due-date-input';
  formInput2.appendChild(todoDateLabel);
  formInput2.appendChild(todoDate);

  const formSelect1 = document.createElement('div');
  formSelect1.className = 'mb-3';
  const formSelectInner1 = document.createElement('select');
  formSelectInner1.className = 'form-select project-select w-100 py-1';
  formSelectInner1.setAttribute('aria-label', 'Default select example');
  const DefaultProjectOption = document.createElement('option');
  DefaultProjectOption.innerText = 'Project';
  formSelectInner1.appendChild(DefaultProjectOption);
  projects.forEach((project) => {
    if (projects !== []) {
      const ProjectOption = document.createElement('option');
      ProjectOption.innerText = project.name;
      formSelectInner1.appendChild(ProjectOption);
    }
  });
  formSelect1.appendChild(formSelectInner1);

  const formSelect2 = document.createElement('div');
  formSelect2.className = 'mb-3';
  const formSelectInner2 = document.createElement('select');
  formSelectInner2.className = 'form-select priority-select w-100 py-1';
  formSelectInner2.setAttribute('aria-label', 'Default select example');
  const DefaultPriorityOption = document.createElement('option');
  DefaultPriorityOption.innerText = 'Priority';

  const PriorityOption1 = document.createElement('option');
  PriorityOption1.innerText = 'Important';

  const PriorityOption2 = document.createElement('option');
  PriorityOption2.innerText = 'High';

  const PriorityOption3 = document.createElement('option');
  PriorityOption3.innerText = 'Normal';
  formSelectInner2.appendChild(DefaultPriorityOption);
  formSelectInner2.appendChild(PriorityOption1);
  formSelectInner2.appendChild(PriorityOption2);
  formSelectInner2.appendChild(PriorityOption3);
  formSelect2.appendChild(formSelectInner2);


  const todoActionBtns = document.createElement('div');
  todoActionBtns.className = 'text-center todo-action-btns';
  console.log(todoActionBtns);
  const todoSubmitBtn = document.createElement('button');
  todoSubmitBtn.type = 'submit';
  todoSubmitBtn.className = 'btn btn-primary todo-submit';
  todoSubmitBtn.innerText = 'Submit';

  const todoCancelBtn = document.createElement('button');
  todoCancelBtn.className = 'btn btn-primary todo-cancel';
  todoCancelBtn.innerText = 'Cancel';

  todoActionBtns.appendChild(todoSubmitBtn);

  todoActionBtns.appendChild(todoCancelBtn);

  todoForm.appendChild(formInput1);
  todoForm.appendChild(formInput2);
  todoForm.appendChild(formSelect1);
  todoForm.appendChild(formSelect2);
  todoForm.appendChild(todoActionBtns);
  hover.appendChild(todoForm);
  hoveringPopup.appendChild(hover);
  body.prepend(hoveringPopup);
}

export function removeTodoPopup() {
  const popup = document.querySelector('.hovering-popup-container');
  popup.parentNode.removeChild(popup);
}

export function addPopupListeners() {
  const todoActionBtns = document.querySelector('.todo-action-btns');
  console.log(todoActionBtns);
  todoActionBtns.addEventListener('click', (e) => {
    const elMain = document.querySelector('main');
    const hoveringPopup = document.querySelector('.hovering-popup-container');
    if (e.target.classList.contains('todo-submit')) {
      const todoTitle = document.querySelector('.hover form #todo-input');
      const todoDate = document.querySelector('.hover form #due-date-input');
      const todoProjectSelect = document.querySelector('.hover form .project-select');
      const todoPrioritySelect = document.querySelector('.hover form .priority-select');
      const getProject = (projectSelect, projects) => {
        for (let i = 0; i < projects.length; i++) {
          if (projects[i].name === projectSelect) {
            return projects[i];
          }
        }
      };
      const newTodo = createTodo(getProject(todoProjectSelect.value, projects), todoTitle.value, '', todoDate.value, todoPrioritySelect.value);
      removeTodoPopup();
      elMain.classList.remove('dimmed');
      const newElement = todoActionBtns.cloneNode(true);
      todoActionBtns.parentNode.replaceChild(newElement, todoActionBtns);
    } else if (e.target.classList.contains('todo-cancel')) {
      removeTodoPopup();
      elMain.classList.remove('dimmed');
      const newElement = todoActionBtns.cloneNode(true);
      todoActionBtns.parentNode.replaceChild(newElement, todoActionBtns);
    }
  });
}

export function TodoHover() {
  const createTodoBtn = document.querySelector('.create-todo-btn');
  createTodoBtn.addEventListener('click', () => {
    if (!document.querySelector('.hovering-popup-container')) {
      createTodoPopup(projects);
      addPopupListeners();
      const elMain = document.querySelector('main');
      elMain.classList.add('dimmed');
    }
  });
}
