const todoList = ['do some research work', 'elaborate each part'];

let todoListHTML = '';

 (let i = 0; i < todoList.length; i++) {
  const todo = todoList [i];
  const html = `<p>${todoList}</p>`
  todoListHTML += html;
  todoList.push(todoListHTML)
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);

  console.log(todoList);
  
  inputElement.value = ''
}

document.querySelector('.todo-line')
  .innerHTML = ;