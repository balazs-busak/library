let cardContainer = document.querySelector(".card-container");
let addBtn = document.querySelector(".open-form");
let myDiv = document.querySelector(".input-form");
let myLibrary = [];

function openForm() {
  myDiv.style.display = "block";
}

function closeForm() {
  myDiv.style.display = "none";
}

addBtn.addEventListener("click", openForm, false);

function createCards() {
  cardContainer.innerHTML = "";
  // create new div elements with the object stored in myLibrary
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");

    let readStatus = myLibrary[i].read ? "Yes" : "No";

    card.className = "card";

    card.innerHTML = "<h3>" + myLibrary[i].title + "</h3><p>" + myLibrary[i].author + "</p><p>" + myLibrary[i].pageNum + "</p><button class='read-status-button'>" + readStatus + "</button><button class='remove-button'> Remove </button>";

    cardContainer.appendChild(card);

    // event listener created to remove card with button click
    let removeButton = card.querySelector(".remove-button");
    removeButton.addEventListener("click", function() {
      myLibrary.splice(i, 1);
      // call function so it displays the updated myLibrary array length.
      createCards(); 
    });

    // event listener created to toggle read status with button click
    let readStatusButton = card.querySelector(".read-status-button");
    readStatusButton.addEventListener("click", function() {
      myLibrary[i].read = !myLibrary[i].read;
      let newReadStatus = myLibrary[i].read ? "Yes" : "No";
      readStatusButton.textContent = newReadStatus;
    });
  }
}



function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  createCards();
}

function addBookToLibrary() {
  // get user input values from HTML form and push it to the array
  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let pageNum = document.getElementById("page-number").value.trim();
  let readCheck = document.getElementById("read");

  if (!title || !author || !pageNum) {
    alert("Please fill in all required fields");
    return;
  }

  let readStatus = readCheck.checked;

  let newBook = {
    title: title,
    author: author,
    pageNum: pageNum,
    read: readStatus
  };

  myLibrary.push(newBook);

  createCards();
  closeForm();
  //reset checkbox value when new object is added
  readCheck.checked = false;
};

// Call the function to create the cards
createCards();
