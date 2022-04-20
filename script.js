const inputEL = document.querySelector(".input-item");
const itemList = document.querySelector(".item-list");
const trashEl = document.querySelector(".trash-el");
const footerText = document.querySelector(".footer-text");
const trash = document.querySelector(".trash-el");
const clearAll = document.querySelector(".clear-btn");
const listItem = document.querySelectorAll(".list-item");
const timer = document.querySelector(".timer");
const finishedTasks = document.querySelector('.completed-tasks');
const checkContainer = document.querySelector(".check-container")

var arr = [];
var itemsArray = [];
const completedTask = document.querySelector('.complete-btn')
let tasks = 0;
let date = new Date().toString();
timer.innerHTML = date.substring(0, 16) 

console.log(inputEL.value);
const btnEl = document.querySelector(".btn-el");

btnEl.addEventListener("click", () => {
  
  
  if (inputEL.value) {
    let list = document.createElement("li");
    list.className = "list-item";
    list.innerHTML = inputEL.value;
    itemsArray.push(inputEL.value);
    itemList.append(list);
    
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "trash-el";
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    list.append(deleteBtn);

    let checkBtn = document.createElement("input");
    checkBtn.type='checkbox'
    checkBtn.className = "check-el";
    list.append(checkBtn);
    tasks++;
    inputEL.value = " ";
    let current_task = document.querySelectorAll(".trash-el");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
        tasks--;
      };
    }
  }
});

completedTask.addEventListener('click' , () => {
  finishedTasks.innerHTML = " "
  arr = [];
  let check_task = document.querySelectorAll('.check-el');
  for(var i=0; i<check_task.length; i++){
    if(check_task[i].checked) {
      arr.push(check_task[i].parentElement.innerText)
    }
  }
  for(var i=0; i<arr.length; i++){
    let list = document.createElement("li");
    list.className = "list-item";
    list.innerHTML = arr[i];
    finishedTasks.append(list);
  }
  
  
})

