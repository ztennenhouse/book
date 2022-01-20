var button = document.querySelector(".addBookButton");
var form = document.querySelector("#addBookForm");
var formSubmit = document.querySelector("#submitButton");
var grid = document.querySelector(".grid");
var readButton = document.querySelector(".readButton");

let formOpen = false;
let myLibrary = [];
let isRead = "Not read";

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
        var inputRead = document.getElementById('read');
        if (inputRead.checked === true) {
            isRead = "Read";
        } else {
            isRead = "Not Read";
        }

        myLibrary.push(new Book(inputTitle, inputAuthor, inputPages, isRead));
        displayBooks();
        clearSubmission();
    }

    function displayBooks() {
        const books = document.querySelectorAll('.book');
        books.forEach(book => grid.removeChild(book));
        for (var i=0; i < myLibrary.length; i++) {
            createBook(myLibrary[i]);
        }
        }
    function createBook(num) {
         deleteDiv = document.createElement('button');
         bookDiv = document.createElement('div');
         titleDiv = document.createElement('div');
         authorDiv = document.createElement('div');
         pagesDiv = document.createElement('div');
         readDiv = document.createElement('button');

        bookDiv.classList.add('book');
        bookDiv.setAttribute('id', "book" + myLibrary.indexOf(num));
        grid.appendChild(bookDiv);

        deleteDiv.textContent = "X";
        deleteDiv.classList.add('deleteButton');
        deleteDiv.setAttribute('id', "delete" + myLibrary.indexOf(num));
        bookDiv.appendChild(deleteDiv);

        // add title div
        titleDiv.textContent = num.title;
        titleDiv.classList.add('title');
        bookDiv.appendChild(titleDiv);

        // add author div
        authorDiv.textContent = "By " + num.author;
        authorDiv.classList.add('author');
        bookDiv.appendChild(authorDiv);

        // add pages div
        pagesDiv.textContent = num.pages;
        pagesDiv.classList.add('pages');
        bookDiv.appendChild(pagesDiv);

        readDiv.textContent = num.read;
        readDiv.classList.add('readButton');
        readDiv.setAttribute('id', "read" + myLibrary.indexOf(num));
        bookDiv.appendChild(readDiv); 


        readDivNum = myLibrary.indexOf(num);
        testing(readDivNum);
        removeDeleteButton(readDivNum);
    }
    function removeDeleteButton(num) {
        var deleteButton = document.querySelectorAll('.deleteButton');
        for (let i = num; i< deleteButton.length; i++) {
            var self = deleteButton[i];
            self.addEventListener('click', function() {
                removeBook(self);
            }, false);
        }
    }
    function testing(num) {
       var test = document.querySelectorAll('.readButton');
        // test.forEach(function(elem) {
        //     elem.addEventListener('click', function() {
        //         testRead(this);
        //     });
        // });
        for (let j = num; j < test.length; j++) {
            // (function () {
            var self = test[j];
            self.addEventListener('click', function() {
                testRead(self);
            }, false);
        // }());
    }
}
    
    function testRead(number) {
        numberID = number.getAttribute('id');
        testDiv = document.getElementById(numberID);
            if (testDiv.textContent === "Read") {
                testDiv.textContent = "Not Read";
            } else {
                testDiv.textContent = "Read";
            }
        }
    function removeBook(number) {
        numberID = number.getAttribute('id');
        tempDiv = document.getElementById(numberID);
            tempDiv.parentElement.remove();
            myLibrary.splice(numberID, 1);
    }

    

        // function toggleRead(i) {
        //     testDiv = document.getElementById("book" + i);
        //     if (testDiv.textContent === "Read") {
        //         testDiv.textContent = "Not Read";
        //     } else if(testDiv.textContent === "Not Read") {
        //         testDiv.textContent = "Read";
        //     }
        // }


    function toggleForm() {
        if (formOpen === true) {
        form.style.display = 'block';
        formOpen = false;
        } else if (formOpen === false) {
            form.style.display = 'none';
            formOpen=true;
        }
    }

function clearSubmission() {
    form.style.display = 'none';
    document.getElementById('bookTitle').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";

}






button.addEventListener('click', toggleForm);
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
