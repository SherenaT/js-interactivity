"use strict";
console.log("hello JS");

let message = document.querySelector("#message");

function deleteMovie(event) {
  event.target.parentNode.remove("movie");
  message.textContent =
    event.target.parentNode.firstChild.textContent + " deleted!";
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = event.target.textContent + " watched!";
  } else {
    message.textContent = event.target.textContent + " added back!";
  }
  revealMessage();
}

function revealMessage() {
  message.classList.remove("hide");
  //remove class of hide before time out starts(which makes message visible)
  setTimeout(function () {
    message.classList.add("hide");
  }, 1000);
  //create time out function that adds class hide for 1000 mili sec(adding class time out makes message hidden)
}

function addMovie(event) {
  event.preventDefault();

  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  let ul = document.querySelector("ul");

  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  ul.appendChild(movie);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  movie.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleteMovie);

  document.querySelector("form").reset();
}

let button = document.querySelector("button");
button.addEventListener("click", addMovie);
