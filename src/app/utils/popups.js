/* eslint-disable import/no-cycle */
// import {
//   showProjectTodo, showProjects,
// } from './data';
// import { projects, createProject } from './project';
// import createTodo from './todo';


const dataFile = require('./data');
const projectFile = require('./project');

const todoFile = require('./todo');

function removePopup() {
  const popup = document.querySelector('.hovering-popup-container');
  popup.parentNode.removeChild(popup);
}

// todo popup


function createTodoPopup(projects, title = '', DueDate = '', priority = null, projectSelected = null) {
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
  todoInput.value = title;
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
  todoDate.value = DueDate;
  formInput2.appendChild(todoDateLabel);
  formInput2.appendChild(todoDate);

  const formSelect1 = document.createElement('div');
  formSelect1.className = 'mb-3';
  const formSelect1Label = document.createElement('label');
  formSelect1Label.innerText = 'Project';
  const formSelectInner1 = document.createElement('select');
  formSelectInner1.className = 'form-select project-select w-100 py-1';
  formSelectInner1.setAttribute('aria-label', 'Default select example');
  projects.forEach((Project, index) => {
    if (projects !== []) {
      const ProjectOption = document.createElement('option');
      ProjectOption.innerText = Project.name;
      if (Project.innerText === projectSelected) {
        formSelectInner1.selectedIndex = index;
      }formSelectInner1.appendChild(ProjectOption);
    }
  });
  formSelect1.appendChild(formSelect1Label);
  formSelect1.appendChild(formSelectInner1);

  const formSelect2 = document.createElement('div');
  formSelect2.className = 'mb-3';
  const formSelect2Label = document.createElement('label');
  formSelect2Label.innerText = 'Priority';
  const formSelectInner2 = document.createElement('select');
  formSelectInner2.className = 'form-select priority-select w-100 py-1';
  formSelectInner2.setAttribute('aria-label', 'Default select example');

  const PriorityOption1 = document.createElement('option');
  PriorityOption1.innerText = 'Important';
  if (priority === 'Important') {
    formSelectInner2.selectedIndex = 1;
  }
  const PriorityOption2 = document.createElement('option');
  PriorityOption2.innerText = 'High';
  if (priority === 'High') {
    formSelectInner2.selectedIndex = 1;
  }
  const PriorityOption3 = document.createElement('option');
  PriorityOption3.innerText = 'Normal';
  if (priority === 'Normal') {
    formSelectInner2.selectedIndex = 1;
  }
  formSelectInner2.appendChild(PriorityOption1);
  formSelectInner2.appendChild(PriorityOption2);
  formSelectInner2.appendChild(PriorityOption3);
  formSelect2.appendChild(formSelect2Label);
  formSelect2.appendChild(formSelectInner2);


  const todoActionBtns = document.createElement('div');
  todoActionBtns.className = 'text-center todo-action-btns';
  const todoSubmitBtn = document.createElement('button');
  todoSubmitBtn.type = 'submit';
  todoSubmitBtn.className = 'btn btn-primary todo-submit';
  todoSubmitBtn.innerText = 'Submit';

  const todoCancelBtn = document.createElement('button');
  todoCancelBtn.className = 'btn ml-2 btn-danger todo-cancel';
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

function addTodoPopupListeners() {
  const todoActionBtns = document.querySelector('.todo-action-btns');
  todoActionBtns.addEventListener('click', (e) => {
    const elMain = document.querySelector('main');
    if (e.target.classList.contains('todo-submit')) {
      const todoTitle = document.querySelector('.hover form #todo-input');
      const todoDate = document.querySelector('.hover form #due-date-input');
      const todoProjectSelect = document.querySelector('.hover form .project-select');
      const todoPrioritySelect = document.querySelector('.hover form .priority-select');
      // eslint-disable-next-line consistent-return
      const getProject = (projectSelect, projects) => {
        for (let i = 0; i < projects.length; i += 1) {
          if (projects[i].name === projectSelect) {
            return projects[i];
          }
        }
      };
      todoFile.createTodo(getProject(todoProjectSelect.value, projectFile.projects), todoTitle.value, '', todoDate.value, todoPrioritySelect.value);
      removePopup();
      elMain.classList.remove('dimmed');
      dataFile.showProjectTodo(getProject(todoProjectSelect.value, projectFile.projects));
      dataFile.showProjects();
      const newElement = todoActionBtns.cloneNode(true);
      todoActionBtns.parentNode.replaceChild(newElement, todoActionBtns);
    } else if (e.target.classList.contains('todo-cancel')) {
      removePopup();
      elMain.classList.remove('dimmed');
      const newElement = todoActionBtns.cloneNode(true);
      todoActionBtns.parentNode.replaceChild(newElement, todoActionBtns);
    }
  });
}

function TodoHover() {
  const createTodoBtn = document.querySelector('.create-todo-btn');
  createTodoBtn.addEventListener('click', () => {
    if (!document.querySelector('.hovering-popup-container')) {
      createTodoPopup(projectFile.projects);
      addTodoPopupListeners();
      const elMain = document.querySelector('main');
      elMain.classList.add('dimmed');
    }
  });
}

//
// project popup

function createProjectPopup() {
  const body = document.querySelector('body');
  const hoveringPopup = document.createElement('div');
  hoveringPopup.className = 'hovering-popup-container p-5 d-flex';
  const hover = document.createElement('div');
  hover.className = 'hover d-flex align-items-center  shadow p-5';
  const projectForm = document.createElement('form');
  projectForm.className = 'd-flex justify-items-center w-100 flex-column h-100 project-form';

  const formInput = document.createElement('div');
  formInput.className = 'mb-3 ';
  const projectInputLabel = document.createElement('label');
  projectInputLabel.className = 'form-label';
  projectInputLabel.innerHTML = 'Project Title';
  projectInputLabel.setAttribute('for', 'project-input');
  const projectInput = document.createElement('input');
  projectInput.className = 'form-control';
  projectInput.type = 'text';
  projectInput.id = 'project-input';
  formInput.appendChild(projectInputLabel);
  formInput.appendChild(projectInput);


  const projectActionBtns = document.createElement('div');
  projectActionBtns.className = 'text-center project-action-btns';
  const projectSubmitBtn = document.createElement('button');
  projectSubmitBtn.type = 'submit';
  projectSubmitBtn.className = 'btn btn-primary project-submit';
  projectSubmitBtn.innerText = 'Submit';

  const projectCancelBtn = document.createElement('button');
  projectCancelBtn.className = 'btn ml-2 btn-danger project-cancel';
  projectCancelBtn.innerText = 'Cancel';

  projectActionBtns.appendChild(projectSubmitBtn);

  projectActionBtns.appendChild(projectCancelBtn);

  projectForm.appendChild(formInput);
  projectForm.appendChild(projectActionBtns);
  hover.appendChild(projectForm);
  hoveringPopup.appendChild(hover);
  body.prepend(hoveringPopup);
}


function addProjectPopupListeners() {
  const projectActionBtns = document.querySelector('.project-action-btns');
  projectActionBtns.addEventListener('click', (e) => {
    const elMain = document.querySelector('main');
    if (e.target.classList.contains('project-submit')) {
      const projectTitle = document.querySelector('.hover form #project-input');
      projectFile.createProject(projectTitle.value, projectFile.projects);
      removePopup();
      elMain.classList.remove('dimmed');

      dataFile.showProjects();
      const newElement = projectActionBtns.cloneNode(true);
      projectActionBtns.parentNode.replaceChild(newElement, projectActionBtns);
    } else if (e.target.classList.contains('project-cancel')) {
      removePopup();
      elMain.classList.remove('dimmed');
      const newElement = projectActionBtns.cloneNode(true);
      projectActionBtns.parentNode.replaceChild(newElement, projectActionBtns);
    }
  });
}


function ProjectHover() {
  const createProjectBtn = document.querySelector('.project-button');
  createProjectBtn.addEventListener('click', () => {
    if (!document.querySelector('.hovering-popup-container')) {
      createProjectPopup();
      addProjectPopupListeners();
      const elMain = document.querySelector('main');
      elMain.classList.add('dimmed');
    }
  });
}
module.exports.ProjectHover = ProjectHover;
module.exports.TodoHover = TodoHover;
