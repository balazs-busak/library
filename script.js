let cardContainer = document.querySelector(".card-container");
let myLibrary = [];
let button = document.getElementById("info");
let myDiv = document.querySelector(".input-form");

function show() {
    myDiv.style.visibility = "visible";
}

function hide() {
    myDiv.style.visibility = "hidden";
}

function toggle() {
    if (myDiv.style.visibility === "hidden") {
        show();
    } else {
        hide();
    }
}

hide();

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
};

// Call the function to create the cards
createCards();