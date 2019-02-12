function Task(title) {
  this.title = title;
  this.done = false;
  this.id = 0;
}

var allTasks = [];
var lastId = 0;

window.addEventListener("load", function() {
  //Get from local storage JSON.
  var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!loadedTasks) {
    loadedTasks = [];
  }
  for (i = 0; i < loadedTasks.length; i++) {
    addTask(loadedTasks[i]);
  }
  var addNewButton = document.getElementById("addNew");
  addNewButton.addEventListener("click", function() {
    var titleInput = document.getElementById("taskTitle");
    var task = new Task(titleInput.value);
    addTask(task);
    titleInput.value = "";
  });
  var removeCompletedButton = document.getElementById("removeCompleted");
  removeCompletedButton.addEventListener("click", function() {
    var taskToRemove = [];
    for (i = 0; i < allTasks.length; i++) {
      if (allTasks[i].done) {
        taskToRemove.push(allTasks[i]);
      }
    }
    for (j = 0; j < taskToRemove.length; j++) {
      removeTask(taskToRemove[j]);
    }
  });
});

function addTask(task) {
  allTasks.push(task);
  task.id = lastId++;
  var listContainer = document.getElementById("toDoList");

  var taskNode = document.createElement("li");
  taskNode.setAttribute("id", "task" + task.id);

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (task.done) {
    checkbox.setAttribute("checked", "checked");
  }
  checkbox.addEventListener("change", function() {
    task.done = !task.done;
    if (task.done) {
      checkbox.setAttribute("checked", "checked");
    } else {
      checkbox.removeAttribute("checked");
    }
    save();
  });
  taskNode.appendChild(checkbox);

  var text = document.createTextNode(task.title);
  taskNode.appendChild(text);

  var deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Remove");
  deleteButton.addEventListener("click", function() {
    removeTask(task);
    save();
  });
  taskNode.appendChild(deleteButton);

  listContainer.appendChild(taskNode);
  save();
}

function removeTask(task) {
  var listContainer = document.getElementById("toDoList");
  var taskNode = document.getElementById("task" + task.id);
  for (index = 0; index < allTasks.length; index++) {
    if (allTasks[index] === task) {
      allTasks.splice(index, 1);
      break;
    }
  }
  listContainer.removeChild(taskNode);
  save();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}
