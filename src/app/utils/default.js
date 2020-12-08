export const loadDefault = () => {
  // create side bar
  const elMain = document.querySelector('main');
  const sideBar = document.createElement('div');
  sideBar.className = 'side-bar col-3 col-lg-2 m-0 p-0';
  const projectDisplay = document.createElement('div');
  projectDisplay.className = 'list-group project-display';
  const projectBtn = document.createElement('button');
  projectBtn.className = 'btn btn-primary btn-lg py-4 project-button';
  projectBtn.innerText = 'Create a Project'
  projectDisplay.appendChild(projectBtn);
  sideBar.appendChild(projectDisplay);
  elMain.appendChild(sideBar);
  
  // create app container
  const appContainer = document.createElement('div');
  appContainer.className = 'app-container col-9 col-lg-10 p-5';

  const appTitle = document.createElement('h1');
  appTitle.className = 'text-center text-primary app-title';
  appTitle.innerText = 'Todo List';

  const todoContainer = document.createElement('div');
  todoContainer.className = 'todo-container container shadow w-100 mt-5 p-0';

  const todoHeader = document.createElement('div');
  todoHeader.className = 'todo-header d-flex justify-content-between p-2';

  const todoProjectName = document.createElement('span');
  todoProjectName.className = 'todo-project-name h5 m-0 p-0';
  todoProjectName.innerText = 'Project name';

  const todoDueDate = document.createElement('span');
  todoDueDate.className = 'due-date h5 mr-5 m-0 p-0';
  todoDueDate.innerText = 'Due date';

  todoHeader.appendChild(todoProjectName);
  todoHeader.appendChild(todoDueDate);

  const todoDisplay = document.createElement('div');
  todoDisplay.className = 'todo-display';

  const createTodoBtn = document.createElement('a');
  createTodoBtn.className = 'create-todo-btn d-flex justify-content-start align-items-center p-2 text-decoration-none';
  createTodoBtn.href = '#';

  const plusIcon = document.createElement('span');
  plusIcon.className = 'fas fa-plus pb-0 mb-0 mr-2 plus-sign';

  const addTodoText = document.createElement('p');
  addTodoText.className = 'm-0';
  addTodoText.innerText = 'Add a todo';

  createTodoBtn.appendChild(plusIcon);
  createTodoBtn.appendChild(addTodoText);
  todoDisplay.appendChild(createTodoBtn);
  
  todoContainer.appendChild(todoHeader);
  todoContainer.appendChild(todoDisplay);

  appContainer.appendChild(appTitle);
  appContainer.appendChild(todoContainer);

  elMain.appendChild(appContainer);
}