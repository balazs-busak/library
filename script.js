let cardContainer = document.querySelector(".card-container");
let myLibrary = [];

function createCards() {
  cardContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");

    card.className = "card";

    card.innerHTML = "<h3>" + myLibrary[i].title + "</h3><p>" + myLibrary[i].author + "</p><p>" + myLibrary[i].pageNum + "</p><p>" + myLibrary[i].read + "</p>";

    cardContainer.appendChild(card);
  }
}

function addBookToLibrary() {
  // get user input values from HTML form
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
};

// render initial cards
createCards();