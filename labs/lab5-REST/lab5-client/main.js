window.onload = function() {
    fetchBooks();
    document.getElementById('addBtn').onclick = function(event) {
        event.preventDefault();
        // console.log('button clicked!'); //for test

        //todo - update
        const bookId = this.dataset.id;
        if (bookId) { //data.id exists --edit books
            fetch('http://localhost:3000/books' + bookId, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: document.getElementById('title').value,
                        isbn: document.getElementById('isbn').value,
                        publishedDate: document.getElementById('publishedDate').value,
                        author: document.getElementById('author').value
                    })

                }).then(data => data.json())
                .then(updateBook => {
                    console.log(updateBook)
                    document.getElementById('form-title').textContent = 'Add a Book';
                    document.getElementById('add-form').reset();
                    document.getElementById('addBtn').dataset.id = '';
                    location.reload(); //TODO --- to update a specific line
                })
        } else {
            createNewBooks();
        }

    }
}

function createNewBooks() {

    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const author = document.getElementById('author').value;

    fetch('http://localhost:4000/books', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                title: title,
                isbn: isbn,
                publishedDate: publishedDate,
                author: author

            })

        }).then(data => data.json())
        .then(b => {
            console.log(b);
            document.getElementById('form-id').reset(); //it resets after enter the value in the form
            attachSigleBook(document.getElementById('book-table'), b);


        });
}

async function fetchBooks() {
    const myBooks = await fetch('http://localhost:3000/books').json();
    const tbody = document.getElementById('book-table');
    myBooks.forEach(b => {
        attachSigleBook(tbody, b);

    })
}


function attachSigleBook(parentNode, book) {

    const tr = document.createElement('tr'); //<tr>
    const titleTd = document.createElement('td'); //<td>11223</td>
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const isbnTd = document.createElement('td');
    titleTd.textContent = book.isbn;
    tr.appendChild(isbnTd);

    const publishedDateTd = document.createElement('td');
    titleTd.textContent = book.publishedDate;
    tr.appendChild(publishedDateTd);

    const authorTd = document.createElement('td');
    titleTd.textContent = book.author;
    tr.appendChild(authorTd);

    const authorTd = document.createElement('td');
    titleTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    // deleteButton.className = 'btn btn-primary';
    deleteButton.innerText = 'DELETE';
    deleteButton.dataset.id = book.id;
    actionTd.appendChild(deleteButton);

    const updateButton = document.createElement('button');
    updateButton.innerText = 'UPDATE';
    updateButton.dataset.id = book.id;

    tr.appendChild(actionTd);

    deleteButton.addEventListener('click', function() {
        fetch('http://localhost:3000/books' + book.id, {
            method: 'DELETE'
        }).then(data => {
            tr.remove();
        });
    })


    updateButton.addEventListener('click', function() {
        fetch('http://localhost:3000/books' + book.id)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                //todo - this is used to populate, when we click on the update button

                //todo - when we click on update the title will appear Edit a Book
                document.getElementById('form-title').textContent = 'Edit a Book';

                document.getElementById('title').value = data.title;
                document.getElementById('isbn').value = data.isbn;
                document.getElementById('publishedDate').value = data.publishedDate;
                document.getElementById('author').value = data.author;

                document.getElementById('addBtn').dataset.id = data.id;
            })
    })


    //     tr.innerHTML = `
    // <td>${book.title}</td>
    // <td>${book.isbn}</td>
    // <td>${book.publishedDate}</td>
    // <td>${book.author}</td>
    // <td><button class="btn btn-primary" id="delete-btn">Delete</button><button>Update</button></td>
    //`
    parentNode.appendChild(tr);

}