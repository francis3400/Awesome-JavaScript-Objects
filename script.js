// function to specify name and author of a book
function Book(name, author) {
  this.name = name;
  this.author = author;
}
// create booksArray and set it to empty if localStorage is null
const booksArray = JSON.parse(localStorage.getItem('books')) || [];

// variables decleration
const btnAdd = document.getElementById('btn-add');
const listSec = document.getElementById('list-sec');
const title = document.getElementById('title');
const author = document.getElementById('author');

// function to display showList
function showList() {
  let listHtml = '';
  for (let i = 0; i < booksArray.length; i++) {
    listHtml += `
    <div class="book-row" id="book-${i}"></div>
    <p>${booksArray[i].name}</p>
    <p>${booksArray[i].author}</p>
    <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button>
    <hr>
    </div>
    `;
  }
  listSec.innerHTML = listHtml;
}

// function to add a book
function addBook(e) {
  if (title.value.length > 0 && author.value.length > 0) {
    e.preventDefault();
    booksArray.push(new Book(title.value, author.value));

    title.value = '';
    author.value = '';
    showList();
    localStorage.setItem('books', JSON.stringify(booksArray));
  }
}

// function to remove a book

function removeBook(e) {
  if (!e.target.matches('.btn-remove')) return;
  const { index } = e.target.dataset;
  booksArray.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(booksArray));
  showList();
}

// the real run

btnAdd.addEventListener('click', addBook);

showList();

listSec.addEventListener('click', removeBook);
