/* eslint-disable import/no-cycle */
import { ProjectHover } from './popups';
import { todoChecked, todoDeleted } from './todo';
import { projects } from './project';

export const showProjectTodo = (project) => {
  const todoProjectName = document.querySelector('.todo-project-name');
  todoProjectName.innerText = project.name.charAt(0).toUpperCase() + project.name.slice(1);
  const todoDisplay = document.querySelector('.todo-display');
  todoDisplay.innerHTML = '';
  project.projectStore.forEach((todo) => {
    const newTodo = document.createElement('div');
    if (todo.priority === 'Important') {
      newTodo.className = 'todo important d-flex justify-content-between p-2';
    } else if (todo.priority === 'High') {
      newTodo.className = 'todo high d-flex justify-content-between p-2';
    } else {
      newTodo.className = 'todo normal d-flex justify-content-between p-2';
    }

    const todoLeft = document.createElement('div');
    todoLeft.className = 'todo-left';
    const todoCheck = document.createElement('input');
    todoCheck.type = 'checkbox';
    if (todo.checked === true) {
      todoCheck.checked = true;
      newTodo.classList.add('done');
    }
    todoCheck.name = 'todo';
    const todoTitle = document.createElement('span');
    todoTitle.className = 'ml-2 p-0';
    todoTitle.innerText = todo.title;

    todoLeft.appendChild(todoCheck);
    todoLeft.appendChild(todoTitle);

    const todoRight = document.createElement('div');
    todoRight.className = 'todo-right';
    const todoSpan = document.createElement('span');
    todoSpan.innerText = todo.dueDate;

    const todoDelete = document.createElement('button');
    todoDelete.className = 'fas fa-trash delete-btn ml-4';
    todoRight.appendChild(todoSpan);

    todoRight.appendChild(todoDelete);

    newTodo.appendChild(todoLeft);
    newTodo.appendChild(todoRight);

    newTodo.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        todoDeleted(todo, project);
        showProjectTodo(project);
      } else if (e.target.type === 'checkbox') {
        if (todo.checked === false) {
          todoChecked(todo, true);
          newTodo.classList.add('done');
        } else {
          todoChecked(todo, false);
          newTodo.classList.remove('done');
        }
      }
    });

    todoDisplay.appendChild(newTodo);
  });
};


export const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display');
  projectDisplay.innerHTML = '';
  projects.forEach((project) => {
    const newProject = document.createElement('a');
    newProject.href = '#';
    newProject.className = 'list-group-item list-group-item-action py-4 project h4';

    const projectContent = document.createElement('span');
    projectContent.className = 'project-content h5';
    projectContent.innerText = project.name.charAt(0).toUpperCase() + project.name.slice(1);

    const projectElements = document.createElement('span');
    projectElements.className = 'project-todo-number';
    projectElements.innerText = project.projectStore.length;

    newProject.appendChild(projectContent);
    newProject.appendChild(projectElements);
    newProject.addEventListener('click', () => {
      showProjectTodo(project);
    });
    projectDisplay.prepend(newProject);
  });
  const projectBtn = document.createElement('button');
  projectBtn.className = 'btn btn-primary btn-lg py-4 project-button';
  projectBtn.innerText = 'Create a Project';
  projectDisplay.appendChild(projectBtn);
  ProjectHover();
};