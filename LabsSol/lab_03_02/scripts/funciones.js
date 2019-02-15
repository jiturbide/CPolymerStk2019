function Contacto(nombre, edad, email, id) {
  return {
    nombre : nombre,
    edad : edad,
    email : email,
    id : 0.
    toString : function() {
      return 'nombre: ' + this.nombre + ' email: ' + this.email;
    }
}

var allContactos = [];
var lastId = 0;

window.addEventListener("load", function() {
  //Get from local storage JSON.
  var loadedContactos = JSON.parse(localStorage.getItem("contactos"));
  if (!loadedContactos) {
    loadedContactos = [];
  }
  for (i = 0; i < loadedContactos.length; i++) {
    agregarContacto(loadedContactos[i]);
  }
  var btnAgregar = document.getElementById("btnAgregar");

  btnAgregar.addEventListener("click", function() {
    var txtNombre = document.getElementById("txtNombre");
    var txtEdad = document.getElementById("txtEdad");
    var txtEmail = document.getElementById("txtEmail");
    var c = new Contacto(txtNombre.value, txtEdad.value, txtEmail.value);
    agregarContacto(c);
    txtNombre.value = "";
    txtEdad.value = "";
    txtEmail.value = "";
  });
  /* * /
  var removeCompletedButton = document.getElementById("removeCompleted");
  removeCompletedButton.addEventListener("click", function() {
    var taskToRemove = [];
    for (i = 0; i < allContactos.length; i++) {
      if (allContactos[i].done) {
        taskToRemove.push(allContactos[i]);
      }
    }
    for (j = 0; j < taskToRemove.length; j++) {
      removeTask(taskToRemove[j]);
    }
  });
  /* */
});

function agregarContacto(contacto) {
  allContactos.push(contacto);
  contacto.id = lastId++;
  var lstContactos = document.getElementById("lstContactos");

  var node = document.createElement("li");
  node.setAttribute("id", "contacto" + contacto.id);

/* * /
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

  var txtRegistro = document.createElement("input");
  txtRegistro.setAttribute("type", "text");
  txtRegistro.setAttribute("value", );
  taskNode.appendChild(txtRegistro);
  /* */

  var text = document.createTextNode(task.title);
  node.appendChild(text);

  var deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Borrar");
  deleteButton.addEventListener("click", function() {
    //removeTask(task);
    //save();
  });
  taskNode.appendChild(deleteButton);

  listContainer.appendChild(taskNode);
  //save();
}
/* * /
function removeTask(task) {
  var listContainer = document.getElementById("toDoList");
  var taskNode = document.getElementById("task" + task.id);
  for (index = 0; index < allContactos.length; index++) {
    if (allContactos[index] === task) {
      allContactos.splice(index, 1);
      break;
    }
  }
  listContainer.removeChild(taskNode);
  save();
}
/* */

function save() {
  localStorage.setItem("contactos", JSON.stringify(allContactos));
}
