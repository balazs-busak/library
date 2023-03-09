let cardContainer = document.querySelector(".card-container");
let myLibrary = [];
let button = document.querySelector(".open-form");
let myDiv = document.querySelector(".input-form");

function openForm() {
  myDiv.style.display = "block";
}

function closeForm() {
  myDiv.style.display = "none";
}

button.addEventListener("click", toggle, false);

function createCards() {
  // reset divs, not to duplicate the existing ones
  cardContainer.innerHTML = "";
  // create new div elemnts with the object stored in myLibrary
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");

    card.className = "card";

    card.innerHTML = "<h3>" + myLibrary[i].title + "</h3><p>" + myLibrary[i].author + "</p><p>" + myLibrary[i].pageNum + "</p><p>" + myLibrary[i].read + "</p>";

    cardContainer.appendChild(card);
  }
}

function addBookToLibrary() {
  // get user input values from HTML form and push it to the array
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pageNum = document.getElementById("page-number").value;
  let read = document.getElementById("read").value;

  let newBook = {
    title: title,
    author: author,
    pageNum: pageNum,
    read: read
  };

  myLibrary.push(newBook);

  createCards();
  closeForm();
};

// Call the function to create the cards
createCards();