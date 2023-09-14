let taskList = document.getElementById("taskList");
let addTask = document.getElementById("addTask");
let addContainer = document.getElementById("addContainer");
addContainer.style.display = "none";

function openAdd() {
  if (addContainer.style.display == "none") {
    addContainer.style.display = "block";
  } else {
    addContainer.style.display = "none";
  }
}

function cancelTask() {
  addTask.value = "";

  if (addContainer.style.display == "block") {
    addContainer.style.display = "none";
  } else {
    addContainer.style.display = "block";
  }
}

function saveTask() {
  let task = document.createElement("li");

  task.textContent = addTask.value;
  taskList.appendChild(task);

  addTask.value = "";

  if (addContainer.style.display == "block") {
    addContainer.style.display = "none";
  } else {
    addContainer.style.display = "block";
  }
}
