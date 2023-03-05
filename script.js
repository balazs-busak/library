let myLibrary = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.info = function() {
        console.log(title, 'by', author, pageNum, 'pages', read)
    };
};

// const TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// TheHobbit.info();

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
    console.log(myLibrary);
};




