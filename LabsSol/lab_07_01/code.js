var content;
window.addEventListener("load", function() {
  content = document.getElementById("content");
  loadList();
});

function showRestaurants(restaurants) {
  var listContainer = document.createElement("ul");
  for (i = 0; i < restaurants.length; i++) {
    var restaurant = restaurants[i];
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.appendChild(document.createTextNode(restaurant.name));
    link.setAttribute("href", "#");
    (function(id) {
      link.addEventListener("click", function() {
        loadRestaurant(id);
      });
    }(restaurant));
    listItem.appendChild(link);
    listContainer.appendChild(listItem);
  }
  clearContent();
  content.appendChild(listContainer);
}

function showRestaurant(restaurant) {
  var container = document.createElement("div");
  var backButton = document.createElement("input");
  backButton.setAttribute("type", "button");
  backButton.setAttribute("value", "back");
  backButton.addEventListener("click", function() {
    loadList();
  });
  container.appendChild(backButton);
  container.appendChild(document.createElement("br"));
  var header = document.createElement("h1");
  header.appendChild(document.createTextNode(restaurant.name));
  container.appendChild(header);

  var listContainer = document.createElement("ul");
  for (i = 0; i < restaurant.reviews.length; i++) {
    var review = restaurant.reviews[i];
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(review.rating));
    listItem.appendChild(document.createTextNode(" - "));
    listItem.appendChild(document.createTextNode(review.text));
    var removeButton = document.createElement("input");
    removeButton.setAttribute("value", "remove");
    removeButton.setAttribute("type", "button");
    (function(reviewCopy) {
      removeButton.addEventListener("click", function() {
        removeReview(restaurant, reviewCopy);
      });
    })(review);
    listItem.appendChild(removeButton);
    listContainer.appendChild(listItem);
  }
  container.appendChild(listContainer);

  var addReviewDiv = document.createElement("div");
  var addReviewText = document.createElement("input");
  addReviewDiv.appendChild(document.createTextNode("Review:"));
  addReviewDiv.appendChild(addReviewText);
  addReviewDiv.appendChild(document.createElement("br"));
  var addReviewRating = document.createElement("select");
  addReviewRating.appendChild(createOption("1", 1));
  addReviewRating.appendChild(createOption("2", 2));
  addReviewRating.appendChild(createOption("3", 3));
  addReviewRating.appendChild(createOption("4", 4));
  addReviewRating.appendChild(createOption("5", 5));
  addReviewDiv.appendChild(document.createTextNode("Rating:"));
  addReviewDiv.appendChild(addReviewRating);
  addReviewDiv.appendChild(document.createElement("br"));
  var addReviewButton = document.createElement("input");
  addReviewButton.setAttribute("type", "button");
  addReviewButton.setAttribute("value", "add");
  addReviewButton.addEventListener("click", function() {
    addReview(restaurant, addReviewText.value, addReviewRating.value);
  });
  addReviewDiv.appendChild(addReviewButton);


  container.appendChild(addReviewDiv);

  clearContent();
  content.appendChild(container);
}
function createOption(value, label) {
  var option = document.createElement("option");
  option.setAttribute("value", value);
  option.appendChild(document.createTextNode(label));
  return option;
}

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function loadList() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://localhost:8080/JSConsole/rest/restaurants", true);
  xmlhttp.onload = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var restaurants = JSON.parse(xmlhttp.responseText);
      showRestaurants(restaurants);
    }
  };
  xmlhttp.send();
}

function loadRestaurant(restaurant) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://localhost:8080/JSConsole/rest/restaurants/" + restaurant.id, true);
  xmlhttp.onload = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var restaurant = JSON.parse(xmlhttp.responseText);
      showRestaurant(restaurant);
    }
  };
  xmlhttp.send();
}

function addReview(restaurant, text, rating) {
  var review = {
    'text': text,
    'rating': rating
  };
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://localhost:8080/JSConsole/rest/restaurants/" + restaurant.id, true);
  xmlhttp.onload = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 204) {
      loadRestaurant(restaurant);
    }
  };
  xmlhttp.setRequestHeader("content-type", "application/json");
  xmlhttp.send(JSON.stringify(review));
}

function removeReview(restaurant, review) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("DELETE", "http://localhost:8080/JSConsole/rest/restaurants/" + restaurant.id + "/" + review.id, true);
  xmlhttp.onload = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 204) {
      loadRestaurant(restaurant);
    }
  };
  xmlhttp.send();
}
