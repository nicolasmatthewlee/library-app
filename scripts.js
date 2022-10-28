let my_library = [];

function Book(title,author,pages,read) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read
};

let library_grid = document.querySelector('.library-grid-container');

function display_library() {

    // clear grid
    while (library_grid.lastChild) {
        library_grid.lastChild.remove();
    }

    // display
    for (let i=0;i<my_library.length;i++) {

        let book=my_library[i];

        // create html object
        let book_item = document.createElement('div');
        book_item.setAttribute('class','book');
        book_item.setAttribute('data-index',i);
        library_grid.appendChild(book_item);

        let book_title = document.createElement('div');
        book_title.setAttribute('class','book-title');
        book_title.textContent=book.title;
        book_item.appendChild(book_title);

        let book_author = document.createElement('div');
        book_author.setAttribute('class','book-author');
        book_author.textContent=book.author;
        book_item.appendChild(book_author);

        let book_pages = document.createElement('div');
        book_pages.setAttribute('class','book-pages');
        book_pages.textContent=book.pages;
        book_item.append(book_pages);

        let pages_label = document.createElement('div');
        pages_label.setAttribute('class','pages-label');
        pages_label.textContent='pages';
        book_item.append(pages_label);

        let book_read = document.createElement('button');
        book_read.setAttribute('class','book-read');
        book_read.textContent=book.read ? 'Read ✅' : 'Not Read ❌';
        book_read.addEventListener('click',() => {
            book.read=!book.read;
            display_library();
        });
        book_item.append(book_read);

        let remove_book = document.createElement('button');
        remove_book.setAttribute('class','book-remove');
        remove_book.textContent='Remove';
        remove_book.addEventListener('click',() => {
            my_library.splice(book_item.dataset.index,1);
            display_library();
        });
        book_item.append(remove_book);

    }

};

function add_to_library(title,author,pages,read) {

    // create new book object and add to my_library
    let book = new Book(title,author,pages,read);
    my_library.push(book);

    // display
    display_library();

};

let add_modal = document.querySelector('#add-book-modal');


let form = document.querySelector('form');
form.addEventListener('submit',(event) => {

    // prevent refresh
    event.preventDefault();

    add_modal.classList.toggle('active');

    let title=document.querySelector('.title-input').value;
    let author=document.querySelector('.author-input').value;
    let pages=document.querySelector('.pages-input').value;
    let read=document.querySelector('.read-input').checked;

    add_to_library(title,author,pages,read);
});

let add_button = document.querySelector('.add');
add_button.addEventListener('click',() => {
    add_modal.classList.toggle('active');
});