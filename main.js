/*
1 - crear todos os elementos en js
2 - crear un event para escutar o texto digitado no input
2 - crear un arry para armazenar o texto digitado
3 - crear un evento para mostrar o texto do array quando clicar no button
4 -  mostrar o valor do li na tela

 */

const input = document.querySelector("#add-task");
const btnAddTask = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const inicialText = document.createElement ("p")
const finalText = document.createElement ("p")
const text = document.querySelector ("#text")
const liContainer = document.querySelector(".li-container")
const emptyDiv = document.querySelector(".empty")
inicialText.textContent = "Add tasks to get started"
inicialText.classList.add("p")
liContainer.appendChild(inicialText)

finalText.textContent = "All tasks completed"
finalText.classList.add("remove")
liContainer.appendChild(finalText)

const takslist = [];

const checkAllTasks = () => {
    if (ul.childNodes.length === 0){
      finalText.classList.remove("remove")
      finalText.classList.add("p")
       
    }
};

const addTask = (event) => {
  event.preventDefault();
  inicialText.classList.add("remove")
  finalText.classList.add("remove")
 
  const inputValue = input.value.trim()
  if (inputValue === ""){
    text.innerHTML = "Add a task"
   } else {
    text.innerHTML = ""

  const li = document.createElement("li");
  li.classList.add("li-text");
  ul.appendChild(li);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox")
  checkbox.setAttribute("value", "completed");
  li.appendChild(checkbox);

  const newTask = document.createElement("label");
  li.appendChild(newTask);
  newTask.textContent = takslist[takslist.length - 1];

  const button = document.createElement("button");
  button.textContent = "X";
  button.classList.add("button", "btn-delete");
  li.appendChild(button);

  const removeTask = () => {
    li.remove();
    checkAllTasks();
    console.log(ul.childNodes.length)
    
   };

  const handleCheckbox = (event) => {
    const checkboxValue = event.target.checked;
    if (checkboxValue) {
      newTask.classList.add("done");
    } else {
      newTask.classList.remove("done");
      newTask.classList.add("pendent");
    }
  };

  input.value = ""

  button.addEventListener("click", removeTask);
  checkbox.addEventListener("click", handleCheckbox);
}
};

const handleInput = (event) => {
  event.preventDefault();
  const inputValue = event.target.value;
  takslist.push(inputValue);
  console.log(takslist);
  
};

btnAddTask.addEventListener("click", addTask);
input.addEventListener("change", handleInput);


const clearAll = document.createElement("button")
clearAll.textContent = "Delete all tasks"
emptyDiv.appendChild(clearAll)
clearAll.classList.add("btn-delete-all")

const handleClearAll = ()=>{
  ul.textContent = ""
}

clearAll.addEventListener("click", handleClearAll)


