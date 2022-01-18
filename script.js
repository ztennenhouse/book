var button = document.querySelector(".addBookButton");
var form = document.querySelector("#addBookForm");
var formSubmit = document.querySelector("#submitButton")
var grid = document.querySelector(".grid");



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

    function addBookToLibrary() {
        var inputTitle = document.getElementById('bookTitle').value;
        var inputAuthor = document.getElementById('author').value;
        var inputPages = document.getElementById('pages').value;
        var inputRead = document.getElementById('read').value;


        myLibrary.push(new Book(inputTitle, inputAuthor, inputPages, inputRead));
        displayBooks();
        clearSubmission();
    }

    function displayBooks() {
        const books = document.querySelectorAll('.book');
        books.forEach(book => grid.removeChild(book));
        for (let i=0; i < myLibrary.length; i++) {
            createBook(myLibrary[i]);
        }
        }
    function createBook(num) {
         bookDiv = document.createElement('div');
         titleDiv = document.createElement('div');
         authorDiv = document.createElement('div');
         pagesDiv = document.createElement('div');
         readDiv = document.createElement('div');

        bookDiv.classList.add('book');
        bookDiv.setAttribute('id', myLibrary.indexOf(num));
        grid.appendChild(bookDiv);

        // add title div
        titleDiv.textContent = num.title;
        titleDiv.classList.add('title');
        bookDiv.appendChild(titleDiv);

        // add author div
        authorDiv.textContent = num.author;
        authorDiv.classList.add('author');
        bookDiv.appendChild(authorDiv);

        // add pages div
        pagesDiv.textContent = num.pages;
        pagesDiv.classList.add('pages');
        bookDiv.appendChild(pagesDiv);


    }


    function openForm() {
        form.style.display = 'block';
    }

function clearSubmission() {
    form.style.display = 'none';
    document.getElementById('bookTitle').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";

}


button.addEventListener('click', openForm);
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = "lightgrey";
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = "lightblue";
});
formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
});
