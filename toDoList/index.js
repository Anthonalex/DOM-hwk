const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".main-input");
const todoContainer = document.querySelector(".todo-list");
const clearAllBtn = document.querySelector(".clear-btn");

addBtn.addEventListener("click", () => {
  const validText = input.value.trim();
  const div = document.createElement("div");
  const todoElem = document.createElement("input");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  if (validText) {
    todoElem.className += " added-todo-input main-input";
    editBtn.className += " edit-btn";
    delBtn.className += " del-btn";

    editBtn.textContent = "edit";
    delBtn.textContent = "x";

    todoElem.value = validText;

    div.append(...[todoElem, editBtn, delBtn]);
    todoContainer.append(div);

    editBtn.addEventListener("click", (event) => {
      todoElem.focus();
    });

    delBtn.addEventListener("click", () => {
      div.innerHTML = "";
    });
  }
  input.value = "";
});

clearAllBtn.addEventListener("click", () => {
  todoContainer.innerHTML = "";
});
