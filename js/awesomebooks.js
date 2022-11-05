import Book from './book.js';

const booksArray = JSON.parse(localStorage.getItem('books')) || [];
const listSec = document.getElementById('list-sec');
const title = document.getElementById('title');
const author = document.getElementById('author');
export default class AwesomeBooks {
  static showList() {
    let listHtml = '';
    for (let i = 0; i < booksArray.length; i += 1) {
      listHtml += `
        <div class="book-row even-odd-${i % 2}" id="book-${i}">
          <p>"${booksArray[i].title}"   by   ${booksArray[i].author}</p>
          <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
        </div>`;
    }
    listSec.innerHTML = listHtml;
  }

  static addBook(e) {
    if (title.value.length > 0 && author.value.length > 0) {
      e.preventDefault();
      booksArray.push(new Book(title.value, author.value));
      title.value = '';
      author.value = '';
      AwesomeBooks.showList();
      localStorage.setItem('books', JSON.stringify(booksArray));
    }
  }

  static removeBook(e) {
    if (!e.target.matches('.btn-remove')) return;
    const { index } = e.target.dataset;
    booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksArray));
    AwesomeBooks.showList();
  }
}
