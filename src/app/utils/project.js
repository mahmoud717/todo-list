
export default class Project {
  constructor(name) {
    this.name = name;
    this.projectStore = [];
  }
}

export const projects = [];

export const createProject = (name, projects) => {
  const newProject = new Project(name);
  projects.push(newProject);
  return newProject;
};

export const showProjectTodo = (project) => {
  const todoDisplay = document.querySelector('.todo-display');
  todoDisplay.innerHTML = '';
  project.projectStore.forEach((todo) => {
    const newTodo = document.createElement('div');
    newTodo.className = 'todo d-flex justify-content-between p-2';
    const todoLeft = document.createElement('div');
    todoLeft.className = 'todo-left';
    const todoCheck = document.createElement('input');
    todoCheck.type = 'checkbox';
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
    const todoEdit = document.createElement('button');
    todoEdit.className = 'fas fa-edit edit-btn';

    const todoDelete = document.createElement('button');
    todoDelete.className = 'fas fa-trash delete-btn';
    todoRight.appendChild(todoSpan);
    todoRight.appendChild(todoEdit);
    todoRight.appendChild(todoDelete);

    newTodo.appendChild(todoLeft);
    newTodo.appendChild(todoRight);

    newTodo.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.classList.contains('edit-btn')) {
        todo.todoEdit();
      } else if (e.target.classList.contains('delete-btn')) {
        console.log('delete');
        todo.todoDelete(project, todo);
      }
    });

    todoDisplay.appendChild(newTodo);
  });
};


export const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display');
  projects.forEach((project) => {
    const newProject = document.createElement('a');
    newProject.href = '#';
    newProject.className = 'list-group-item list-group-item-action py-4 project h4';

    const projectContent = document.createElement('span');
    projectContent.className = 'project-content';
    projectContent.innerText = project.name;

    const projectElements = document.createElement('span');
    projectElements.className = 'project-todo-number';
    projectElements.innerText = 0;

    newProject.appendChild(projectContent);
    newProject.appendChild(projectElements);
    newProject.addEventListener('click', () => {
      showProjectTodo(project);
    });
    projectDisplay.prepend(newProject);
  });
};