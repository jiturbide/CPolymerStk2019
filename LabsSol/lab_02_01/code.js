window.addEventListener("load", function() {
  var listElement = document.getElementById("personList");
document.getElementById("addTip").addEventListener("click", function() {
  var newElement = listElement.getElementsByTagName("li")[0].cloneNode(true);
  var removeButton = document.createElement("input");
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("value", "remove");
  removeButton.addEventListener("click", function() {
    listElement.removeChild(newElement);
  });
  newElement.appendChild(removeButton);
  listElement.appendChild(newElement);
});
  document.getElementById("calculateButton").addEventListener("click", function() {
    var outputElem = document.getElementById("outputDiv");
    var result = [];
    var personElements = listElement.getElementsByTagName("li");
    var totalAge = 0;
    for (i = 0; i < personElements.length; i++) {
      var inputElements = personElements[i].getElementsByTagName("input");
      var person = new Person();
      for (j = 0; j < inputElements.length; j++) {
        if (inputElements[j].name === "name") {
          person.name = inputElements[j].value;
        }
        if (inputElements[j].name === "age") {
          person.age = parseInt(inputElements[j].value);
          totalAge += person.age;
        }
      }
      result.push(person);
    }
    var billValue = parseFloat(document.getElementById("billTotal").value);
    var tipPercent = parseInt(document.getElementById("tipPercent").value);
    var totalBill = billValue + (billValue * (tipPercent / 100));
    var partialBill = totalBill / totalAge;
    for (i = 0; i < result.length; i++) {
      result[i].bill = partialBill * result[i].age;
    }
    outputElem.innerHTML = result.join("<br>");
  });
});

function removePerson(element) {
  element.parent.remove();
}

function Person() {
  this.name = "";
  this.age = 1;
  this.bill = 0;
}

Person.prototype.toString = function() {
  var billString = this.bill.toLocaleString("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2});
  return this.name + "[" + this.age + "] pays " + billString;
};