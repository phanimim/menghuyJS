const container = document.querySelector(".todolist-wrapper");
const countTask = document.querySelector(".count-item");

document.addEventListener("DOMContentLoaded", function(){
    const addBtn = document.querySelector(".add");
    const ul = document.createElement("ul");
    ul.className="list-container";
    container.insertBefore(ul, countTask);
    addBtn.addEventListener("click", addTask);
    ul.addEventListener("click", handleTask);
    showTaskCount();
    displayData();
});

function addTask(event){
    event.preventDefault();
    const ul = document.querySelector(".list-container")
    const newTask = document.querySelector(".user-input");
    const inputTrim = newTask.value.trim();

    if(!inputTrim){
        alert("Add task");
    } else{
        const li = document.createElement("li");
        li.innerHTML = `${newTask.value}<i class="fa-solid fa-circle-xmark"></i>`;
        ul.appendChild(li);
    }
    newTask.value = "";
    showTaskCount();
    handleData();

};

// conplete
function handleTask (event){
    if(event.target.tagName === "I"){
       event.target.parentElement.remove();
       showTaskCount();
       handleData();
       console.log(showTaskCount);
    }
    if(event.target.tagName === "LI"){
       event.target.classList.toggle("completed");
       handleData();
    }
};

// clear all task
function clearAllTask(){
    const ul = document.querySelector(".list-container");
    ul.innerHTML = "";
    showTaskCount();
    handleData();
};

// count task
function showTaskCount(){
    const taskCounts = document.querySelector(".list-container").childElementCount;
    countTask.textContent =  
    `There ${taskCounts >1 ? "are" : "is"} 
    ${taskCounts >0 ? taskCounts : "no"} task${taskCounts > 1 ? "s":""}.`;
};

showTaskCount();


// add data
function handleData(){
    const ul = document.querySelector(".list-container");
    localStorage.setItem("data", ul.innerHTML);
};

//display data (UL)
function displayData(){
    const ul = document.querySelector(".list-container");
    ul.innerHTML = localStorage.getItem("data");
};

// Default parameter
const print = (name = "Phanim")=>console.log(name);
print();


// Array destructor
const [phone1, iphone, Samsung, pixel] = phone;
console.log(phone1, iphone, Samsung, pixel);
