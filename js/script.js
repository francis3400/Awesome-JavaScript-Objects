/* Object constructor */
import AwesomeBooks from './awesomebooks.js';

/* Create booksArray and set it to empty if localStorage is null */

const btnAdd = document.getElementById('btn-add');
const listSec = document.getElementById('list-sec');

/* link events */

btnAdd.addEventListener('click', AwesomeBooks.addBook);
listSec.addEventListener('click', AwesomeBooks.removeBook);

/* run */

AwesomeBooks.showList();
