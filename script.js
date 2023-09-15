let taskList = document.getElementById("taskList");
let addTask = document.getElementById("addTask");
let addContainer = document.getElementById("addContainer");
let itemID = 0;

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
  let button = document.createElement("button");

  if (addTask.value == "") {
    alert("[ERRO] Por favor, digite sua task!");
  } else {
    task.textContent = addTask.value;
    task.setAttribute("id", "task" + itemID);
    taskList.appendChild(task);

    button.textContent = "X";
    button.setAttribute("onclick", "removeTask(" + itemID + ")");
    task.appendChild(button);

    addTask.value = "";
    itemID++;

    if (addContainer.style.display == "block") {
      addContainer.style.display = "none";
    } else {
      addContainer.style.display = "block";
    }
  }
}

function removeTask(ID) {
  document.getElementById("task" + ID).remove();
}
